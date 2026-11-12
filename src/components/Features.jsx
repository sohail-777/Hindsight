import { FEATURES } from '../data.js'
import Icon from './Icons.jsx'

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <h2>Remember why you decided, and notice when it stops being true</h2>
          <p>
            Most teams write down what they decided. Hindsight also keeps the part that goes out of
            date: the assumptions underneath.
          </p>
        </div>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <article className="feature" key={f.title}>
              <span className="feature-icon"><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
