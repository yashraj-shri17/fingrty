import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation();
  const isAdminPage = location.pathname === '/changewithfingrty';

  return (
    <div className="site-shell">
      {!isAdminPage && <div className="top-accent" aria-hidden />}
      {!isAdminPage && <Header />}
      <main className="site-main" id="main" style={isAdminPage ? { padding: 0, margin: 0 } : {}}>
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </div>
  )
}
