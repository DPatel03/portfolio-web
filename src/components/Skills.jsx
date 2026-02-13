import { skills } from '../data/portfolio'
import './Skills.css'

const categoryLabels = {
  software: 'Software Engineering',
  data: 'Data Engineering',
  ml: 'Machine Learning',
  cloud: 'Cloud & Tools',
}

export default function Skills() {
  return (
    <section id="skills" className="skills animate-in">
      <h2 className="section-title">Skills</h2>
      <div className="skills__grid">
        {Object.entries(skills).map(([key, value]) => (
          <div key={key} className="skills__category">
            <h3 className="skills__category-title">{categoryLabels[key] || key}</h3>
            {typeof value === 'object' && !Array.isArray(value) ? (
              Object.entries(value).map(([subLabel, items]) => (
                <div key={subLabel} className="skills__group">
                  <h4 className="skills__subtitle">{subLabel}</h4>
                  <ul className="skills__list">
                    {(items || []).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="skills__list">
                {(value || []).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
