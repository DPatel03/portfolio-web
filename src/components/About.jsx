import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import './About.css'

const stats = [
  { value: '3+', label: 'Years Building' },
  { value: '4', label: 'Projects Shipped' },
  { value: 'M.S.', label: 'Data Science @ BU' },
  { value: '133K+', label: 'Records Analyzed' },
]

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
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
      <h2 className="section-title">About</h2>
      <div className="about__columns">
        <div className="about__left">
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
        <div className="about__right">
          <div className="about__stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about__stat"
                custom={i}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
