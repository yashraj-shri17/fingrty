import { useState } from 'react'
import './page.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="page" style={{maxWidth: '800px', textAlign: 'center', padding: '10rem 0'}}>
        <p className="section-label">Success</p>
        <h1 className="page__title">Message Ready</h1>
        <p className="block__intro" style={{margin: '0 auto 2rem'}}>
          Your default email client should have opened with the message drafted. Please remember to click "Send" in your email app.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn--ghost">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="page" style={{maxWidth: '800px'}}>
      <header style={{ padding: '2rem 0 3rem', textAlign: 'center' }}>
        <p className="section-label">Connect</p>
        <h1 className="page__title">Let’s start a conversation</h1>
        <p className="block__intro" style={{margin: '0 auto'}}>
          Share a note about your stage and sector. Whether it's fundraising, MIS, or governance, we respond from Bengaluru.
        </p>
      </header>

      <div className="grid-2" style={{alignItems: 'start', gap: '3rem'}}>
        <div>
          <article className="action-card" style={{padding: '2rem'}}>
             <h3 style={{fontSize: '1.2rem'}}>Direct Contact</h3>
             <p style={{marginBottom: '1rem'}}>
               <a href="mailto:rk@fingrityadvisors.com" style={{color: 'var(--color-teal)', fontWeight: '600'}}>rk@fingrityadvisors.com</a>
             </p>
             <p style={{marginBottom: '1rem'}}>
               <a href="tel:+919748043992" style={{color: 'var(--color-navy)', fontWeight: '600'}}>+91 97480 43992</a>
             </p>
             <p style={{fontSize: '0.9rem', color: 'var(--color-text-muted)'}}>
               Bengaluru, India
             </p>
          </article>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const data = new FormData(form)
            const subject = encodeURIComponent(`Website inquiry: ${data.get('name')}`)
            const body = encodeURIComponent(
              `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
            )
            window.location.href = `mailto:rk@fingrityadvisors.com?subject=${subject}&body=${body}`
            setSubmitted(true)
          }}
          style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}
        >
          <div className="form-group">
            <label htmlFor="name" className="section-label" style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Full Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" className="modern-input" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="section-label" style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Email Address</label>
            <input id="email" name="email" type="email" required autoComplete="email" className="modern-input" placeholder="email@company.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="section-label" style={{fontSize: '0.7rem', marginBottom: '0.5rem'}}>Message</label>
            <textarea id="message" name="message" required rows={5} className="modern-input" placeholder="Tell us about your context..." />
          </div>

          <button type="submit" className="btn btn--primary" style={{width: '100%'}}>
            Draft Email
          </button>
        </form>
      </div>
    </div>
  )
}
