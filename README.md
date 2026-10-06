# Ismam Nur Swapnil — Academic Portfolio

A static academic portfolio styled after Aranya Saha’s al-folio website. It uses a white background, Roboto typography, blue links, a circular portrait, and separate About, Publications, Research, and Experience pages. No build step or framework is required.

## Preview

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/.

## Content

- `index.html`: biography, interests, education, contact, and Recent milestones.
- `publications/index.html`: publication bibliography.
- `research/index.html`: research interests, thesis, and all six projects.
- `experience/index.html`: education, professional experience, research collaborations, and honors.
- `assets/js/main.js`: paper, project, and milestone content; native navigation and theme controls.
- `assets/css/style.css`: shared typography, layout, and responsive styling.
- `assets/img/profile.png` and `assets/files/CV.pdf`: portrait and current academic CV.

Keep roles and publication status accurate. Publication entries use compact bibliographic formatting, with native expandable abstracts. Links from the previous single-page layout redirect to the corresponding pages.

Roboto is served locally under the SIL Open Font License in `assets/fonts/OFL.txt`. Theme preference is stored locally in the browser. There are no analytics or external runtime dependencies.

## Deployment

GitHub Pages serves `main` from the repository root. All internal links are relative and work under `/portfolio/`.
