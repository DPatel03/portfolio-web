import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import './About.css'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="section-title">
        <span className="section-title__num">01.</span>
        About
      </h2>

      <div className="about__layout">
        <div className="about__story">
          <p className="about__lead">{profile.about}</p>
          <p className="about__text">{profile.aboutMore}</p>
          <div className="about__focus">
            <span className="about__focus-label">What I work on</span>
            <div className="about__focus-tags">
              {profile.focusAreas.map((area) => (
                <span key={area} className="about__focus-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about__proof">
          <p className="about__proof-heading">What I have backed this up with</p>
          <div className="about__proof-grid">
            {profile.proofPoints.map((point, i) => (
              <motion.div
                key={point.label}
                className="about__proof-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="about__proof-value">{point.value}</span>
                <span className="about__proof-label">{point.label}</span>
                <span className="about__proof-context">{point.context}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
