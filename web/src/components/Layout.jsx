import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useLocation } from 'react-router-dom'
import { useContent } from '../ContentContext.jsx'

export default function Layout({ children }) {
  const location = useLocation();
  const { serverStatus } = useContent();
  const isAdminPage = location.pathname === '/changewithfingrty';
  const isChatPage = location.pathname === '/chatwithfingrty';
  const showBanner = serverStatus === 'waking' && (isAdminPage || isChatPage);

  return (
    <div className="site-shell">
      {showBanner && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'var(--color-teal)',
          color: 'white',
          textAlign: 'center',
          fontSize: '0.75rem',
          padding: '0.25rem',
          zIndex: 9999,
          fontWeight: 600,
          letterSpacing: '0.05em'
        }}>
          BE PATIENT • SERVER IS WAKING UP...
        </div>
      )}
      {!isAdminPage && <div className="top-accent" aria-hidden />}
      {!isAdminPage && <Header />}
      <main className="site-main" id="main" style={isAdminPage ? { padding: 0, margin: 0 } : {}}>
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </div>
  )
}
