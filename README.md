# Portfolio Website

A modern, dynamic portfolio showcasing your experience, projects, and skills (SWE, Data Engineering, Data Analysis).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize your content

Edit **`src/data/portfolio.js`** with your real info:

- **profile** – name, title, tagline, email, location, LinkedIn, GitHub, about blurb
- **experiences** – work history (role, company, period, location, bullet points)
- **projects** – name, short/long description, tech stack, repo link, optional demo URL
- **skills** – grouped into Software, Data, Analytics, and Tools (add/remove items as needed)

Optional: add `resume.pdf` to the `public/` folder and set `resumePdf: '/resume.pdf'` in `profile` so the Contact section can link to it.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to Vercel, Netlify, or any static host.

## Tech

- React 18 + Vite
- CSS (no framework) – dark theme, accent color, smooth scroll and scroll-in animations
