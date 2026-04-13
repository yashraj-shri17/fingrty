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
                Our institutional DNA comes from leadership roles at <strong>Amazon JVs, EY, & PwC</strong>. We deliver more than just advice; we deliver execution.
              </p>
              <div className="stat-grid-inline" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block'}}>Zero</span>
                  <span className="stat-label" style={{color: 'white', opacity: 0.8, fontSize: '0.85rem'}}>Statutory Audit Observation Record</span>
                </div>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block'}}>$119M+</span>
                  <span className="stat-label" style={{color: 'white', opacity: 0.8, fontSize: '0.85rem'}}>VC & Debt Capital Supported</span>
                </div>
              </div>
            </div>
            <div className="visual-block">
               <ul className="modern-list" style={{color: 'white'}}>
                 <li style={{color: 'white'}}>Managed <strong>INR 15,000CR</strong> turnover at Scale</li>
                 <li style={{color: 'white'}}>ERP Transition & Process Automation Specialist</li>
                 <li style={{color: 'white'}}>IND AS / IFRS / SOX-aligned controls</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="block">
           <div style={{textAlign: 'center', marginBottom: '5rem'}}>
              <p className="section-label">The Strategy</p>
              <h2 className="block__title" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0 auto 1.5rem', maxWidth: '900px'}}>The Growth Paradox</h2>
              <p className="block__intro" style={{margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.6'}}>
                 As you scale, the gap between <strong>Vison</strong> and <strong>Discipline</strong> widens. Fundraising stalls due to messy data rooms. Cash-flow surprises kill runway. Compliance risks threaten valuation. 
                 <br /><br />
                 We solve the <strong>Missing Link</strong>.
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
               <p>Long-term board reporting, risk assessment, and maintaining zero-observation audit readiness.</p>
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
