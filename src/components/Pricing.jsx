import { useState } from 'react'
import { PLANS } from '../data.js'
import Icon from './Icons.jsx'

export default function Pricing({ onChoosePlan }) {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Simple pricing that grows with your team</h2>
          <p>Start alone, invite your team when it helps. No card needed to begin.</p>
        </div>

        <div className="billing-toggle">
          <span className={!yearly ? 'on' : ''}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Bill yearly"
            className="switch"
            onClick={() => setYearly((y) => !y)}
          >
            <span className="knob" />
          </button>
          <span className={yearly ? 'on' : ''}>Yearly <em>save 25%</em></span>
        </div>

        <div className="plan-grid">
          {PLANS.map((p) => {
            const price = yearly ? p.yearly : p.monthly
            return (
              <article key={p.id} className={`plan ${p.featured ? 'plan-featured' : ''}`}>
                {p.featured && <span className="plan-badge">Most teams pick this</span>}
                <h3>{p.name}</h3>
                <p className="plan-blurb">{p.blurb}</p>
                <p className="plan-price">
                  {price === null ? (
                    <span className="amount amount-text">Let’s talk</span>
                  ) : (
                    <span className="amount">${price}</span>
                  )}
                  <span className="unit">{p.unit}{p.id === 'team' && yearly ? ', billed yearly' : ''}</span>
                </p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}><Icon name="check" size={18} />{f}</li>
                  ))}
                </ul>
                <button
                  className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => onChoosePlan(p.id)}
                >
                  {p.cta}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
