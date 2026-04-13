import { useState } from 'react'
import './page.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="page" style={{maxWidth: '800px', textAlign: 'center', padding: '10rem 0'}}>
        <div className="success-icon" style={{fontSize: '4rem', marginBottom: '1.5rem'}}>📬</div>
        <p className="section-label">Message Ready</p>
        <h1 className="page__title">Ready to bridge the gap.</h1>
        <p className="block__intro" style={{margin: '0 auto 2rem', fontSize: '1rem'}}>
          Your inquiry has been drafted. Please hit "Send" in your email app to finalize the conversation.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn--ghost">
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <div className="contact-shell">
      <div className="contact-visual">
         <div className="contact-visual__content">
            <span className="section-label" style={{color: 'var(--color-teal)'}}>The Hub</span>
            <h1 className="contact-visual__title">Let’s fix the missing link.</h1>
            <p className="contact-visual__sub">
              Whether you're prepping for Series A or cleaning messy books for an IPO, we respond within 24 hours from Bengaluru.
            </p>

            <div className="contact-details">
               <div className="contact-detail-item">
                  <span className="contact-detail-label">Direct Line</span>
                  <a href="tel:+919748043992" className="contact-detail-value">+91 97480 43992</a>
               </div>
               <div className="contact-detail-item">
                  <span className="contact-detail-label">Confidential Support</span>
                  <a href="mailto:rk@fingrityadvisors.com" className="contact-detail-value">rk@fingrityadvisors.com</a>
               </div>
               <div className="contact-detail-item">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">Bengaluru, India 🇮🇳</span>
               </div>
            </div>

            <div className="contact-meta">
               <p>“Integrity in Finance. Globally.”</p>
            </div>
         </div>
      </div>

      <div className="contact-form-container">
        <form
          className="premium-form"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const data = new FormData(form)
            const subject = encodeURIComponent(`Fingrity Inquiry: ${data.get('name')} | ${data.get('interest')}`)
            const body = encodeURIComponent(
              `Context: ${data.get('interest')}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage: ${data.get('message')}`,
            )
            window.location.href = `mailto:rk@fingrityadvisors.com?subject=${subject}&body=${body}`
            setSubmitted(true)
          }}
        >
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
             <p>All inquiries are strictly confidential.</p>
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Start a Conversation <span>→</span>
          </button>
        </form>
      </div>
    </div>
  )
}
