import { Link } from 'react-router-dom'
import './page.css'

const offerings = [
  {
    num: '01',
    title: 'Fundraising & Capital',
    desc: 'Bespoke investor readiness, data-room architecture, and equity structuring for global scale.',
    points: ['Investor Relations', 'Cap Table Management', 'Valuation Inputs'],
    image: '/images/hero1.png'
  },
  {
    num: '02',
    title: 'Strategic Finance',
    desc: 'Translating spreadsheets into operational intelligence. We build the unit economics models and MIS dashboards.',
    points: ['MIS & FP&A', 'Budgeting & AOP', 'Cash Management'],
    image: '/images/hero2.png'
  },
  {
    num: '03',
    title: 'Accounting & Tax',
    desc: 'The bedrock of business excellence. Clean books, strict compliance, and automated processes.',
    points: ['Monthly Closure', 'GST Advisory', 'ERP Transition'],
    image: '/images/service1.png'
  },
  {
    num: '04',
    title: 'IPO & Governance',
    desc: 'Preparing for the public stage. We implement the internal controls, risk assessments, and board-level reporting.',
    points: ['Listing Planning', 'Internal Controls', 'Board Reporting'],
    image: '/images/hero1.png'
  }
]

export default function Services() {
  return (
    <div className="page" style={{background: '#fcfdfe'}}>
      <header style={{ padding: '3rem 0 5rem', textAlign: 'center' }}>
        <p className="section-label">Tailored Solutions</p>
        <h1 className="page__title" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-0.04em'}}>The Practice.</h1>
        <p className="block__intro" style={{ margin: '0 auto', maxWidth: '600px', fontSize: '1rem' }}>
          Four integrated pillars of financial excellence, delivered through a unique layered approach.
        </p>
      </header>

      <div className="stacking-container">
        {offerings.map((pillar, i) => (
          <div key={i} className="stack-card" style={{ '--offset': `${i * 12}px` }}>
            <div className="stack-visual">
              <img src={pillar.image} alt={`${pillar.title} - Strategic Finance Service`} loading="lazy" />
            </div>
            <div className="stack-info" style={{background: i % 2 === 0 ? 'white' : 'var(--color-surface)'}}>
              <span className="stack-num">Phase {pillar.num}</span>
              <h2 className="stack-title">{pillar.title}</h2>
              <p className="stack-body" style={{marginBottom: '1rem'}}>{pillar.desc}</p>
              
              <ul className="modern-list" style={{marginBottom: '1.5rem'}}>
                {pillar.points.map(p => <li key={p} style={{fontSize: '0.85rem', marginBottom: '0.4rem'}}>{p}</li>)}
              </ul>

              <div className="stack-enquire">
                 <Link to="/contact" className="btn btn--primary" style={{
                   padding: '0.85rem 2.25rem', 
                   fontSize: '0.85rem', 
                   background: 'var(--color-navy)', 
                   color: 'white',
                   display: 'inline-flex',
                   alignItems: 'center',
                   gap: '8px',
                   boxShadow: '0 8px 16px -4px rgba(15, 43, 70, 0.25)'
                 }}>
                   Enquire Now <span>→</span>
                 </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2 style={{fontSize: '2.5rem', fontWeight: '900'}}>Ready to scale?</h2>
        <Link to="/contact" className="btn btn--primary" style={{marginTop: '2rem'}}>Connect with our team</Link>
      </div>
    </div>
  )
}
