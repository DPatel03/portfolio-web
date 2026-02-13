import { projects } from '../data/portfolio'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects animate-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects__grid">
        {projects.map((proj, idx) => (
          <article key={proj.id} className={`proj-card animate-in--delay-${(idx % 5) + 1}`}>
            <h3 className="proj-card__name">{proj.name}</h3>
            <p className="proj-card__short">{proj.shortDesc}</p>
            <p className="proj-card__long">{proj.longDesc}</p>
            <div className="proj-card__tech">
              {proj.tech.map((t) => (
                <span key={t} className="proj-card__tag">{t}</span>
              ))}
            </div>
            <div className="proj-card__links">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                Code →
              </a>
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  Live demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
