import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const ContentProvider = ({ children }) => {
  const [contentMap, setContentMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState('checking'); // checking, waking, online, error

  const fetchContent = async (retryCount = 0) => {
    try {
      if (retryCount === 0) setServerStatus('checking');
      
      const res = await fetch(`${API_URL}/api/content`, {
        signal: AbortSignal.timeout(10000) // 10s timeout per attempt
      });
      
      if (!res.ok) throw new Error('Server not ready');

      const data = await res.json();
      const map = data.reduce((acc, item) => {
        acc[item.key] = item.content;
        return acc;
      }, {});
      
      setContentMap(map);
      setServerStatus('online');
      setLoading(false);
    } catch (err) {
      console.error(`Fetch attempt ${retryCount + 1} failed:`, err.message);
      
      // If server is sleeping (timeout or 503/502), retry up to 12 times (total ~3 mins)
      if (retryCount < 12) {
        setServerStatus('waking');
        setTimeout(() => fetchContent(retryCount + 1), 7000); 
      } else {
        setServerStatus('error');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  // Simple translate
  const t = (key, defaultValue) => {
    return contentMap[key] || defaultValue;
  };

  // Translate and convert [text] to teal-highlighted span for titles
  const h = (key, defaultValue) => {
    const raw = t(key, defaultValue);
    if (!raw) return defaultValue;
    // Replaces [anything] with a styled span
    return raw.replace(/\[(.*?)\]/g, '<span style="color: var(--color-teal)">$1</span>');
  };

  return (
    <ContentContext.Provider value={{ t, h, loading, serverStatus, refreshContent: fetchContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
