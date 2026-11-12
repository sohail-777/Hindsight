import { scrollToSection } from '../utils.js'
import DecisionDemo from './DecisionDemo.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>Every decision your team makes has an expiry date.</h1>
          <p className="lead">
            Hindsight records why you decided, lists the assumptions the choice depends on, and
            asks the right person to take another look the moment one of them stops being true.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
              Request a demo
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => scrollToSection('how-it-works')}>
              See how it works
            </button>
          </div>
          <p className="hero-note">Free for individuals. Works with Slack, Notion and Linear.</p>
        </div>
        <DecisionDemo />
      </div>
    </section>
  )
}
