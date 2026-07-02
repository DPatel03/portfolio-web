import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { profile, terminal } from '../data/portfolio'
import './Hero.css'

const roles = ['Software Engineer', 'Data Engineer', 'Full Stack Developer']

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
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__container">
        <motion.div
          className="hero__main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero__top">
            {profile.status && (
              <div className="hero__status">
                <span className="hero__status-dot" />
                {profile.status}
              </div>
            )}
            <p className="hero__location">{profile.location}</p>
          </div>

          <h1 className="hero__name">{profile.name}</h1>
          <div className="hero__role-line">
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__intro">{profile.intro}</p>
          <ul className="hero__strengths">
            {profile.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              See what I built
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
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__side"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {profile.profileImage && (
            <div className="hero__photo-wrap">
              <div className="hero__photo-inner">
                <img src={profile.profileImage} alt={profile.name} className="hero__photo" />
                <div className="hero__photo-fade" aria-hidden="true" />
              </div>
            </div>
          )}

          <div className="hero__terminal" aria-label="Terminal preview">
            <div className="hero__terminal-bar">
              <span className="hero__terminal-dot" />
              <span className="hero__terminal-dot" />
              <span className="hero__terminal-dot" />
              <span className="hero__terminal-title">deep@boston</span>
            </div>
            <div className="hero__terminal-body">
              {terminal.lines.map((line) => (
                <div key={line.cmd} className="hero__terminal-line">
                  <p className="hero__terminal-cmd">
                    <span className="hero__terminal-prompt">{terminal.prompt}</span>
                    :~$ {line.cmd}
                  </p>
                  <p className="hero__terminal-out">{line.out}</p>
                </div>
              ))}
              <p className="hero__terminal-cmd hero__terminal-cmd--active">
                <span className="hero__terminal-prompt">{terminal.prompt}</span>
                :~$ <span className="hero__terminal-cursor">_</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
