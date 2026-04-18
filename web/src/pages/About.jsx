import { Link } from 'react-router-dom'
import './page.css'
import { useContent } from '../ContentContext'
import AnimatedCounter from '../components/AnimatedCounter.jsx'

export default function About() {
  const { t, h } = useContent();

  return (
    <div className="about-shell">
      {/* Ultra Minimal Hero */}
      <section className="about-hero">
        <h1 className="hero-minimalist fade-up">
          Institutional DNA.<br/>Founder Speed.
        </h1>
        <p className="hero-subline-minimalist fade-up delay-1">
          Fingrity was built to solve a single paradox: ending the trade-off<br/>between rapid execution and boardroom-grade discipline.
        </p>
      </section>

      {/* Ultra Minimal Core Values */}
      <section className="values-minimalist fade-up delay-2">
         <div className="v-item"><span>01</span> Precision</div>
         <div className="v-item"><span>02</span> Partnership</div>
         <div className="v-item"><span>03</span> Integrity</div>
      </section>

      {/* The Parallel Founders Layout */}
      <section className="founders-parallel">
        <div style={{textAlign: 'center', marginBottom: '6rem'}}>
            <p className="m-role" style={{marginBottom: '1rem'}}>Leadership</p>
            <h2 className="hero-minimalist" style={{fontSize: '3.5rem'}}>Architects of Scale.</h2>
        </div>

        <div className="parallel-grid">
          
          {/* Rahul */}
          <article className="parallel-profile">
            <figure className="p-figure">
               <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rahul Kanodia" />
            </figure>
            <div className="p-content">
               <span className="m-role">Strategy & Capital</span>
               <h3 className="p-name">Rahul Kanodia</h3>
               <p className="p-text">
                 Translating complex financial roadblocks into founder-friendly growth strategies. Bridging the gap between VC expectations and operational reality.
               </p>
               <div className="p-creds">
                  <span><strong><AnimatedCounter prefix="$" end={119} suffix="M+" /></strong> Capital Strategized</span>
                  <span><strong>Ex:</strong> Amazon JV, PwC, Sugarfit</span>
               </div>
            </div>
          </article>

          {/* Rupali */}
          <article className="parallel-profile">
            <figure className="p-figure">
               <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rupali Kanodia" />
            </figure>
            <div className="p-content">
               <span className="m-role">Governance & Compliance</span>
               <h3 className="p-name">Rupali Kanodia</h3>
               <p className="p-text">
                 Instilling financial discipline at an institutional scale. Building the robust controllership frameworks that keep high-growth portfolios perpetually audit-ready.
               </p>
               <div className="p-creds">
                  <span><strong><AnimatedCounter end={15} suffix="K CR+" /></strong> Scale Managed</span>
                  <span><strong>Ex:</strong> Deloitte, EY, DTDC</span>
               </div>
            </div>
          </article>

        </div>
      </section>

      {/* Minimal CTA */}
      <section className="cta-minimalist">
        <h2>Ready to institutionalize?</h2>
        <Link to="/contact" className="btn-strike">start a conversation ↗</Link>
      </section>
    </div>
  )
}
