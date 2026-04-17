import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const ContentProvider = ({ children }) => {
  const [contentMap, setContentMap] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const res = await fetch(`${API_URL}/api/content`);
      const data = await res.json();
      const map = data.reduce((acc, item) => {
        acc[item.key] = item.content;
        return acc;
      }, {});
      setContentMap(map);
    } catch (err) {
      console.error('Failed to fetch content', err);
    } finally {
      setLoading(false);
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
    <ContentContext.Provider value={{ t, h, loading, refreshContent: fetchContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
