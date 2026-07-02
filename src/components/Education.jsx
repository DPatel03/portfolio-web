import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import './Education.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-title__num">04.</span>
        Education
      </motion.h2>
      <motion.div
        className="education__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {education.map((edu) => (
          <motion.article key={edu.id} className="edu-card" variants={cardVariants}>
            <div className="edu-card__header">
              <div>
                <h3 className="edu-card__degree">{edu.degree}</h3>
                <p className="edu-card__school">{edu.school}</p>
              </div>
              <div className="edu-card__badges">
                <span className="edu-card__badge">{edu.period}</span>
                <span className="edu-card__badge">{edu.location}</span>
              </div>
            </div>
            <p className="edu-card__focus">{edu.focus}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
