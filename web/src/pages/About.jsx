import { Link } from 'react-router-dom'
import './page.css'
import { useContent } from '../ContentContext'

export default function About() {
  const { t, h } = useContent();

  const rahulBadges = t('about_founder1_badges', 'Ex-Sugarfit, Ex-Fasal, Ex-Amazon JV, Ex-PwC').split(',').map(s => s.trim());
  const rupaliBadges = t('about_founder2_badges', 'Ex-DTDC, Ex-MediaKind, Ex-EY, Ex-Deloitte').split(',').map(s => s.trim());

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="section-label" style={{color: 'var(--color-teal)'}}>{t('about_hero_label', 'Leadership DNA')}</p>
          <h1 className="page__title" style={{maxWidth: '900px'}} dangerouslySetInnerHTML={{ __html: h('about_hero_title', 'We translate financial roadblocks into [Growth Strategies.]') }}>
          </h1>
          <p className="block__intro" style={{fontSize: '1.25rem', maxWidth: '800px'}}>
            {t('about_hero_intro', 'Fingrity Advisors was founded on a simple premise: Founders shouldn\'t have to choose between startup speed and institutional-grade financial discipline.')}
          </p>
          <div className="about-hero__quote">
            <span>{t('about_hero_quote_eye', 'Founder-first. Institution-ready.')}</span>
            <p>{t('about_hero_quote_sub', 'Every engagement is engineered for confidence in boardrooms, diligence rooms, and day-to-day execution.')}</p>
          </div>
        </div>
      </section>

      {/* The Pillars / Philosophies */}
      <section className="block" style={{marginTop: '-2rem'}}>
        <div className="grid-3">
          <div className="value-card">
            <span className="value-icon">🎯</span>
            <h3>{t('about_value1_title', 'Precision')}</h3>
            <p>{t('about_value1_desc', 'Amazon-grade MIS and error-free statutory hygiene. Built for scale, built for trust.')}</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>{t('about_value2_title', 'Partnership')}</h3>
            <p>{t('about_value2_desc', 'We don\'t just advise; we embed as Fractional CFOs/COOs to fix execution gaps.')}</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🛡️</span>
            <h3>{t('about_value3_title', 'Integrity')}</h3>
            <p>{t('about_value3_desc', 'Transparency and ethical conduct are at the core of everything we build for you.')}</p>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="block">
        <div style={{marginBottom: '4rem'}}>
          <p className="section-label">{t('about_founders_label', 'The Founders')}</p>
          <h2 className="block__title">A Multi-Disciplinary Edge.</h2>
        </div>

        <div className="profile-container">
          {/* Rahul's Profile */}
          <div className="profile-grid">
            <div className="profile-info">
              <span className="profile-lens">{t('about_founder1_lens', 'The Founder Lens | Strategy & Fundraising')}</span>
              <h2 className="profile-name">{t('about_founder1_name', 'Rahul Kanodia, CA, CS')}</h2>
              <div className="profile-bio">
                <p>{t('about_founder1_bio1', 'Rahul translates complex financial roadblocks into founder-friendly growth strategies. With a track record of driving $119M+ in capital raised, he bridges the gap between VC expectations and operational reality.')}</p>
                <p>{t('about_founder1_bio2', 'He specializes in investor relations, strategic FP&A, and building the "Scale-up DNA" within finance teams.')}</p>
              </div>
              <div className="past-badges">
                {rahulBadges.map((b, i) => <span key={i} className="badge">{b}</span>)}
              </div>
              <a href="https://www.linkedin.com/in/rahulkanodiark" target="_blank" rel="noreferrer" className="btn btn--ghost" style={{marginTop: '2rem'}}>LinkedIn ↗</a>
            </div>
            <div className="profile-image-container">
               <img src={t('about_founder1_img', 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800')} alt="Rahul Kanodia" className="profile-img-placeholder" />
            </div>
          </div>

          <div className="profile-divider" style={{height: '1px', background: 'var(--color-border)', margin: '6rem 0'}} />

          {/* Rupali's Profile */}
          <div className="profile-grid profile-grid--reversed">
             <div className="profile-image-container">
               <img src={t('about_founder2_img', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800')} alt="Rupali Kanodia" className="profile-img-placeholder" />
            </div>
            <div className="profile-info">
              <span className="profile-lens">{t('about_founder2_lens', 'The Institutional Lens | Finance & Compliance')}</span>
              <h2 className="profile-name">{t('about_founder2_name', 'Rupali Kanodia, CA')}</h2>
              <div className="profile-bio">
                <p>{t('about_founder2_bio1', 'Rupali instills financial discipline and operational efficiency at scale. Her expertise lies in building robust frameworks for controllership, audit, and tax compliance across high-complexity environments.')}</p>
                <p>{t('about_founder2_bio2', 'She has led financial reporting and statutory audits for billion-dollar turnover entities, ensuring institutional hygiene and SOX-aligned controls.')}</p>
              </div>
              <div className="past-badges">
                {rupaliBadges.map((b, i) => <span key={i} className="badge">{b}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="block" style={{textAlign: 'center', padding: '10rem 0', background: 'var(--color-navy)', color: 'white', margin: '4rem -2rem 0', borderRadius: '0'}}>
        <h2 style={{fontSize: '3rem', color: 'white', marginBottom: '1.5rem'}}>{t('about_cta_title', 'Partners in Execution.')}</h2>
        <p style={{color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3rem'}}>
          {t('about_cta_text', 'We don\'t just hand over reports. We sit with the founders to build the financial bedrock of the next global standard.')}
        </p>
        <Link to="/contact" className="btn btn--primary">Get Started ↗</Link>
      </section>
    </div>
  )
}
