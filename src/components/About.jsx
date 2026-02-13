import { profile } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about animate-in">
      <h2 className="section-title">About</h2>
      <div className="about__content">
        <p className="about__text">{profile.about}</p>
        <div className="about__meta">
          {profile.location && (
            <span className="about__meta-item">{profile.location}</span>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="about__meta-item">
              {profile.email}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
