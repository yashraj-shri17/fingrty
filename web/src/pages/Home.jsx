import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './page.css'
import { useContent } from '../ContentContext'
import AnimatedCounter from '../components/AnimatedCounter.jsx'

export default function Home() {
  const { t, h } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      eyebrow: t('home_hero_eyebrow', 'Fingrity Advisors LLP'),
      title: h('home_hero_title1', 'Strategizing $119M+ <br/> For Founders.'),
      sub: t('home_hero_sub1', 'The missing link between Operational Chaos and Financial Discipline.'),
      img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      eyebrow: t('home_hero_eyebrow2', 'Institutional DNA'),
      title: h('home_hero_title2', 'Boardroom Ready <br/> Execution.'),
      sub: t('home_hero_sub2', 'Amazon-grade MIS and error-free statutory hygiene for companies scaling fast.'),
      img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      eyebrow: t('home_hero_eyebrow3', 'Strategic Finance'),
      title: h('home_hero_title3', 'Master Your <br/> Capital Flow.'),
      sub: t('home_hero_sub3', 'Series A/B readiness, debt-equity structuring, and fractional CFO leadership.'),
      img: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="hero-full">
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="carousel-frame">
              <img src={slide.img} alt="Hero Background" className="carousel-frame__img" />
              <div className="carousel-frame__overlay" />
              <div className="carousel-frame__content">
                <div className="hero-content-centered">
                  <span className="hero__eyebrow-light fade-in">{slide.eyebrow}</span>
                  <h1 className="hero__title-light fade-in delay-1" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                  <p className="hero__sub-light fade-in delay-2">{slide.sub}</p>
                  <div className="hero__actions-centered fade-in delay-3">
                    <Link to="/contact" className="btn btn--primary">
                      {t('home_hero_cta_primary', 'Get Started')}
                    </Link>
                    <Link to="/services" className="btn btn--ghost-light">
                      {t('home_hero_cta_secondary', 'The Practice ↗')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-controls-full">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`carousel-dot-light ${i === currentSlide ? 'is-active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      <section className="dna-strip-modern">
        <div className="dna-container">
          <p className="dna-label">Institutional DNA from</p>
          <div className="dna-grid">
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="dna-logo" style={{height: '22px'}} />
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="dna-logo" style={{height: '32px'}} />
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" alt="PwC" className="dna-logo" style={{height: '32px'}} />
             <span className="dna-text-logo deloitte">Deloitte<span>.</span></span>
             <span className="dna-text-logo dtdc">DTDC</span>
             <span className="dna-text-logo fasal">Fasal.</span>
             <span className="dna-text-logo sugarfit">SUGARFIT</span>
          </div>
        </div>
      </section>

      <div className="page">
        <section className="block">
           <div className="grid-2">
              <div>
                <p className="section-label">{t('home_proof_label', 'The Proof')}</p>
                <h2 className="block__title">{t('home_proof_title', 'Unwavering Results.')}</h2>
                <p className="block__intro">
                  {t('home_proof_intro', 'Bridging the gap between founder speed and institutional discipline. We deliver boardroom-ready execution, not just advice.')}
                </p>
                <ul className="modern-list">
                  <li>{t('home_proof_list1', 'Institutional Scale: Managed billion-dollar P&Ls.')}</li>
                  <li>{t('home_proof_list2', 'Modern Systems: ERP Transition & Automation.')}</li>
                  <li>{t('home_proof_list3', 'Governance: SOX & IFRS aligned controllership.')}</li>
                </ul>
              </div>
              <div className="stat-grid-inline">
                <div className="stat-pill-light">
                   <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', fontWeight: 800}}>
                      <AnimatedCounter end={25} suffix="+" />
                   </span>
                   <span className="stat-label">Years Leadership</span>
                </div>
                <div className="stat-pill-light">
                   <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', fontWeight: 800}}>
                      <AnimatedCounter prefix="$" end={119} suffix="M+" />
                   </span>
                   <span className="stat-label">Momentum</span>
                </div>
                <div className="stat-pill-light">
                   <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', fontWeight: 800}}>
                      <AnimatedCounter end={15} suffix="k CR+" />
                   </span>
                   <span className="stat-label">Scale Managed</span>
                </div>
                <div className="stat-pill-light">
                   <span className="stat-value" style={{color: 'var(--color-teal)', fontSize: '2.5rem', fontWeight: 800}}>
                      <AnimatedCounter end={5} suffix="+" />
                   </span>
                   <span className="stat-label">Nations Reach</span>
                </div>
              </div>
           </div>
        </section>

        <section className="block">
           <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
              <p className="section-label">{t('home_paradox_label', 'The Strategy')}</p>
              <h2 className="block__title">{t('home_paradox_title', 'The Growth Paradox')}</h2>
           </div>


           <div className="paradox-grid">
              <article className="paradox-card">
                <span className="paradox-card__tag">01 | Data Room</span>
                <h3>{t('home_paradox_card1_title', 'Fundraising momentum slows.')}</h3>
                <p>{t('home_paradox_card1_text', 'Numbers live in scattered sheets, and investor queries take too long to answer.')}</p>
              </article>
              <article className="paradox-card">
                <span className="paradox-card__tag">02 | Cashflow</span>
                <h3>{t('home_paradox_card2_title', 'Runway gets risky without warning.')}</h3>
                <p>{t('home_paradox_card2_text', 'Collections and burn managed reactively creating avoidable pressure.')}</p>
              </article>
              <article className="paradox-card">
                <span className="paradox-card__tag">03 | Compliance</span>
                <h3>{t('home_paradox_card3_title', 'Execution speed drops.')}</h3>
                <p>{t('home_paradox_card3_text', 'Teams scramble at period-end when controls are weak, reducing bandwidth.')}</p>
              </article>
           </div>
        </section>

        <section className="block" style={{backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)', padding: '6rem 4rem'}}>
           <div className="grid-2">
              <div>
                 <p className="section-label">{t('home_rhythm_label', 'Engagement')}</p>
                 <h2 className="block__title">{t('home_rhythm_title', 'Operating Rhythm')}</h2>
                 <p className="block__intro">We embed as your Fractional Leadership to fix leakages and set up bedrock for scale.</p>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                 <div className="rhythm-item-light">
                    <strong>01 Discovery</strong>
                    <p>Deep audit of books & compliance hygiene.</p>
                 </div>
                 <div className="rhythm-item-light">
                    <strong>02 Execution</strong>
                    <p>Fractional P&L ownership & stat management.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </>
  )
}
