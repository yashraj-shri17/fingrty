import { Link } from 'react-router-dom'
import './page.css'

export default function Home() {
  const heroHighlights = [
    { value: '$119M+', label: 'Capital Enabled' },
    { value: 'Billion $', label: 'Turnover Managed' },
    { value: '25+ Yrs', label: 'Leadership DNA' }
  ]

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
              The missing link between <strong>Operational Chaos</strong> and <strong>Financial Discipline</strong>. We don't just consult; we fix.
            </p>
            <div className="hero__actions fade-in delay-3">
              <Link to="/contact" className="btn btn--primary">
                Fix the missing link
              </Link>
              <Link to="/services" className="btn btn--ghost" style={{marginLeft: '1.5rem', fontWeight: 700}}>
                The Practice ↗
              </Link>
            </div>
            <div className="hero-mini-stats fade-in delay-3">
              {heroHighlights.map((item) => (
                <div key={item.label} className="hero-mini-stat">
                  <span>{item.value}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero__visual fade-in delay-2">
            <div className="image-panel">
              <div className="image-panel__item">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Strategic financial planning and analysis" loading="lazy" />
              </div>
              <div className="image-panel__item">
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Collaborative corporate strategy meeting" loading="lazy" />
              </div>
              <div className="image-panel__item">
                <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Corporate governance and compliance structure" loading="lazy" />
              </div>
              <div className="image-panel__item" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-navy)', color: 'white', flexDirection: 'column'}}>
                <span className="image-panel__stat-text">$119M+</span>
                <span style={{fontSize: '0.8rem', opacity: '0.8', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Capital Raised</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional DNA Strip */}
      <section className="dna-strip" style={{padding: '2rem 1.5rem', background: '#f8fbfc', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)'}}>
        <div style={{maxWidth: 'var(--content-max)', margin: '0 auto', textAlign: 'center'}}>
          <p className="section-label" style={{fontSize: '0.65rem', marginBottom: '1.5rem'}}>Institutional DNA from</p>
          <div className="logo-strip">
             <span>AMAZON</span>
             <span>EY</span>
             <span>PwC</span>
             <span>DELOITTE</span>
             <span>DTDC</span>
             <span>FASAL</span>
             <span>SUGARFIT</span>
          </div>
        </div>
      </section>

      <div className="page">
        <section className="block" style={{background: 'var(--color-navy)', color: 'white', borderRadius: 'var(--radius)', marginTop: '2rem'}}>
          <div className="grid-2" style={{padding: '4rem'}}>
            <div>
              <p className="section-label" style={{color: 'var(--color-teal)'}}>The Proof</p>
              <h2 className="block__title" style={{color: 'white'}}>Unwavering Results.</h2>
              <p className="block__intro" style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem'}}>
                Bridging the gap between founder speed and institutional discipline. We deliver boardroom-ready execution, not just advice.
              </p>
              <div className="stat-grid-inline" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem', marginTop: '3.5rem'}}>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block', fontWeight: 800}}>25+ Yrs</span>
                  <span className="stat-label" style={{color: 'white', opacity: 0.6, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Leadership</span>
                </div>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block', fontWeight: 800}}>$119M+</span>
                  <span className="stat-label" style={{color: 'white', opacity: 0.6, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Momentum</span>
                </div>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block', fontWeight: 800}}>15k CR+</span>
                  <span className="stat-label" style={{color: 'white', opacity: 0.6, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Scale</span>
                </div>
              </div>
            </div>
            <div className="results-panel">
               <ul className="modern-list" style={{color: 'white', marginTop: 0}}>
                 <li style={{color: 'white', marginBottom: '1rem'}}>
                   <strong>Institutional Scale:</strong> Managed billion-dollar P&Ls and global turnovers.
                 </li>
                 <li style={{color: 'white', marginBottom: '1rem'}}>
                   <strong>Modern Systems:</strong> End-to-end ERP Transition & Process Automation.
                 </li>
                 <li style={{color: 'white'}}>
                   <strong>Governance:</strong> Institutional SOX & IFRS aligned controllership.
                 </li>
               </ul>
            </div>
          </div>
        </section>

        <section className="block">
           <div className="paradox-head">
              <p className="section-label">The Strategy</p>
              <h2 className="block__title paradox-title">The Growth Paradox</h2>
              <p className="block__intro paradox-intro">
                 Growth looks exciting outside, but inside the finance engine usually starts breaking quietly. We close the gap between founder speed and institutional discipline before it hurts valuation.
              </p>
           </div>

           <div className="paradox-grid">
              <article className="paradox-card">
                <span className="paradox-card__tag">01 | Data Room Friction</span>
                <h3>Fundraising momentum slows down.</h3>
                <p>Numbers live in scattered sheets, monthly closure slips, and investor queries take too long to answer.</p>
              </article>
              <article className="paradox-card">
                <span className="paradox-card__tag">02 | Cashflow Blindspots</span>
                <h3>Runway gets risky without warning.</h3>
                <p>Collections, payables, and burn are managed reactively, creating avoidable pressure during critical growth stages.</p>
              </article>
              <article className="paradox-card">
                <span className="paradox-card__tag">03 | Compliance Overhang</span>
                <h3>Execution speed drops near audits.</h3>
                <p>Teams scramble at period-end when controls are weak, reducing leadership bandwidth for core business priorities.</p>
              </article>
           </div>

           <div className="paradox-solution">
              <p className="paradox-solution__label">How We Fix It</p>
              <p>
                We install <strong>clean closure rhythms</strong>, <strong>board-ready MIS</strong>, and <strong>governance discipline</strong> so your
                finance function becomes a growth lever, not a growth blocker.
              </p>
           </div>
        </section>

        {/* The Operating Rhythm */}
        <section className="block">
          <p className="section-label" style={{textAlign: 'center'}}>Engagement Model</p>
          <h2 className="block__title" style={{textAlign: 'center', marginBottom: '4rem'}}>The Operating Rhythm</h2>
          
          <div className="rhythm-grid">
            <div className="rhythm-card">
               <div className="rhythm-step">01</div>
               <h3>Discovery</h3>
               <p>Deep audit of existing books, data rooms, and compliance hygiene. We identify the "Leakages" first.</p>
            </div>
            <div className="rhythm-card">
               <div className="rhythm-step">02</div>
               <h3>Deep Dive</h3>
               <p>Designing workflows, MIS architecture, and ERP-transition plans. Setting up the bedrock for scale.</p>
            </div>
            <div className="rhythm-card">
               <div className="rhythm-step">03</div>
               <h3>Execution</h3>
               <p>We embed as your Fractional Leadership. P&L ownership, fundraising support, and statutory management.</p>
            </div>
            <div className="rhythm-card">
               <div className="rhythm-step">04</div>
               <h3>Governance</h3>
               <p>Long-term board reporting, risk assessment, and maintaining institutional-grade audit readiness.</p>
            </div>
          </div>
        </section>

        {/* Sectoral Mastery */}
        <section className="block sectoral-section">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <p className="section-label">Sectoral Mastery</p>
            <h2 className="block__title">Deep Industry Comprehension.</h2>
            <p className="block__intro" style={{margin: '0 auto'}}>
              We understand how money moves in your specific sector. Finance isn't one-size-fits-all.
            </p>
          </div>
          
          <div className="sector-grid-premium">
             <div className="sector-pill-premium">
                <strong>Healthcare & MedTech</strong>
                <span>Managing high-capex cycles & inventory controls.</span>
             </div>
             <div className="sector-pill-premium">
                <strong>Consumer & D2C</strong>
                <span>Mastering unit economics & marketing ROI.</span>
             </div>
             <div className="sector-pill-premium">
                <strong>Agri-Tech</strong>
                <span>Supply chain resilience & working capital governance.</span>
             </div>
             <div className="sector-pill-premium">
                <strong>FinTech & SaaS</strong>
                <span>Focus on MRR churn, burn-rates & regulatory compliance.</span>
             </div>
          </div>
        </section>

        <section className="block">
          <p className="section-label" style={{textAlign: 'center'}}>Expertise</p>
          <h2 className="block__title" style={{textAlign: 'center', marginBottom: '1rem'}}>A Dynamic Suite.</h2>
          
          <div className="marquee-wrapper">
             <div className="marquee-content">
               {[...Array(2)].map((_, loopIdx) => (
                 <span key={loopIdx} style={{ display: 'flex', gap: '2rem' }}>
                   {[
                     { title: 'Fundraising', num: '01', desc: 'Series A/B readiness & equity-debt structuring.', icon: '💰' },
                     { title: 'Strategic Finance', num: '02', desc: 'Unit economics, MIS & P&L ownership.', icon: '📊' },
                     { title: 'Tax & Compliance', num: '03', desc: 'Monthly closure & statutory hygiene.', icon: '🛡️' },
                     { title: 'IPO Readiness', num: '04', desc: 'Governance & board-level reporting.', icon: '📈' },
                     { title: 'Risk Advisory', num: '05', desc: 'Internal controls & audit management.', icon: '⚖️' }
                   ].map((item, i) => (
                     <div key={i} className="gallery-item-premium">
                        <div className="gallery-item__top">
                          <span className="gallery-item__num">PHASE {item.num}</span>
                          <span className="gallery-item__icon">{item.icon}</span>
                        </div>
                        <h3 className="gallery-item__title">{item.title}</h3>
                        <p className="gallery-item__desc">{item.desc}</p>
                        <div className="gallery-item__accent" />
                     </div>
                   ))}
                 </span>
               ))}
             </div>
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
              <img src="https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Clean and organized financial reporting" className="feature-img" loading="lazy" />
              <div className="floating-card">
                <p style={{fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem'}}>Bengaluru Hub</p>
                <p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0}}>Serving global scale-ups from the heart of India’s startup capital.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
