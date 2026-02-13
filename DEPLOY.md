# Push this project to GitHub

Run these in the project folder (`protfolio-web`):

**1. Stage everything** (`.gitignore` keeps `node_modules` and `dist` out)
```bash
git add .
```

**2. Commit**
```bash
git commit -m "Add portfolio website"
```

**3. Connect to your GitHub repo** (only needed once)
```bash
git remote add origin https://github.com/DPatel03/portfolio-web.git
```

If you already have a remote and it points somewhere else:
```bash
git remote set-url origin https://github.com/DPatel03/portfolio-web.git
```

**4. Push** (first time: create/use `main` and set upstream)
```bash
git branch -M main
git push -u origin main
```

After this, your code will be on https://github.com/DPatel03/portfolio-web.  
For later changes: `git add .` → `git commit -m "your message"` → `git push`.
