import { Link } from 'react-router-dom'
import './page.css'

const offerings = [
  {
    num: '01',
    title: 'Fundraising & Capital Enablement',
    desc: 'Strategic support for Series A/B fundraising and institutional-grade debt capital.',
    details: [
      'Investor readiness & IPO-ready narratives',
      'Data-room architecture & diligence support',
      'Equity-debt structuring & lender negotiations',
      'Cap-table planning & valuation inputs',
      'VC & Institutional engagement'
    ],
    image: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    num: '02',
    title: 'Strategic Finance & Operational Support',
    desc: 'Translating operations into financial truth through rigorous analysis and P&L ownership.',
    details: [
      'Unit economics & EBITDA optimization',
      'MIS, FP&A & KPI dashboards',
      'Budgeting, AOP & long-range plans',
      'Working capital & cashflow governance',
      'Cost optimization & ROI discipline'
    ],
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    num: '03',
    title: 'Accounting, Tax & Compliance',
    desc: 'Building the bedrock of financial integrity with automated workflows and clean records.',
    details: [
      'Monthly book closure & accounting hygiene',
      'GST advisory, audits & representations',
      'ERP transition, process design & automation',
      'Statutory audit coordination & closure',
      'IND AS / IFRS / SOX-aligned controls'
    ],
    image: 'https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    num: '04',
    title: 'IPO Readiness & Governance',
    desc: 'Instilling corporate-grade frameworks to prepare your firm for public markets.',
    details: [
      'IPO planning, timelines & listing guidance',
      'Governance, policy & compliance frameworks',
      'Internal financial controls (IFC) testing',
      'Risk assessment & board-level reporting',
      'Audit readiness & disclosure discipline'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

export default function Services() {
  return (
    <div className="page">
      <section className="about-hero" style={{paddingTop: '3.5rem', paddingBottom: '2rem'}}>
        <p className="section-label" style={{color: 'var(--color-teal)'}}>The Practice</p>
        <h1 className="page__title">Specialized Finance. <span style={{color: 'var(--color-teal)'}}>Institutional DNA.</span></h1>
        <p className="block__intro" style={{maxWidth: '800px'}}>
          We don't just provide reports. We embed as your <strong>Fractional Leadership</strong> to fix roadblocks, build systems, and drive capital outcomes.
        </p>
        <div className="services-top-badges">
          <span>Fundraise Ready Systems</span>
          <span>Execution-Led Advisory</span>
          <span>Boardroom Grade Governance</span>
        </div>
      </section>

      <div className="services-container">
        {offerings.map((service, i) => (
          <article key={i} className="service-node">
            <div className="service-node__visual">
               <img src={service.image} alt={service.title} loading="lazy" />
               <div className="service-node__num">{service.num}</div>
            </div>
            <div className="service-node__content">
               <h2 className="service-node__title">{service.title}</h2>
               <p className="service-node__desc">{service.desc}</p>
               <ul className="service-node__list">
                 {service.details.map((point, idx) => (
                   <li key={idx}>
                     <span className="check">✓</span> {point}
                   </li>
                 ))}
               </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="block engagement-section">
        <div className="grid-2">
           <div>
              <p className="section-label" style={{color: 'var(--color-teal)'}}>Engagement Models</p>
              <h2 className="block__title" style={{color: 'white'}}>Flexible Execution.</h2>
           </div>
           <div>
              <div className="engagement-card">
                 <strong>Project Based</strong>
                 <span>Focused execution for fundraising, ERP transition, or IPO prep.</span>
              </div>
              <div className="engagement-card">
                 <strong>Retainer / Fractional</strong>
                 <span>Continuity through Fractional CFO/COO leadership for growing teams.</span>
              </div>
           </div>
        </div>
      </section>
      
      <section style={{textAlign: 'center', padding: '10rem 0'}}>
        <h3 style={{fontSize: '2rem', marginBottom: '2rem'}}>Ready to institutionalize your finance?</h3>
        <Link to="/contact" className="btn btn--primary">Start a Consultation ↗</Link>
      </section>
    </div>
  )
}
