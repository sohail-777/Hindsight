import { NAV_LINKS } from '../data.js'
import { scrollToSection } from '../utils.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-tag">A decision log that tells you when it is time to decide again.</p>
        </div>
        <nav aria-label="Footer">
          <h3>Product</h3>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(l.id) }}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:hello@hindsight.example">hello@hindsight.example</a></li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Hindsight. Sample project for a front-end assignment.</p>
      </div>
    </footer>
  )
}
