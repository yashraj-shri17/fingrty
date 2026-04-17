import { Link } from 'react-router-dom'
import './page.css'
import { useContent } from '../ContentContext'

export default function Home() {
  const { t, h } = useContent();

  const heroHighlights = [
    { value: t('home_stat1_value', '$119M+'), label: t('home_stat1_label', 'Capital Enabled') },
    { value: t('home_stat2_value', 'Billion $'), label: t('home_stat2_label', 'Turnover Managed') },
    { value: t('home_stat3_value', '25+ Yrs'), label: t('home_stat3_label', 'Leadership DNA') }
  ]

  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow fade-in">{t('home_hero_eyebrow', 'Fingrity Advisors LLP')}</span>
            <h1 className="hero__title fade-in delay-1" dangerouslySetInnerHTML={{ __html: h('home_hero_title', 'Strategizing [$119M+] in capital for scale-ups.') }}>
            </h1>
            <p className="hero__sub fade-in delay-2">
              {t('home_hero_sub', 'The missing link between Operational Chaos and Financial Discipline. We don\'t just consult; we fix.')}
            </p>
            <div className="hero__actions fade-in delay-3">
              <Link to="/contact" className="btn btn--primary">
                {t('home_hero_cta_primary', 'Fix the missing link')}
              </Link>
              <Link to="/services" className="btn btn--ghost" style={{marginLeft: '1.5rem', fontWeight: 700}}>
                {t('home_hero_cta_secondary', 'The Practice ↗')}
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
                <img src={t('home_hero_img1', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800')} alt="Strategic financial planning and analysis" loading="lazy" />
              </div>
              <div className="image-panel__item">
                <img src={t('home_hero_img2', 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800')} alt="Collaborative corporate strategy meeting" loading="lazy" />
              </div>
              <div className="image-panel__item">
                <img src={t('home_hero_img3', 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800')} alt="Corporate governance and compliance structure" loading="lazy" />
              </div>
              <div className="image-panel__item" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-navy)', color: 'white', flexDirection: 'column'}}>
                <span className="image-panel__stat-text">{t('home_stat1_value', '$119M+')}</span>
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
              <p className="section-label" style={{color: 'var(--color-teal)'}}>{t('home_proof_label', 'The Proof')}</p>
              <h2 className="block__title" style={{color: 'white'}}>{t('home_proof_title', 'Unwavering Results.')}</h2>
              <p className="block__intro" style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem'}}>
                {t('home_proof_intro', 'Bridging the gap between founder speed and institutional discipline. We deliver boardroom-ready execution, not just advice.')}
              </p>
              <div className="stat-grid-inline" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem', marginTop: '3.5rem'}}>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block', fontWeight: 800}}>{t('home_stat3_value', '25+ Yrs')}</span>
                  <span className="stat-label" style={{color: 'white', opacity: 0.6, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Leadership</span>
                </div>
                <div>
                  <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', display: 'block', fontWeight: 800}}>{t('home_stat1_value', '$119M+')}</span>
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
                   {t('home_proof_list1', 'Institutional Scale: Managed billion-dollar P&Ls and global turnovers.')}
                 </li>
                 <li style={{color: 'white', marginBottom: '1rem'}}>
                   {t('home_proof_list2', 'Modern Systems: End-to-end ERP Transition & Process Automation.')}
                 </li>
                 <li style={{color: 'white'}}>
                    {t('home_proof_list3', 'Governance: Institutional SOX & IFRS aligned controllership.')}
                 </li>
               </ul>
            </div>
          </div>
        </section>

        <section className="block">
           <div className="paradox-head">
              <p className="section-label">{t('home_paradox_label', 'The Strategy')}</p>
              <h2 className="block__title paradox-title">{t('home_paradox_title', 'The Growth Paradox')}</h2>
              <p className="block__intro paradox-intro">
                 {t('home_paradox_intro', 'Growth looks exciting outside, but inside the finance engine usually starts breaking quietly. We close the gap between founder speed and institutional discipline before it hurts valuation.')}
              </p>
           </div>

           <div className="paradox-grid">
              <article className="paradox-card">
                <span className="paradox-card__tag">{t('home_paradox_card1_tag', '01 | Data Room Friction')}</span>
                <h3>{t('home_paradox_card1_title', 'Fundraising momentum slows down.')}</h3>
                <p>{t('home_paradox_card1_text', 'Numbers live in scattered sheets, monthly closure slips, and investor queries take too long to answer.')}</p>
              </article>
              <article className="paradox-card">
                <span className="paradox-card__tag">{t('home_paradox_card2_tag', '02 | Cashflow Blindspots')}</span>
                <h3>{t('home_paradox_card2_title', 'Runway gets risky without warning.')}</h3>
                <p>{t('home_paradox_card2_text', 'Collections, payables, and burn are managed reactively, creating avoidable pressure during critical growth stages.')}</p>
              </article>
              <article className="paradox-card">
                <span className="paradox-card__tag">{t('home_paradox_card3_tag', '03 | Compliance Overhang')}</span>
                <h3>{t('home_paradox_card3_title', 'Execution speed drops near audits.')}</h3>
                <p>{t('home_paradox_card3_text', 'Teams scramble at period-end when controls are weak, reducing leadership bandwidth for core business priorities.')}</p>
              </article>
           </div>

           <div className="paradox-solution">
              <p className="paradox-solution__label">{t('home_solution_label', 'How We Fix It')}</p>
              <p>
                {t('home_solution_text', 'We install clean closure rhythms, board-ready MIS, and governance discipline so your finance function becomes a growth lever, not a growth blocker.')}
              </p>
           </div>
        </section>

        {/* The Operating Rhythm */}
        <section className="block">
          <p className="section-label" style={{textAlign: 'center'}}>{t('home_rhythm_label', 'Engagement Model')}</p>
          <h2 className="block__title" style={{textAlign: 'center', marginBottom: '4rem'}}>{t('home_rhythm_title', 'The Operating Rhythm')}</h2>
          
          <div className="rhythm-grid">
            <div className="rhythm-card">
               <div className="rhythm-step">01</div>
               <h3>{t('home_rhythm1_title', 'Discovery')}</h3>
               <p>{t('home_rhythm1_text', 'Deep audit of existing books, data rooms, and compliance hygiene. We identify the "Leakages" first.')}</p>
            </div>
            <div className="rhythm-card">
               <div className="rhythm-step">02</div>
               <h3>{t('home_rhythm2_title', 'Deep Dive')}</h3>
               <p>{t('home_rhythm2_text', 'Designing workflows, MIS architecture, and ERP-transition plans. Setting up the bedrock for scale.')}</p>
            </div>
            <div className="rhythm-card">
               <div className="rhythm-step">03</div>
               <h3>{t('home_rhythm3_title', 'Execution')}</h3>
               <p>{t('home_rhythm3_text', 'We embed as your Fractional Leadership. P&L ownership, fundraising support, and statutory management.')}</p>
            </div>
            <div className="rhythm-card">
               <div className="rhythm-step">04</div>
               <h3>{t('home_rhythm4_title', 'Governance')}</h3>
               <p>{t('home_rhythm4_text', 'Long-term board reporting, risk assessment, and maintaining institutional-grade audit readiness.')}</p>
            </div>
          </div>
        </section>

        {/* Sectoral Mastery */}
        <section className="block sectoral-section">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <p className="section-label">{t('home_sector_label', 'Sectoral Mastery')}</p>
            <h2 className="block__title">{t('home_sector_title', 'Deep Industry Comprehension.')}</h2>
            <p className="block__intro" style={{margin: '0 auto'}}>
              {t('home_sector_intro', 'We understand how money moves in your specific sector. Finance isn\'t one-size-fits-all.')}
            </p>
          </div>
          
          <div className="sector-grid-premium">
             <div className="sector-pill-premium">
                <strong>{t('home_sector1_title', 'Healthcare & MedTech')}</strong>
                <span>{t('home_sector1_text', 'Managing high-capex cycles & inventory controls.')}</span>
             </div>
             <div className="sector-pill-premium">
                <strong>{t('home_sector2_title', 'Consumer & D2C')}</strong>
                <span>{t('home_sector2_text', 'Mastering unit economics & marketing ROI.')}</span>
             </div>
             <div className="sector-pill-premium">
                <strong>{t('home_sector3_title', 'Agri-Tech')}</strong>
                <span>{t('home_sector3_text', 'Supply chain resilience & working capital governance.')}</span>
             </div>
             <div className="sector-pill-premium">
                <strong>{t('home_sector4_title', 'FinTech & SaaS')}</strong>
                <span>{t('home_sector4_text', 'Focus on MRR churn, burn-rates & regulatory compliance.')}</span>
             </div>
          </div>
        </section>

        <section className="block">
          <p className="section-label" style={{textAlign: 'center'}}>{t('home_expertise_label', 'Expertise')}</p>
          <h2 className="block__title" style={{textAlign: 'center', marginBottom: '1rem'}}>{t('home_expertise_title', 'A Dynamic Suite.')}</h2>
          
          <div className="marquee-wrapper">
             <div className="marquee-content">
               {[...Array(2)].map((_, loopIdx) => (
                 <span key={loopIdx} style={{ display: 'flex', gap: '2rem' }}>
                   {[
                     { title: t('home_expertise1_title', 'Fundraising'), num: '01', desc: t('home_expertise1_desc', 'Series A/B readiness & equity-debt structuring.'), icon: '💰' },
                     { title: t('home_expertise2_title', 'Strategic Finance'), num: '02', desc: t('home_expertise2_desc', 'Unit economics, MIS & P&L ownership.'), icon: '📊' },
                     { title: t('home_expertise3_title', 'Tax & Compliance'), num: '03', desc: t('home_expertise3_desc', 'Monthly closure & statutory hygiene.'), icon: '🛡️' },
                     { title: t('home_expertise4_title', 'IPO Readiness'), num: '04', desc: t('home_expertise4_desc', 'Governance & board-level reporting.'), icon: '📈' },
                     { title: t('home_expertise5_title', 'Risk Advisory'), num: '05', desc: t('home_expertise5_desc', 'Internal controls & audit management.'), icon: '⚖️' }
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
              <p className="section-label">{t('home_why_label', 'Why Us')}</p>
              <h2 className="block__title">{t('home_why_title', 'Institutional-grade execution')}</h2>
              <p className="block__intro" style={{fontSize: '1.1rem'}}>
                {t('home_why_intro', 'We don\'t just "advise" — we embed as fractional leaders to fix messy data rooms, stop cash-flow leaks, and build audit-ready books.')}
              </p>
              <ul className="modern-list">
                <li>{t('home_why_list1', 'Deep experience at Amazon, EY, Deloitte, & PwC.')}</li>
                <li>{t('home_why_list2', 'Strategic partnership across medtech, fintech, and Agri-tech.')}</li>
                <li>{t('home_why_list3', 'Proven track record of managing complicated due diligence.')}</li>
              </ul>
            </div>
            <div className="visual-block">
              <img src={t('home_whyus_img', 'https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=800')} alt="Clean and organized financial reporting" className="feature-img" loading="lazy" />
              <div className="floating-card">
                <p style={{fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem'}}>{t('home_why_floating_title', 'Bengaluru Hub')}</p>
                <p style={{fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0}}>{t('home_why_floating_text', 'Serving global scale-ups from the heart of India’s startup capital.')}</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
