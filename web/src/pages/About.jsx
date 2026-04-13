import { Link } from 'react-router-dom'
import './page.css'

export default function About() {
  return (
    <div className="page">
      <header style={{ padding: '2rem 0 3rem' }}>
        <p className="section-label">Our Story</p>
        <h1 className="page__title">People behind the practice</h1>
        <p className="block__intro">
          Fingrity Advisors LLP is a strategic finance and governance partnership. We combine fundraising depth with operational rigour — so you can scale without losing trust.
        </p>
      </header>

      <div className="grid-2" style={{marginBottom: '4rem'}}>
        <article className="action-card">
          <p className="section-label" style={{fontSize: '0.7rem'}}>Founder lens · Strategy</p>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            Rahul Kanodia — CA, CS
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Rahul translates complex financial roadblocks into founder-friendly strategies with institutional-grade execution. He specializes in investor relations, business finance, and capital management.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            Previously: Head of Finance at healthcare scale-ups, Controller at Fasal (agri-tech), Amazon JV, and PwC. 
            <br /><br />
            <a href="https://www.linkedin.com/in/rahulkanodiark" target="_blank" rel="noreferrer noopener" style={{color: 'var(--color-teal)', fontWeight: '700'}}>
              View LinkedIn ↗
            </a>
          </p>
        </article>

        <article className="action-card">
          <p className="section-label" style={{fontSize: '0.7rem'}}>Institutional lens · Compliance</p>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Rupali Kanodia — CA</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Rupali builds robust frameworks for compliance and scalability. She leads financial reporting, IND AS / IFRS adoption, audit coordination, and operational risk management.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            Previously: AGM at DTDC, MediaKind, and assurance leadership at EY and Deloitte across large-cap and listed clients.
          </p>
        </article>
      </div>

      <section className="block" style={{background: 'var(--color-surface)', borderRadius: 'var(--radius)', padding: '4rem'}}>
        <div className="grid-2">
          <div>
            <h2 className="block__title">What we stand for</h2>
            <p className="block__intro" style={{fontSize: '1rem', marginBottom: '2rem'}}>
              Our brand is built on clarity and trust. Navy conveys structure; teal signals forward motion.
            </p>
            <ul className="modern-list">
              <li>Clarity over jargon — numbers should inform decisions.</li>
              <li>Continuity — we embed with your team, not just advise.</li>
              <li>Integrity — audit-ready work and honest timelines.</li>
            </ul>
          </div>
          <div className="visual-block">
             <div className="image-panel">
                <div className="image-panel__item" style={{height: '200px'}}><img src="/images/hero1.png" alt="Institutional DNA and values" loading="lazy" /></div>
                <div className="image-panel__item" style={{height: '200px'}}><img src="/images/service1.png" alt="Precision and integrity in finance" loading="lazy" /></div>
             </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link to="/contact" className="btn btn--primary">
          Work with us
        </Link>
      </div>
    </div>
  )
}
