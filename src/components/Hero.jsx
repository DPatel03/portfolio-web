import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import './Hero.css'

const roles = ['Software Engineer', 'Data Engineer', 'ML Pipeline Builder']

function useTypingEffect(words, speed = 100, deleteSpeed = 60, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let timer

    if (!deleting && display === word) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIdx((i) => (i + 1) % words.length)
    } else {
      const next = deleting
        ? word.substring(0, display.length - 1)
        : word.substring(0, display.length + 1)
      timer = setTimeout(() => setDisplay(next), deleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timer)
  }, [display, idx, deleting, words, speed, deleteSpeed, pause])

  return display
}

export default function Hero() {
  const typed = useTypingEffect(roles)

  return (
    <header className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <div className="hero__role-line">
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View my work
            </a>
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              Resume
            </a>
          </div>
          <div className="hero__social">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </motion.div>
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {profile.profileImage && (
            <div className="hero__photo-ring">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="hero__photo"
              />
            </div>
          )}
        </motion.div>
      </div>
    </header>
  )
}
