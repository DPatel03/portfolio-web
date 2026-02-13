import { profile } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact animate-in">
      <h2 className="section-title">Contact</h2>
      <div className="contact__content">
        <p className="contact__text">
          I'm open to new opportunities and conversations. Reach out via email or LinkedIn.
        </p>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`} className="contact__btn">
            Email me
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--outline">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--outline">
              GitHub
            </a>
          )}
          {profile.resumePdf && (
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--outline">
              Resume (PDF)
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
