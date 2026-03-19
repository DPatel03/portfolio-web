import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import './Projects.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="projects__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {projects.map((proj) => (
          <motion.article
            key={proj.id}
            className={`proj-card${proj.featured ? ' proj-card--featured' : ''}`}
            variants={cardVariants}
          >
            {proj.featured && <span className="proj-card__badge">Featured</span>}
            <h3 className="proj-card__name">{proj.name}</h3>
            <p className="proj-card__short">{proj.shortDesc}</p>
            <p className="proj-card__long">{proj.longDesc}</p>
            <div className="proj-card__tech">
              {proj.tech.map((t) => (
                <span key={t} className="proj-card__tag">{t}</span>
              ))}
            </div>
            <div className="proj-card__links">
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-card__link">
                  Code →
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-card__link proj-card__link--demo">
                  Live Demo →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
