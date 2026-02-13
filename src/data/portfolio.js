// Portfolio content — from your resume
// Profile photo: put profile.png (or profile.jpg) in this same folder (src/data/)
import profileImg from './profile.png'

export const profile = {
  name: 'Deep Patel',
  title: 'Software Engineer & Data Professional',
  tagline: 'Building secure APIs, data pipelines, and ML systems that scale.',
  profileImage: profileImg,
  email: 'deep.patel.0603@gmail.com',
  location: 'New York, NY',
  linkedin: 'https://www.linkedin.com/in/dpatel06/',
  github: 'https://github.com/DPatel03',
  // Put your PDF in the public/ folder — filename must match exactly
  resumePdf: '/Deep_Patel_Resume.pdf',
  about: `I'm a software engineer with experience across full-stack development, data pipelines, and ML systems. I've built REST APIs with Spring Boot, full-stack features with Node.js and React, and credit risk and analytics pipelines with Python and PostgreSQL. I care about clean code, performance, and turning data into clear, actionable outcomes.`,
};

export const experiences = [
  {
    id: 1,
    role: 'Software Engineering',
    company: 'Prama',
    period: 'Jan 2025 – Aug 2025',
    location: 'Remote',
    highlights: [
      'Engineered REST APIs with Spring Boot to support role-based access control, strengthening backend modularity and security.',
      'Integrated AWS EC2 automation via Docker and backend scripts, cutting manual infrastructure work by 40%.',
      'Optimized MongoDB and PostgreSQL queries through indexing and caching, enhancing performance and response time.',
      'Diagnosed and resolved API issues using Postman and logging tools, increasing reliability under scaling.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'Tech Incubator',
    period: 'Feb 2024 – Apr 2024',
    location: 'Queens, New York',
    highlights: [
      'Built full-stack features for a travel planning app using Node.js and React, including destination search and booking modules.',
      'Refactored backend routes and API integrations for improved performance and maintainability.',
      'Collaborated with clients to translate business goals into Wix-based web solutions, optimizing site structure and user flow.',
    ],
  },
  {
    id: 3,
    role: 'Implementation Specialist Intern (Web Developer Intern)',
    company: 'Evergreen Investments',
    period: 'Jul 2023 – Aug 2023',
    location: 'Remote',
    highlights: [
      'Automated order processing via a centralized SQL database, reducing manual data entry by 80% and errors by 60%.',
      'Refactored legacy JavaScript logic and coordinated Git-based workflows with intern teams using GitHub and VS Code.',
      'Deployed backend scripts on Linux-based servers and helped coordinate test deployments during weekly sprint cycles.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: 'Credit Risk Prediction & Decisioning System',
    shortDesc: 'End-to-end credit risk pipeline with calibrated ML and explainable underwriting rules.',
    longDesc: 'Constructed an end-to-end pipeline by cleaning HMDA loan data and persisting features, predictions, and decisions in PostgreSQL for full visibility into each application’s lifecycle. Calibrated a logistic regression model with Platt scaling and measured performance using ROC AUC, Brier Score, and calibration curves. Formalized approve, review, and reject decision rules based on model risk scores.',
    tech: ['Python', 'SQL', 'PostgreSQL', 'scikit-learn', 'Git', 'GitHub'],
    link: 'https://github.com/DPatel03/credit-risk-prediction-and-decisioning',
    demo: null,
  },
  {
    id: 2,
    name: 'Grant Cancellation Impact Analysis (Team Project)',
    shortDesc: 'Forensic analytics for a U.S. Senator’s office on 133K+ federal grant transactions.',
    longDesc: 'Designed a forensic analytics framework with a cross-functional team, examining 133K+ federal grant transactions. Uncovered disproportionate equity impacts by linking grant data with ACS Census demographics—high-diversity communities absorbed up to 175× higher per-capita funding cuts. Visualized insights through interactive Streamlit dashboards and geospatial maps for non-technical stakeholders.',
    tech: ['Python', 'SQL', 'Pandas', 'NumPy', 'APIs', 'Data Visualization', 'Streamlit'],
    link: 'https://github.com/DPatel03',
    demo: null,
  },
  {
    id: 3,
    name: 'SecurePetStore API',
    shortDesc: 'Role-based REST APIs with JWT and Spring Security.',
    longDesc: 'Designed secure, role-based REST APIs for user and admin accounts, integrating JWT for session control. Maintained clear code structure and logging to trace issues across the service layers.',
    tech: ['Spring Boot', 'Spring Security', 'REST API', 'Postman', 'JWT', 'MySQL'],
    link: 'https://github.com/DPatel03/SecurePetStore-API',
    demo: null,
  },
  {
    id: 4,
    name: 'ZzzPredict',
    shortDesc: 'Real-time ML app that predicts sleep quality from health metrics.',
    longDesc: 'Created a real-time ML-based app that predicts sleep quality using health metrics, deployed with Streamlit. Processed and cleaned input data with Pandas, implemented error handling, and enhanced component testability. Shared usage documentation and participated in peer feedback cycles to improve app usability.',
    tech: ['Python', 'CSV', 'Streamlit', 'Pandas'],
    link: 'https://github.com/DPatel03/CTP_Project',
    demo: 'https://zzzpredict.streamlit.app/',
  },
  {
    id: 5,
    name: 'Sales Performance Analysis & Dashboard',
    shortDesc: 'EDA and business metrics with SQL and visual analytics.',
    longDesc: 'Applied exploratory data analysis to detect patterns, outliers, and seasonal fluctuations. Queried relational datasets using SQL joins, aggregations, and filtering to generate business metrics. Built dashboards for performance visibility.',
    tech: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    link: 'https://github.com/DPatel03/sales-performance-analysis-dashboard',
    demo: 'https://dpatel03-sales-performance-analysis-dashboa-dashboardapp-1dqoxx.streamlit.app/',
  },
  {
    id: 6,
    name: 'Personal Portfolio Website',
    shortDesc: 'Modern portfolio built with React and Vite—responsive, animated, and easy to update.',
    longDesc: 'Single-page portfolio showcasing experience, projects, and skills. Features a dark theme, gradient accents, scroll-in animations, and direct links to GitHub repos and live demos. Content is driven from a single data file for quick edits.',
    tech: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/DPatel03/my-protfolio-website',
    demo: null,
  },
];

// Structured for recruiter scanability. Remove any item you haven’t actually used.
export const skills = {
  software: {
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    'Frameworks': ['Node.js', 'React', 'Spring Boot'],
    'APIs & Security': ['REST APIs', 'JWT', 'Postman', 'OpenAPI/Swagger'],
    'Testing & CI': ['PyTest', 'Jest', 'GitHub Actions', 'Docker', 'Git'],
  },
  data: {
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    'Processing': ['Pandas', 'NumPy', 'PySpark', 'SQL'],
    'Pipelines': ['ETL', 'Data Modeling', 'Data Cleaning', 'Feature Engineering'],
  },
  ml: {
    'Modeling': ['scikit-learn', 'Logistic Regression', 'Model Calibration'],
    'Evaluation': ['ROC AUC', 'Brier Score', 'Calibration Curves'],
    'Visualization': ['Streamlit', 'Matplotlib', 'Seaborn', 'Data Viz'],
  },
  cloud: {
    'Cloud & DevOps': ['AWS EC2', 'AWS S3', 'Docker', 'Linux'],
    'Tools': ['VS Code', 'Git', 'GitHub', 'IBM Cognos Analytics'],
  },
};
