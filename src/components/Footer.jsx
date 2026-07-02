import { profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          Built by {profile.name}, {year}
        </p>
        <div className="footer__links">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
