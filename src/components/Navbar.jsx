import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data.js'
import { scrollToSection } from '../utils.js'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand" aria-label="Hindsight home" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <Logo />
        </a>

        <nav id="site-nav" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
          <button className="btn btn-primary nav-cta-mobile" onClick={() => { setOpen(false); scrollToSection('contact') }}>
            Get started
          </button>
        </nav>

        <button className="btn btn-primary nav-cta" onClick={() => scrollToSection('contact')}>
          Get started
        </button>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
