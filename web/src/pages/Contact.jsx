import { useState } from 'react'
import './page.css'
import { useContent } from '../ContentContext'

export default function Contact() {
  const { t } = useContent();
  const [submitted, setSubmitted] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const WEB3_KEY = '1f7bccdc-3bac-4619-b195-91b35030417e';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    setSubmitted(true); // Show success UI early for better UX

    try {
      // 1. Send to Web3Forms for Email
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3_KEY,
          from_name: "Fingrity Website",
          subject: `New Lead: ${data.name} | ${data.interest}`,
          ...data
        })
      });

      // 2. Send to Backend for Storage
      fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
    } catch (err) {
      console.error("Submission error", err);
    }
  };

  if (submitted) {
    return (
      <div className="page page--narrow page--success">
        <div className="success-icon" style={{fontSize: '4rem', marginBottom: '1.5rem'}}>📩</div>
        <p className="section-label">Message Received</p>
        <h1 className="page__title">Strategizing Your Response.</h1>
        <p className="block__intro" style={{margin: '0 auto 2rem', fontSize: '1rem'}}>
          Your inquiry has been received. We review all strategic requests within 24 hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn--ghost">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="contact-shell">
      <div className="contact-visual">
         <div className="contact-visual__content">
            <span className="section-label" style={{color: 'var(--color-teal)'}}>{t('contact_hero_label', 'The Hub')}</span>
            <h1 className="contact-visual__title">{t('contact_hero_title', 'Let’s fix the missing link.')}</h1>
            <p className="contact-visual__sub">
              {t('contact_hero_sub', 'Whether you\'re prepping for Series A or cleaning messy books for an IPO, we respond within 24 hours from Bengaluru.')}
            </p>

            <div className="contact-details">
               <div className="contact-detail-item">
                  <span className="contact-detail-label">{t('contact_detail_conf_label', 'Confidential Support')}</span>
                  <a href={`mailto:${t('contact_detail_conf_value', 'rk@fingrityadvisors.com')}`} className="contact-detail-value">{t('contact_detail_conf_value', 'rk@fingrityadvisors.com')}</a>
               </div>
               <div className="contact-detail-item">
                  <span className="contact-detail-label">{t('contact_detail_loc_label', 'Location')}</span>
                  <span className="contact-detail-value">{t('contact_detail_loc_value', 'Bengaluru, India 🇮🇳')}</span>
               </div>
            </div>

            <div className="contact-meta">
               <p>{t('contact_meta_text', '“Integrity in Finance. Globally.”')}</p>
            </div>
         </div>
      </div>

      <div className="contact-form-container">
        <form className="premium-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input id="email" name="email" type="email" required placeholder="john@company.com" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="interest">Area of Interest</label>
            <select id="interest" name="interest" required>
              <option value="">Select a practice</option>
              <option value="Fundraising">Fundraising & investor readiness</option>
              <option value="Strategic Finance">Strategic Finance & MIS</option>
              <option value="Accounting/Tax">Accounting, Tax & ERP</option>
              <option value="IPO/Governance">IPO Readiness & Governance</option>
              <option value="Other">Other Strategic Advisory</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell us about your context and stage..." />
          </div>

          <div className="form-safety">
             <span className="lock-icon">🔒</span>
             <p>{t('contact_safety_text', 'All inquiries are strictly confidential.')}</p>
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Start a Conversation <span>→</span>
          </button>
        </form>
      </div>
    </div>
  )
}
