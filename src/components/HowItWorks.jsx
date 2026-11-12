import { STEPS } from '../data.js'
import { scrollToSection } from '../utils.js'

export default function HowItWorks() {
  return (
    <section className="section dark" id="how-it-works">
      <div className="container how-grid">
        <div className="how-intro">
          <h2>What Hindsight does</h2>
          <p>
            Hindsight is a decision log that watches itself. Your team records a choice once, and
            the product keeps track of whether the reasons for it are still valid, so old calls get
            reviewed on purpose instead of by accident.
          </p>
          <button className="btn btn-light" onClick={() => scrollToSection('pricing')}>
            Compare plans
          </button>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
