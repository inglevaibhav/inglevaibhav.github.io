# Personal Portfolio

Plain HTML/CSS/JS site — no build step, no dependencies, free to host forever.

## Edit content

Almost everything is in **[js/data.js](js/data.js)**: name, tagline, bio, experience, projects,
education, publications, skills, activities, and gallery photos. Edit the arrays there and
refresh the browser — no build/compile step required.

- Replace `assets/resume-PLACEHOLDER.txt` with your real `assets/resume.pdf`.
- Replace `assets/images/profile.jpg.svg` with a real photo (update the path in `js/data.js` → `SITE.photo`).
- Add real photos to `assets/images/gallery/` and list them in `js/data.js` → `GALLERY`.
- Update `SITE.email`, `SITE.linkedin`, `SITE.github` in `js/data.js`.

## Preview locally

Just open `index.html` in a browser, or run a simple local server:

```
python -m http.server 8000
```

then visit http://localhost:8000

## Deploy for free (GitHub Pages)

1. Create a new empty repository on github.com (e.g. `your-username.github.io` for a root-level
   URL, or any name for `your-username.github.io/repo-name`).
2. In this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: repo → Settings → Pages → Source: `main` branch, `/ (root)` folder → Save.
4. Site goes live at `https://<your-username>.github.io/<repo-name>` (or
   `https://<your-username>.github.io` for the special repo name) within a minute or two.

No further cost, accounts, or maintenance required — GitHub Pages is free for personal sites and
visitors never pay anything either.
