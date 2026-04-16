import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-col footer-col--brand">
          <img src="/logo.png" alt="Fingrity" className="footer-logo" />
          <p className="footer-about">
            Strategic finance and governance partnership for companies that outgrow spreadsheets. Integrity in Finance. Globally.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/rahulkanodiark" target="_blank" rel="noreferrer noopener">
               LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Navigate</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Office</h2>
          <p className="footer-info">
            Bengaluru, India<br />
            Supporting scale-ups globally.
          </p>
          <h2 className="footer-heading" style={{marginTop: '2rem'}}>Direct</h2>
          <ul className="footer-links">
             <li><a href="mailto:rk@fingrityadvisors.com">rk@fingrityadvisors.com</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bar">
        <p>© {year} Fingrity Advisors LLP. All rights reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: '600'
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
