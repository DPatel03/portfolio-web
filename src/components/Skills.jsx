import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiReact, SiNodedotjs, SiExpress, SiFlask,
  SiPostgresql, SiMongodb, SiMysql, SiSqlite,
  SiDocker, SiKubernetes, SiLinux, SiGit, SiGithub,
  SiPandas, SiNumpy, SiScikitlearn,
  SiStreamlit, SiPlotly,
  SiGithubactions, SiJest, SiPytest,
  SiApachespark
} from 'react-icons/si'
import { FaJava, FaAws, FaDatabase, FaCode } from 'react-icons/fa'
import './Skills.css'

const iconMap = {
  'Python': SiPython,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Java': FaJava,
  'C++': SiCplusplus,
  'SQL': FaDatabase,
  'Flask': SiFlask,
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'SQLite': SiSqlite,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'PySpark': SiApachespark,
  'scikit-learn': SiScikitlearn,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Linux': SiLinux,
  'Git': SiGit,
  'GitHub': SiGithub,
  'GitHub Actions': SiGithubactions,
  'AWS EC2': FaAws,
  'AWS S3': FaAws,
  'Streamlit': SiStreamlit,
  'Plotly': SiPlotly,
  'PyTest': SiPytest,
  'Jest': SiJest,
}

const categoryLabels = {
  software: 'Software Engineering',
  data: 'Data Engineering',
  ai: 'AI & LLM',
  ml: 'Machine Learning',
  cloud: 'Cloud & DevOps',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SkillIcon({ name }) {
  const Icon = iconMap[name]
  if (!Icon) return <FaCode className="skills__chip-icon" />
  return <Icon className="skills__chip-icon" />
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="skills__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {Object.entries(skills).map(([key, subGroups]) => (
          <motion.div key={key} className="skills__category" variants={cardVariants}>
            <h3 className="skills__cat-title">{categoryLabels[key] || key}</h3>
            {typeof subGroups === 'object' && !Array.isArray(subGroups) ? (
              Object.entries(subGroups).map(([subLabel, items]) => (
                <div key={subLabel} className="skills__group">
                  <h4 className="skills__group-label">{subLabel}</h4>
                  <div className="skills__chips">
                    {(items || []).map((skill) => (
                      <span key={skill} className="skills__chip">
                        <SkillIcon name={skill} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="skills__chips">
                {(subGroups || []).map((skill) => (
                  <span key={skill} className="skills__chip">
                    <SkillIcon name={skill} />
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
