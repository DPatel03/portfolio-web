import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import {
  SiPython, SiTypescript, SiJavascript,
  SiReact, SiNodedotjs, SiFlask, SiFastapi, SiNextdotjs,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiSnowflake,
  SiDocker, SiKubernetes, SiLinux, SiGit, SiGithub,
  SiPandas, SiNumpy, SiScikitlearn,
  SiStreamlit, SiPlotly,
  SiGithubactions, SiPytest,
  SiApachespark, SiApachekafka, SiApacheairflow, SiTerraform, SiDbt,
} from 'react-icons/si'
import { FaJava, FaAws, FaDatabase, FaCode } from 'react-icons/fa'
import './Skills.css'

const iconMap = {
  'Python': SiPython,
  'Bash': FaCode,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Java': FaJava,
  'SQL': FaDatabase,
  'Flask': SiFlask,
  'FastAPI': SiFastapi,
  'Next.js': SiNextdotjs,
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'TimescaleDB': SiPostgresql,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'Snowflake': SiSnowflake,
  'Redis': SiRedis,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'PyArrow': FaCode,
  'PySpark': SiApachespark,
  'Apache Kafka': SiApachekafka,
  'Apache Airflow': SiApacheairflow,
  'dbt': SiDbt,
  'Kafka': SiApachekafka,
  'Tekton': SiGithubactions,
  'Great Expectations': FaCode,
  'SQLAlchemy': FaCode,
  'GPT-4o-mini': FaCode,
  'MLflow': FaCode,
  'scikit-learn': SiScikitlearn,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'OpenShift': SiKubernetes,
  'Terraform': SiTerraform,
  'Linux': SiLinux,
  'Git': SiGit,
  'GitHub': SiGithub,
  'GitHub Actions': SiGithubactions,
  'AWS EC2': FaAws,
  'AWS S3': FaAws,
  'AWS Lambda': FaAws,
  'Streamlit': SiStreamlit,
  'Plotly': SiPlotly,
  'PyTest': SiPytest,
}

const categoryLabels = {
  software: 'Software Engineering',
  data: 'Data Engineering',
  ai: 'LLM & AI',
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
        <span className="section-title__num">05.</span>
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
