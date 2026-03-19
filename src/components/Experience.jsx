import { motion } from 'framer-motion'
import { experiences } from '../data/portfolio'
import './Experience.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="experience__timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {experiences.map((job) => (
          <motion.article key={job.id} className="exp-card" variants={cardVariants}>
            <div className="exp-card__header">
              <div>
                <h3 className="exp-card__role">{job.role}</h3>
                <p className="exp-card__company">{job.company}</p>
              </div>
              <div className="exp-card__badges">
                <span className="exp-card__badge">{job.period}</span>
                {job.location && <span className="exp-card__badge">{job.location}</span>}
              </div>
            </div>
            <ul className="exp-card__highlights">
              {job.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
