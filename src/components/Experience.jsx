import { experiences } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="experience animate-in">
      <h2 className="section-title">Experience</h2>
      <div className="experience__list">
        {experiences.map((job, idx) => (
          <article key={job.id} className={`exp-card animate-in--delay-${(idx % 5) + 1}`}>
            <div className="exp-card__header">
              <div>
                <h3 className="exp-card__role">{job.role}</h3>
                <p className="exp-card__company">{job.company}</p>
              </div>
              <div className="exp-card__meta">
                <span className="exp-card__period">{job.period}</span>
                {job.location && (
                  <span className="exp-card__location">{job.location}</span>
                )}
              </div>
            </div>
            <ul className="exp-card__highlights">
              {job.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
