# Thu Pham (Shu) · Portfolio

Static portfolio site, live at https://thupham-portfolio.pages.dev

- `index.html`: home page (about, expertise, projects, contact)
- `project.html?id=<project-id>`: case study page, rendered from data
- `assets/js/data.js`: all content (projects, numbers, visuals)
- `assets/js/app.js`: renderer
- `assets/css/style.css`: styles
- `assets/img/`, `assets/cv/`: images and CV

No build step. Serve the folder as-is, e.g. `python3 -m http.server 8080`, or deploy it to Cloudflare Pages.
After changing data or styles, bump the `?v=` numbers in `index.html` and `project.html`.
