import { Link } from 'react-router-dom'
import './page.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow fade-in">Fingrity Advisors LLP</span>
            <h1 className="hero__title fade-in delay-1">
              Strategizing <span style={{color: 'var(--color-teal)'}}>$119M+</span> in capital for scale-ups.
            </h1>
            <p className="hero__sub fade-in delay-2">
              We bridge the gap between operational chaos and financial discipline. From Amazon-grade MIS to Series A/B fundraising readiness.
            </p>
            <div className="hero__actions fade-in delay-3">
              <Link to="/contact" className="btn btn--primary">
                Start a conversation
              </Link>
              <Link to="/services" className="btn btn--ghost" style={{marginLeft: '1.5rem', fontWeight: 700}}>
                The Practice ↗
              </Link>
            </div>
          </div>
          
          <div className="hero__visual fade-in delay-2">
            <div className="image-panel">
              <div className="image-panel__item">
                <img src="/images/hero1.png" alt="Strategic financial planning and analysis" loading="lazy" />
              </div>
              <div className="image-panel__item">
                <img src="/images/hero2.png" alt="Collaborative corporate strategy meeting" loading="lazy" />
              </div>
              <div className="image-panel__item">
                <img src="/images/service1.png" alt="Corporate governance and compliance structure" loading="lazy" />
              </div>
              <div className="image-panel__item" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-navy)', color: 'white', flexDirection: 'column'}}>
                <span style={{fontSize: '3rem', fontWeight: '800'}}>$119M+</span>
                <span style={{fontSize: '0.8rem', opacity: '0.8', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Capital Managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page">
        <section className="block">
          <div className="stat-grid" style={{background: 'white', border: '1px solid var(--color-border)'}}>
            <div className="stat-card">
              <span className="stat-value">$119M+</span>
              <span className="stat-label">Capital results supported</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Ex-EY/PwC</span>
              <span className="stat-label">Institutional DNA in execution</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Zero Ops</span>
              <span className="stat-label">Statutory Audit Observation Record</span>
            </div>
          </div>
        </section>

        <section className="block">
           <div style={{textAlign: 'center', marginBottom: '5rem'}}>
              <p className="section-label">The Philosophy</p>
              <h2 className="block__title" style={{fontSize: '3rem', margin: '0 auto 1.5rem', maxWidth: '800px'}}>The Growth Paradox</h2>
              <p className="block__intro" style={{margin: '0 auto', fontSize: '1.1rem'}}>
                 As companies scale, the gap between **Speed** and **Discipline** widens. We close that gap.
              </p>
           </div>
        </section>

        <section className="block" style={{marginTop: '-4rem'}}>
          <p className="section-label" style={{textAlign: 'center'}}>Expertise</p>
          <h2 className="block__title" style={{textAlign: 'center', marginBottom: '1rem'}}>A Dynamic Suite.</h2>
          
          <div className="horizontal-gallery">
             {[
               { title: 'Fundraising', num: '01', desc: 'Series A/B readiness & equity-debt structuring.' },
               { title: 'Strategic Finance', num: '02', desc: 'Unit economics, MIS & P&L ownership.' },
               { title: 'Tax & Compliance', num: '03', desc: 'Monthly closure & statutory hygiene.' },
               { title: 'IPO Readiness', num: '04', desc: 'Governance & board-level reporting.' },
               { title: 'Risk Advisory', num: '05', desc: 'Internal controls & audit management.' }
             ].map((item, i) => (
               <div key={i} className="gallery-item" style={{borderLeft: '4px solid var(--color-teal)'}}>
                  <span style={{fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-teal)', marginBottom: '1rem', display: 'block'}}>PHASE {item.num}</span>
                  <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-navy)'}}>{item.title}</h3>
                  <p style={{color: 'var(--color-text-muted)', fontSize: '0.95rem'}}>{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        <section className="block">
          <div className="grid-2">
            <div>
              <p className="section-label">Why Us</p>
              <h2 className="block__title">Institutional-grade execution</h2>
              <p className="block__intro" style={{fontSize: '1.1rem'}}>
                We don't just "advise" — we embed as fractional leaders to fix messy data rooms, stop cash-flow leaks, and build audit-ready books.
              </p>
              <ul className="modern-list">
                <li>Deep experience at <strong>Amazon, EY, Deloitte, & PwC</strong>.</li>
                <li>Strategic partnership across medtech, fintech, and Agri-tech.</li>
                <li>Proven track record of managing complicated due diligence.</li>
              </ul>
            </div>
            <div className="visual-block">
              <img src="/images/hero2.png" alt="Clean and organized financial reporting" className="feature-img" loading="lazy" />
              <div className="floating-card">
                <p style={{fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem'}}>Bengaluru Hub</p>
                <p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0}}>Serving global scale-ups from the heart of India’s startup capital.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="block">
          <p className="section-label">Sectors</p>
          <h2 className="block__title">Contextual Experience</h2>
          <div className="sector-pills" style={{marginTop: '2rem'}}>
            {[
              'Healthcare & MedTech',
              'Consumer & D2C',
              'Agri-Tech',
              'FinTech & Payments',
              'SaaS & platforms',
              'Retail & distribution',
              'Manufacturing',
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
