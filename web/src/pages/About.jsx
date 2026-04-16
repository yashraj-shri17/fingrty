import { Link } from 'react-router-dom'
import './page.css'

export default function About() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="section-label" style={{color: 'var(--color-teal)'}}>Leadership DNA</p>
          <h1 className="page__title" style={{maxWidth: '900px'}}>
            We translate financial roadblocks into <span style={{color: 'var(--color-teal)'}}>Growth Strategies.</span>
          </h1>
          <p className="block__intro" style={{fontSize: '1.25rem', maxWidth: '800px'}}>
            Fingrity Advisors was founded on a simple premise: Founders shouldn't have to choose between startup speed and institutional-grade financial discipline.
          </p>
          <div className="about-hero__quote">
            <span>Founder-first. Institution-ready.</span>
            <p>Every engagement is engineered for confidence in boardrooms, diligence rooms, and day-to-day execution.</p>
          </div>
        </div>
      </section>

      {/* The Pillars / Philosophies */}
      <section className="block" style={{marginTop: '-2rem'}}>
        <div className="grid-3">
          <div className="value-card">
            <span className="value-icon">🎯</span>
            <h3>Precision</h3>
            <p>Amazon-grade MIS and error-free statutory hygiene. Built for scale, built for trust.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>Partnership</h3>
            <p>We don't just advise; we embed as Fractional CFOs/COOs to fix execution gaps.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🛡️</span>
            <h3>Integrity</h3>
            <p>Transparency and ethical conduct are at the core of everything we build for you.</p>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="block">
        <div style={{marginBottom: '4rem'}}>
          <p className="section-label">The Founders</p>
          <h2 className="block__title">A Multi-Disciplinary Edge.</h2>
        </div>

        <div className="profile-container">
          {/* Rahul's Profile */}
          <div className="profile-grid">
            <div className="profile-info">
              <span className="profile-lens">The Founder Lens | Strategy & Fundraising</span>
              <h2 className="profile-name">Rahul Kanodia, <span className="qual">CA, CS</span></h2>
              <div className="profile-bio">
                <p>
                  Rahul translates complex financial roadblocks into founder-friendly growth strategies. With a track record of driving <strong>$119M+</strong> in capital raised, he bridges the gap between VC expectations and operational reality.
                </p>
                <p>
                  He specializes in investor relations, strategic FP&A, and building the "Scale-up DNA" within finance teams.
                </p>
              </div>
              <div className="past-badges">
                <span className="badge">Ex-Sugarfit</span>
                <span className="badge">Ex-Fasal</span>
                <span className="badge">Ex-Amazon JV</span>
                <span className="badge">Ex-PwC</span>
              </div>
              <a href="https://www.linkedin.com/in/rahulkanodiark" target="_blank" rel="noreferrer" className="btn btn--ghost" style={{marginTop: '2rem'}}>LinkedIn ↗</a>
            </div>
            <div className="profile-image-container">
               <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rahul Kanodia" className="profile-img-placeholder" />
            </div>
          </div>

          <div className="profile-divider" style={{height: '1px', background: 'var(--color-border)', margin: '6rem 0'}} />

          {/* Rupali's Profile */}
          <div className="profile-grid profile-grid--reversed">
             <div className="profile-image-container">
               <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rupali Kanodia" className="profile-img-placeholder" />
            </div>
            <div className="profile-info">
              <span className="profile-lens">The Institutional Lens | Finance & Compliance</span>
              <h2 className="profile-name">Rupali Kanodia, <span className="qual">CA</span></h2>
              <div className="profile-bio">
                <p>
                  Rupali instills financial discipline and operational efficiency at scale. Her expertise lies in building robust frameworks for controllership, audit, and tax compliance across high-complexity environments.
                </p>
                <p>
                  She has led financial reporting and statutory audits for billion-dollar turnover entities, ensuring institutional hygiene and SOX-aligned controls.
                </p>
              </div>
              <div className="past-badges">
                <span className="badge">Ex-DTDC</span>
                <span className="badge">Ex-MediaKind</span>
                <span className="badge">Ex-EY</span>
                <span className="badge">Ex-Deloitte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="block" style={{textAlign: 'center', padding: '10rem 0', background: 'var(--color-navy)', color: 'white', margin: '4rem -2rem 0', borderRadius: '0'}}>
        <h2 style={{fontSize: '3rem', color: 'white', marginBottom: '1.5rem'}}>Partners in Execution.</h2>
        <p style={{color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3rem'}}>
          We don't just hand over reports. We sit with the founders to build the financial bedrock of the next global standard.
        </p>
        <Link to="/contact" className="btn btn--primary">Get Started ↗</Link>
      </section>
    </div>
  )
}
