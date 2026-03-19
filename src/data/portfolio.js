import profileImg from './profile.png'

export const profile = {
  name: 'Deep Patel',
  title: 'Software Engineer & Data Scientist',
  tagline: 'Building secure APIs, data pipelines, and ML systems that scale.',
  profileImage: profileImg,
  email: 'deep.patel.0603@gmail.com',
  location: 'Boston, MA',
  linkedin: 'https://www.linkedin.com/in/dpatel06/',
  github: 'https://github.com/DPatel03',
  resumePdf: '/Deep_Patel_SWE.pdf',
  about: `I'm a software engineer and data scientist pursuing an M.S. in Data Science at Boston University. I've engineered role-based APIs with Spring Boot, optimized database performance across MongoDB and PostgreSQL, and built end-to-end data pipelines and ML systems with Python. From forensic grant analytics delivered to a U.S. Senator's office to RAG-powered civic data tools, I focus on clean code, measurable impact, and turning complex data into actionable outcomes.`,
};

export const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Prama',
    period: 'Jan 2025 – Aug 2025',
    location: 'Remote',
    highlights: [
      'Engineered a role-based access control layer using Spring Boot, decoupling authorization from business services and eliminating a class of permission bugs that had required repeated hotfixes.',
      'Reduced read latency by 35% on critical MongoDB and PostgreSQL queries via compound indexes and application-level caching, validated under load testing.',
      'Cut manual infrastructure operations by 40% by automating AWS EC2 provisioning and Docker container orchestration, enabling scalable, repeatable deployments.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'Tech Incubator at CUNY',
    period: 'Feb 2024 – Apr 2024',
    location: 'New York, NY',
    highlights: [
      'Built destination search and booking modules for a full-stack travel app (Node.js/React), replacing static content with parameterized API calls and cutting average page load by 20%.',
      'Improved API response reliability by refactoring fragile route handlers and consolidating third-party API calls, reducing failure surface area in a production travel platform.',
      'Standardized GitHub branching conventions across a 6-person intern team, reducing merge conflicts and improving sprint velocity.',
    ],
  },
  {
    id: 3,
    role: 'Implementation Specialist (Web Developer Intern)',
    company: 'Evergreen Investments',
    period: 'Jul 2023 – Aug 2023',
    location: 'Remote',
    highlights: [
      'Eliminated 80% of manual data entry and cut processing errors by 60% by automating order workflows through a centralized SQL pipeline, replacing a fragmented spreadsheet-based process across the operations team.',
      'Deployed and maintained backend processing scripts on Linux servers, coordinating test deployments during weekly sprints with zero service interruptions.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    featured: true,
    name: 'Gateway Cities Foreign-Born Population Dashboard',
    shortDesc: 'Full-stack ETL-to-visualization pipeline analyzing immigrant demographics across 26 Massachusetts Gateway Cities.',
    longDesc: 'Built an end-to-end ETL pipeline ingesting ACS Census CSVs for 26 Massachusetts Gateway Cities, normalizing raw data into Parquet for 3–5x faster reads and computing socioeconomic metrics served via a cached Flask REST API. Designed a React/Vite frontend with a Leaflet choropleth over TIGERweb GeoJSON, click-to-filter city selection, country-of-origin drill-downs, and per-capita metric comparisons — turning opaque census tables into a navigable policy tool.',
    tech: ['Python', 'Pandas', 'Parquet', 'Flask', 'React', 'Leaflet', 'Census API'],
    link: 'https://github.com/BU-Spark/dd4g-gbh-gateway-cites',
    demo: 'https://dd4g-gatewayscities.up.railway.app/',
  },
  {
    id: 2,
    featured: true,
    name: 'Justice Lens — Boston Criminal Justice Analytics',
    shortDesc: 'RAG-powered analytics platform analyzing 100K+ Boston PD records with an AI chatbot.',
    longDesc: 'Engineered a multi-page Streamlit app analyzing 100K+ Boston PD records (2011–2020), computing sustained findings rates, district-level complaint trends, and pydeck incident heatmaps with sub-1s page transitions. Integrated a RAG-powered chatbot (RAGFlow + Google Gemini) with an anti-hallucination pipeline that validates LLM outputs against source data. Resolved ~40 non-canonical allegation label variants and linked officer records across datasets with no shared key via fuzzy name normalization.',
    tech: ['Python', 'Streamlit', 'Plotly', 'pydeck', 'RAGFlow', 'Google Gemini', 'Pandas'],
    link: 'https://github.com/aadpaguio/civichacks_justice_lens',
    demo: null,
  },
  {
    id: 3,
    name: 'Grant Cancellation Impact Analysis',
    shortDesc: 'Forensic analytics delivered to a U.S. Senator\'s office on 133K+ federal grant transactions.',
    longDesc: 'Quantified equity harm across 133K+ federal grant transactions by joining cancellation records to ACS demographics — high-diversity communities absorbed up to 175x higher per-capita cuts than low-diversity counterparts. Delivered forensic analytics to a U.S. Senator\'s office via interactive Streamlit dashboards and geospatial maps, enabling non-technical policy staff to explore fiscal risk by geography.',
    tech: ['Python', 'Pandas', 'Streamlit', 'ACS Census API', 'Geospatial Mapping'],
    link: null,
    demo: null,
  },
  {
    id: 4,
    name: 'Credit Risk Prediction & Decisioning System',
    shortDesc: 'End-to-end credit risk pipeline with calibrated ML and explainable underwriting rules.',
    longDesc: 'Built a production-style credit decisioning pipeline on 200K+ HMDA loan records — engineered predictive features, calibrated a classifier with Platt scaling, and persisted model outputs and approve/review/reject decisions to PostgreSQL for full auditability. Evaluated model reliability with ROC AUC, Brier Score, and calibration curves to assess real-world risk estimation fidelity.',
    tech: ['Python', 'PostgreSQL', 'scikit-learn', 'Platt Scaling', 'HMDA Data'],
    link: 'https://github.com/DPatel03/credit-risk-prediction-and-decisioning',
    demo: null,
  },
  {
    id: 5,
    name: 'SecurePetStore API',
    shortDesc: 'Role-based REST APIs with JWT and Spring Security.',
    longDesc: 'Designed secure, role-based REST APIs for user and admin accounts, integrating JWT for session control. Maintained clear code structure and logging to trace issues across the service layers.',
    tech: ['Spring Boot', 'Spring Security', 'REST API', 'Postman', 'JWT', 'MySQL'],
    link: 'https://github.com/DPatel03/SecurePetStore-API',
    demo: null,
  },
  {
    id: 6,
    name: 'ZzzPredict',
    shortDesc: 'Real-time ML app that predicts sleep quality from health metrics.',
    longDesc: 'Created a real-time ML-based app that predicts sleep quality using health metrics, deployed with Streamlit. Processed and cleaned input data with Pandas, implemented error handling, and enhanced component testability.',
    tech: ['Python', 'Streamlit', 'Pandas', 'scikit-learn'],
    link: 'https://github.com/DPatel03/CTP_Project',
    demo: 'https://zzzpredict.streamlit.app/',
  },
  {
    id: 7,
    name: 'Sales Performance Analysis & Dashboard',
    shortDesc: 'EDA and business metrics with SQL and visual analytics.',
    longDesc: 'Applied exploratory data analysis to detect patterns, outliers, and seasonal fluctuations. Queried relational datasets using SQL joins, aggregations, and filtering to generate business metrics. Built dashboards for performance visibility.',
    tech: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    link: 'https://github.com/DPatel03/sales-performance-analysis-dashboard',
    demo: 'https://dpatel03-sales-performance-analysis-dashboa-dashboardapp-1dqoxx.streamlit.app/',
  },
  {
    id: 8,
    name: 'Personal Portfolio Website',
    shortDesc: 'Modern portfolio built with React and Vite — responsive, animated, and easy to update.',
    longDesc: 'Single-page portfolio showcasing experience, projects, and skills. Features a dark theme, gradient accents, scroll-in animations, and direct links to GitHub repos and live demos. Content is driven from a single data file for quick edits.',
    tech: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/DPatel03/my-protfolio-website',
    demo: null,
  },
];

export const skills = {
  software: {
    'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C++'],
    'Frameworks': ['Spring Boot', 'Flask', 'React', 'Node.js', 'Express'],
    'APIs & Security': ['REST APIs', 'JWT', 'OpenAPI/Swagger', 'Postman'],
    'Testing & CI/CD': ['PyTest', 'Jest', 'GitHub Actions', 'Docker', 'Git'],
  },
  data: {
    'Databases': ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    'Processing': ['Pandas', 'NumPy', 'PySpark', 'SQL'],
    'Pipelines': ['ETL', 'Data Modeling', 'Feature Engineering', 'Data Cleaning'],
    'Formats': ['Parquet', 'GeoJSON', 'CSV'],
  },
  ai: {
    'LLM & RAG': ['RAG Pipelines', 'Google Gemini API', 'LLM Prompt Engineering', 'Vector Databases', 'Embeddings', 'FAISS', 'LangChain'],
    'Anti-Hallucination': ['Source-Data Validation', 'Pipeline Design'],
    'Tooling': ['Semantic Search', 'Prompt Chaining'],
  },
  ml: {
    'Modeling': ['scikit-learn', 'Logistic Regression', 'Platt Scaling', 'Model Calibration'],
    'Evaluation': ['ROC AUC', 'Brier Score', 'Calibration Curves'],
    'Visualization': ['Streamlit', 'Plotly', 'pydeck', 'Leaflet', 'Matplotlib', 'Seaborn'],
  },
  cloud: {
    'Cloud & DevOps': ['AWS EC2', 'AWS S3', 'Docker', 'Kubernetes', 'OpenShift', 'Linux'],
    'Tools': ['VS Code', 'Git', 'GitHub', 'GitHub Actions'],
  },
};
