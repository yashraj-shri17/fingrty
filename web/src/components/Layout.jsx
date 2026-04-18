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
          background: '#0d9488',
          color: 'white',
          textAlign: 'center',
          fontSize: '0.65rem',
          padding: '0.5rem',
          zIndex: 9999,
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          Establishing secure connection to server...
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
