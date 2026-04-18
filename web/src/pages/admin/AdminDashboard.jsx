import React, { useState, useEffect, useRef } from 'react';
import './Admin.css';
import { useContent } from '../../ContentContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function AdminDashboard() {
  const { refreshContent } = useContent();
  const [content, setContent] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [view, setView] = useState('content'); // 'content' or 'leads'
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activePage, setActivePage] = useState('');
  const [showNav, setShowNav] = useState(false);

  const token = localStorage.getItem('fingrity_admin_token');
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    fetchContent();
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/submissions`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch (err) {
      console.error("Inquiry fetch error", err);
    }
  };

  const deleteSubmission = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    try {
      const res = await fetch(`${API_URL}/api/submissions/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        setSubmissions(prev => prev.filter(s => s.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const fetchContent = async (retryCount = 0) => {
    try {
      const res = await fetch(`${API_URL}/api/content`, {
        signal: AbortSignal.timeout(15000) // 15s per attempt
      });
      
      if (!res.ok) throw new Error('Not ready');

      const data = await res.json();
      setContent(data);
      setMessage('');
      if (data.length > 0) {
        const pages = [...new Set(data.map(i => i.page))].sort();
        setActivePage(pages[0]);
      }
      setLoading(false);
    } catch (err) {
      if (retryCount < 12) { // Allow up to ~3 minutes of waking up
        setMessage(`Server is waking up. This takes 1-2 minutes on free tier... (Attempt ${retryCount + 1})`);
        setTimeout(() => fetchContent(retryCount + 1), 7000); 
      } else {
        setLoading(false);
        setMessage('Network error. Backend failed to wake up after 3 minutes.');
      }
    }
  };

  const handleChange = (id, value) => {
    setContent(prev => prev.map(item => item.id === id ? { ...item, content: value } : item));
  };

  const handleImageUpload = async (id, file) => {
    if (!file) return;

    // Show immediate feedback
    setMessage('Processing image...');

    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Max dimensions for web optimality
        const MAX_WIDTH = 1200;
        if (width > MAX_WIDTH) {
          height = (MAX_WIDTH / width) * height;
          width = MAX_WIDTH;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Compress and convert to Base64 (WebP for best size/quality balance)
        const compressedBase64 = canvas.toDataURL('image/webp', 0.8);
        
        // Update state
        handleChange(id, compressedBase64);
        setMessage('Image ready to sync.');
        setTimeout(() => setMessage(''), 3000);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    setMessage('');

    try {
      const res = await fetch(`${API_URL}/api/content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ items: content })
      });

      if (res.ok) {
        await refreshContent();
        setMessage('Dashboard successfully synced with public site.');
        setTimeout(() => setMessage(''), 5000);
      } else {
        const errorData = await res.json().catch(() => ({}));
        setMessage(`Publish failed: ${errorData.error || errorData.message || 'Status ' + res.status}`);
      }
    } catch (err) {
      setMessage('Network error.');
    } finally {
      setSaving(false);
    }
  };

  const scrollToPage = (pageName) => {
    setActivePage(pageName);
    setShowNav(false);
    sectionRefs.current[pageName]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (loading) return <div className="admin-loading"><div className="admin-loader"></div></div>;

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.page]) acc[item.page] = {};
    if (!acc[item.page][item.section]) acc[item.page][item.section] = [];
    acc[item.page][item.section].push(item);
    return acc;
  }, {});

  const sortedPages = Object.keys(groupedContent).sort();

  return (
    <div className="admin-wrapper">
      {showNav && <div className="nav-overlay" onClick={() => setShowNav(false)}></div>}

      <aside className={`admin-nav ${showNav ? 'is-open' : ''}`}>
        <div className="nav-brand">
          <div className="brand-dot"></div>
          <span>Fingrity</span>
          <button className="nav-close" onClick={() => setShowNav(false)}>✕</button>
        </div>
        
        <div className="nav-menu">
          <p className="menu-label">Web Content</p>
          {sortedPages.map(page => (
            <button 
              key={page} 
              className={`menu-item ${view === 'content' && activePage === page ? 'is-active' : ''}`}
              onClick={() => {
                setView('content');
                scrollToPage(page);
              }}
            >
              {page.replace(/^\d+\s/, '')}
            </button>
          ))}

          <p className="menu-label" style={{marginTop: '2rem'}}>Inquiries</p>
          <button 
            className={`menu-item ${view === 'leads' ? 'is-active' : ''}`}
            onClick={() => {
              setView('leads');
              setShowNav(false);
            }}
          >
            Leads {submissions.length > 0 && <span style={{float: 'right', background: 'var(--adm-teal)', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem'}}>{submissions.length}</span>}
          </button>
        </div>

        <div className="nav-footer">
          <button className="btn-logout" onClick={() => { localStorage.removeItem('fingrity_admin_token'); window.location.reload(); }}>
            Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="main-header">
          <div className="mobile-header-row">
            <button className="btn-menu-toggle" onClick={() => setShowNav(true)}>MENU</button>
            <div className="header-info">
               <h1>{view === 'leads' ? 'Customer Inquiries' : activePage.replace(/^\d+\s/, '') + ' Configuration'}</h1>
               <p>{view === 'leads' ? 'Lead Management' : 'Live Dashboard Sync'}</p>
            </div>
          </div>
          {view === 'content' && (
            <button 
              className={`btn-publish ${saving ? 'is-syncing' : ''}`} 
              onClick={handleSave} 
              disabled={saving}
            >
              {saving ? 'Syncing...' : 'Sync Live Site'}
            </button>
          )}
        </header>

        {message && <div className="admin-toast">{message}</div>}

        <div className="workspace-scroll" ref={scrollContainerRef}>
          {view === 'leads' ? (
            <div className="page-workspace">
              <div className="workspace-intro">
                <h2>Inquiries</h2>
              </div>
              
              <div className="leads-list">
                {submissions.length === 0 ? (
                  <p style={{color: '#94a3b8', textAlign: 'center', padding: '4rem'}}>No inquiries yet.</p>
                ) : (
                  submissions.map(lead => (
                    <div key={lead.id} className="lead-card">
                       <div className="lead-header">
                          <div>
                            <h3>{lead.name}</h3>
                            <a href={`mailto:${lead.email}`} style={{color: 'var(--adm-teal)', fontSize: '0.9rem', textDecoration: 'none'}}>{lead.email}</a>
                          </div>
                          <button className="btn-delete" onClick={() => deleteSubmission(lead.id)}>✕</button>
                       </div>
                       <div className="lead-intent">
                          <strong>Interested in:</strong> {lead.interest}
                       </div>
                       <div className="lead-message">
                          {lead.message}
                       </div>
                       <div className="lead-footer">
                          {new Date(lead.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                       </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            sortedPages.map((page) => {
              const sections = groupedContent[page];
              return (
                <section key={page} className="page-workspace" ref={el => sectionRefs.current[page] = el}>
                  <div className="workspace-intro">
                     <h2>{page.replace(/^\d+\s/, '')}</h2>
                  </div>

                {Object.keys(sections).sort().map((section) => (
                  <div key={section} className="section-block">
                    <h3 className="section-title">{section.replace(/^\d+\s/, '')}</h3>
                    <div className="section-fields">
                      {sections[section].map(item => {
                        const isImg = item.label.toLowerCase().includes('image') || item.label.toLowerCase().includes('photo') || item.label.toLowerCase().includes('url');
                        const isLong = item.content.length > 100;

                        return (
                          <div key={item.id} className="field-row">
                            <div className="field-label-cell">
                                <label>{item.label}</label>
                                <span className="field-meta">ID: {item.key}</span>
                                {item.key.endsWith('_title') && (
                                  <span className="field-hint">💡 Use [bracket] to highlight</span>
                                )}
                                {(item.key.endsWith('_list') || item.key.endsWith('_badges')) && (
                                  <span className="field-hint">💡 Use comma , for list</span>
                                )}
                            </div>
                            <div className="field-input-cell">
                               {isLong && !isImg ? (
                                 <textarea 
                                   value={item.content}
                                   onChange={(e) => handleChange(item.id, e.target.value)}
                                   placeholder={`Type ${item.label.toLowerCase()} content here...`}
                                 />
                               ) : (
                                 <div className="input-group">
                                    <input 
                                      type="text" 
                                      value={item.content}
                                      onChange={(e) => handleChange(item.id, e.target.value)}
                                      placeholder={`Enter ${item.label.toLowerCase()}...`}
                                    />
                                    {isImg && (
                                      <label className="btn-inline-upload">
                                        Upload
                                        <input 
                                          type="file" 
                                          accept="image/*" 
                                          onChange={(e) => handleImageUpload(item.id, e.target.files[0])} 
                                          hidden 
                                        />
                                      </label>
                                    )}
                                    {isImg && item.content && (
                                      <div className="img-preview-bubble">
                                        <img src={item.content} alt="Preview" />
                                      </div>
                                    )}
                                 </div>

                               )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
