import { useState } from 'react'
import { PLANS } from '../data.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name (at least 2 characters).'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid work email, like name@company.com.'
  if (!v.teamSize) e.teamSize = 'Choose your team size.'
  if (v.message.length > 500) e.message = 'Keep your message under 500 characters.'
  return e
}

export default function Contact({ selectedPlan, onPlanChange }) {
  const [values, setValues] = useState({ name: '', email: '', teamSize: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    // Clear an error as soon as the field becomes valid.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validate(next)[field] }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) setSubmitted(true)
  }

  const reset = () => {
    setValues({ name: '', email: '', teamSize: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  const field = (name) => ({
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2>See Hindsight on your own decisions</h2>
          <p>
            Book a 20-minute demo. Bring one decision your team made last quarter and we will set it
            up together, assumptions included.
          </p>
          <dl className="contact-details">
            <div><dt>Email</dt><dd><a href="mailto:hello@hindsight.example">hello@hindsight.example</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+910000000000">+91 00000 00000</a></dd></div>
            <div><dt>Hours</dt><dd>Monday to Friday, 9 am to 6 pm IST</dd></div>
          </dl>
        </div>

        <div className="form-wrap">
          {submitted ? (
            <div className="success" role="status">
              <span className="success-tick" aria-hidden="true">✓</span>
              <h3>Demo request sent</h3>
              <p>
                Thanks, {values.name.trim().split(' ')[0]}. We will email you at{' '}
                <strong>{values.email.trim()}</strong> within one working day to pick a time.
              </p>
              <button className="btn btn-outline" onClick={reset}>Send another request</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" autoComplete="name" value={values.name} onChange={update('name')} {...field('name')} />
                {errors.name && <p className="error" id="name-error">{errors.name}</p>}
              </div>

              <div className="field">
                <label htmlFor="email">Work email</label>
                <input id="email" type="email" autoComplete="email" value={values.email} onChange={update('email')} {...field('email')} />
                {errors.email && <p className="error" id="email-error">{errors.email}</p>}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="teamSize">Team size</label>
                  <select id="teamSize" value={values.teamSize} onChange={update('teamSize')} {...field('teamSize')}>
                    <option value="">Choose one</option>
                    <option>Just me</option>
                    <option>2 to 10 people</option>
                    <option>11 to 50 people</option>
                    <option>51 to 200 people</option>
                    <option>More than 200 people</option>
                  </select>
                  {errors.teamSize && <p className="error" id="teamSize-error">{errors.teamSize}</p>}
                </div>

                <div className="field">
                  <label htmlFor="plan">Plan you are interested in</label>
                  <select id="plan" value={selectedPlan} onChange={(e) => onPlanChange(e.target.value)}>
                    {PLANS.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">What decision would you like to track? <span className="optional">(optional)</span></label>
                <textarea id="message" rows="4" value={values.message} onChange={update('message')} {...field('message')} />
                {errors.message && <p className="error" id="message-error">{errors.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">Request a demo</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
