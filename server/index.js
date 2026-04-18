const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increased limit for large content

// Health check endpoint for Render wakeup
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is awake' });
});


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Common requirement for Neon/Heroku
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Initialize DB
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        id SERIAL PRIMARY KEY,
        key TEXT UNIQUE NOT NULL,
        content TEXT NOT NULL,
        page TEXT,
        section TEXT,
        label TEXT
      );
    `);
    console.log('Database initialized');
  } catch (err) {
    console.error('Error initializing database', err);
  }
};

initDb();

// Auth endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Content endpoints
app.get('/api/content', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM site_content ORDER BY page, section, id');
    res.json(result.rows);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/content', authenticateToken, async (req, res) => {
  const { items } = req.body;
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    console.log(`Starting update for ${items.length} items...`);
    
    for (const item of items) {
      await client.query(
        `INSERT INTO site_content (key, content, page, section, label)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT (key) DO UPDATE SET content = $2, page = $3, section = $4, label = $5`,
        [item.key, item.content, item.page, item.section, item.label]
      );
    }
    
    await client.query('COMMIT');
    console.log('Update successful');
    res.json({ message: 'Content updated successfully' });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Update error:', err);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
