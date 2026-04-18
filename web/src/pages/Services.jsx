import { Link } from 'react-router-dom'
import './page.css'
import { useContent } from '../ContentContext'

export default function Services() {
  const { t, h } = useContent();

  const services = [
    {
      num: '01',
      tag: 'CAPITAL',
      title: t('services_s1_title', 'Fundraising & Readiness'),
      desc: t('services_s1_desc', 'Strategic Series A/B narratives, data-room architecture, and institutional-grade capital structuring.'),
      points: ['Equity/Debt Strategy', 'Narrative Refinement', 'Due Diligence Prep'],
      img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      num: '02',
      tag: 'STRATEGY',
      title: t('services_s2_title', 'Strategic Finance & P&L'),
      desc: t('services_s2_desc', 'Fractional CFO leadership to master unit economics, P&L ownership, and EBITDA optimization.'),
      points: ['Unit Economics', 'MIS & FP&A', 'AOP & Budgeting'],
      img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      num: '03',
      tag: 'BEDROCK',
      title: t('services_s3_title', 'Accounting & Automation'),
      desc: t('services_s3_desc', 'Error-free controllership through ERP transitions and tax-efficient automated book closure.'),
      points: ['ERP Automation', 'GST/Tax Governance', 'Audit Coordination'],
      img: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      num: '04',
      tag: 'GOVERNANCE',
      title: t('services_s4_title', 'IPO & Public Readiness'),
      desc: t('services_s4_desc', 'Institutional discipline and SOX-aligned controls for successful public-market entry.'),
      points: ['Board Reporting', 'IFC & Risk Audits', 'Listing Compliance'],
      img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  return (
    <div className="page" style={{ paddingTop: '2rem' }}>
      <header style={{ paddingBottom: '3rem', textAlign: 'center' }}>
        <span className="section-label">{t('services_hero_label', 'The Practice')}</span>
        <h1 className="block__title" dangerouslySetInnerHTML={{ __html: h('services_hero_title', 'Strategic Execution. <br/>[Institutional DNA]') }}></h1>
        <p className="block__intro" style={{margin: '0 auto'}}>
          {t('services_hero_intro', 'We embed as Fractional Leadership to solve operational bottlenecks and drive boardroom-ready outcomes.')}
        </p>
      </header>

      {/* The Quadrants System */}
      <section className="quadrant-system">
        {services.map((s, i) => (
          <article key={i} className="quadrant-node">
            <div className="quad-visual">
               <img src={s.img} alt={s.title} />
               <div className="quad-overlay" />
            </div>
            <div className="quad-content">
               <span className="quad-num">{s.num}</span>
               <span className="quad-tag">{s.tag}</span>
               <h2 className="quad-title">{s.title}</h2>
               <div className="quad-details">
                  <p>{s.desc}</p>
                  <ul className="quad-list">
                    {s.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
               </div>
            </div>
          </article>
        ))}
      </section>

      {/* Unified Engagement Block */}
      <section className="block" style={{marginTop: '6rem'}}>
        <div className="engagement-banner">
           <div className="eng-text">
              <span className="section-label" style={{color: 'white'}}>Engagement Models</span>
              <h2 style={{color: 'white', fontSize: '3rem', margin: '1rem 0'}}>Fractional or Project Based.</h2>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem'}}>We adapt to your scale—whether it's a 3-month high-impact mission or continuous P&L ownership.</p>
           </div>
           <div className="eng-actions">
              <Link to="/contact" className="btn btn--primary" style={{background: 'var(--color-teal)', border: 'none'}}>Partner with us ↗</Link>
           </div>
        </div>
      </section>
    </div>
  )
}
