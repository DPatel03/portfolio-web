import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="section-title">
        <span className="section-title__num">06.</span>
        Contact
      </h2>
      <div className="contact__content">
        <p className="contact__heading">Get in touch</p>
        <p className="contact__text">
          Looking for software engineering and data engineering roles. Email or LinkedIn works best.
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
    </motion.section>
  )
}
