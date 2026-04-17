import React, { useState, useEffect, useRef } from 'react';
import './Admin.css';
import { useContent } from '../../ContentContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function AdminDashboard() {
  const { refreshContent } = useContent();
  const [content, setContent] = useState([]);
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
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch(`${API_URL}/api/content`);
      const data = await res.json();
      setContent(data);
      if (data.length > 0) {
        const pages = [...new Set(data.map(i => i.page))].sort();
        setActivePage(pages[0]);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleChange = (id, value) => {
    setContent(prev => prev.map(item => item.id === id ? { ...item, content: value } : item));
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
        setMessage('Failed to publish. Check your connection.');
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
              className={`menu-item ${activePage === page ? 'is-active' : ''}`}
              onClick={() => scrollToPage(page)}
            >
              {page.replace(/^\d+\s/, '')}
            </button>
          ))}
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
               <h1>{activePage.replace(/^\d+\s/, '')} Configuration</h1>
               <p>Live Dashboard Sync</p>
            </div>
          </div>
          <button 
            className={`btn-publish ${saving ? 'is-syncing' : ''}`} 
            onClick={handleSave} 
            disabled={saving}
          >
            {saving ? 'Syncing...' : 'Sync Live Site'}
          </button>
        </header>

        {message && <div className="admin-toast">{message}</div>}

        <div className="workspace-scroll" ref={scrollContainerRef}>
          {sortedPages.map((page) => {
            const sections = groupedContent[page];
            return (
              <section key={page} className="page-workspace" ref={el => sectionRefs.current[page] = el}>
                <div className="workspace-intro">
                   <h2>{page.replace(/^\d+\s/, '')}</h2>
                   <div className="quick-tips">
                      <span>💡 <strong>[bracket]</strong> to highlight words</span>
                      <span>💡 <strong>comma</strong> for list items</span>
                   </div>
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
