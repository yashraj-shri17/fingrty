import { Link } from 'react-router-dom'
import './page.css'
import { useContent } from '../ContentContext'

export default function Services() {
  const { t, h } = useContent();

  const offerings = [
    {
      num: '01',
      title: t('services_offering1_title', 'Fundraising & Capital Enablement'),
      desc: t('services_offering1_desc', 'Strategic support for Series A/B fundraising and institutional-grade debt capital.'),
      details: t('services_offering1_list', 'Investor readiness & IPO-ready narratives, Data-room architecture & diligence support, Equity-debt structuring & lender negotiations, Cap-table planning & valuation inputs, VC & Institutional engagement').split(',').map(s => s.trim()),
      image: t('services_offering1_img', 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=800')
    },
    {
      num: '02',
      title: t('services_offering2_title', 'Strategic Finance & Operational Support'),
      desc: t('services_offering2_desc', 'Translating operations into financial truth through rigorous analysis and P&L ownership.'),
      details: t('services_offering2_list', 'Unit economics & EBITDA optimization, MIS, FP&A & KPI dashboards, Budgeting, AOP & long-range plans, Working capital & cashflow governance, Cost optimization & ROI discipline').split(',').map(s => s.trim()),
      image: t('services_offering2_img', 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800')
    },
    {
      num: '03',
      title: t('services_offering3_title', 'Accounting, Tax & Compliance'),
      desc: t('services_offering3_desc', 'Building the bedrock of financial integrity with automated workflows and clean records.'),
      details: t('services_offering3_list', 'Monthly book closure & accounting hygiene, GST advisory, audits & representations, ERP transition, process design & automation, Statutory audit coordination & closure, IND AS / IFRS / SOX-aligned controls').split(',').map(s => s.trim()),
      image: t('services_offering3_img', 'https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=800')
    },
    {
      num: '04',
      title: t('services_offering4_title', 'IPO Readiness & Governance'),
      desc: t('services_offering4_desc', 'Instilling corporate-grade frameworks to prepare your firm for public markets.'),
      details: t('services_offering4_list', 'IPO planning, timelines & listing guidance, Governance, policy & compliance frameworks, Internal financial controls (IFC) testing, Risk assessment & board-level reporting, Audit readiness & disclosure discipline').split(',').map(s => s.trim()),
      image: t('services_offering4_img', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800')
    }
  ]

  const heroBadges = t('services_hero_badges', 'Fundraise Ready Systems, Execution-Led Advisory, Boardroom Grade Governance').split(',').map(s => s.trim());

  return (
    <div className="page">
      <section className="about-hero" style={{paddingTop: '3.5rem', paddingBottom: '2rem'}}>
        <p className="section-label" style={{color: 'var(--color-teal)'}}>{t('services_hero_label', 'The Practice')}</p>
        <h1 className="page__title" dangerouslySetInnerHTML={{ __html: h('services_hero_title', 'Specialized Finance. [Institutional DNA.]') }}></h1>
        <p className="block__intro" style={{maxWidth: '800px'}}>
          {t('services_hero_intro', 'We don\'t just provide reports. We embed as your Fractional Leadership to fix roadblocks, build systems, and drive capital outcomes.')}
        </p>
        <div className="services-top-badges">
          {heroBadges.map((b, i) => <span key={i}>{b}</span>)}
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
              <p className="section-label" style={{color: 'var(--color-teal)'}}>{t('services_eng_label', 'Engagement Models')}</p>
              <h2 className="block__title" style={{color: 'white'}}>{t('services_eng_title', 'Flexible Execution.')}</h2>
           </div>
           <div>
              <div className="engagement-card">
                 <strong>{t('services_eng1_title', 'Project Based')}</strong>
                 <span>{t('services_eng1_desc', 'Focused execution for fundraising, ERP transition, or IPO prep.')}</span>
              </div>
              <div className="engagement-card">
                 <strong>{t('services_eng2_title', 'Retainer / Fractional')}</strong>
                 <span>{t('services_eng2_desc', 'Continuity through Fractional CFO/COO leadership for growing teams.')}</span>
              </div>
           </div>
        </div>
      </section>
      
      <section style={{textAlign: 'center', padding: '10rem 0'}}>
        <h3 style={{fontSize: '2rem', marginBottom: '2rem'}}>{t('services_cta_text', 'Ready to institutionalize your finance?')}</h3>
        <Link to="/contact" className="btn btn--primary">Start a Consultation ↗</Link>
      </section>
    </div>
  )
}
