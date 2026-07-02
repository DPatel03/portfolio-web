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
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-title__num">03.</span>
        Projects
      </motion.h2>

      <motion.div
        className="projects__featured"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {featured.map((proj) => (
          <ProjectCard key={proj.id} proj={proj} featured />
        ))}
      </motion.div>

      {other.length > 0 && (
        <>
          <h3 className="projects__subtitle">More Projects</h3>
          <motion.div
            className="projects__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {other.map((proj) => (
              <ProjectCard key={proj.id} proj={proj} />
            ))}
          </motion.div>
        </>
      )}
    </section>
  )
}

function ProjectCard({ proj, featured = false }) {
  return (
    <motion.article
      className={`proj-card${featured ? ' proj-card--featured' : ''}`}
      variants={cardVariants}
    >
      {featured && <span className="proj-card__badge">Featured</span>}
      <h3 className="proj-card__name">{proj.name}</h3>
      <p className="proj-card__short">{proj.shortDesc}</p>
      {proj.metrics && (
        <div className="proj-card__metrics">
          {proj.metrics.map((m) => (
            <span key={m} className="proj-card__metric">{m}</span>
          ))}
        </div>
      )}
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
  )
}
