import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'
import './Nav.css'

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  useEffect(() => {
    const sections = ['hero', ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target?.id
        if (id) setActive(id === 'hero' ? '' : id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-mark">dp</span>
          <span className="nav__logo-dot">.</span>
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
          <span className={mobileOpen ? 'open' : ''} />
        </button>
        <ul className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          {links.map(({ href, id, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === id ? 'nav__link--active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="nav__resume">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__resume-btn"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
