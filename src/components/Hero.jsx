import { profile } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero animate-in">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View my work
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Get in touch
          </a>
        </div>
        <div className="hero__social">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="hero__visual">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="hero__photo"
          />
        ) : (
          <div className="hero__grid" aria-hidden="true" />
        )}
      </div>
    </header>
  )
}
