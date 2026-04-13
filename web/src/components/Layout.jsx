import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <div className="top-accent" aria-hidden />
      <Header />
      <main className="site-main" id="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
