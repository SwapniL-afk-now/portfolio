# Interactive PhD Portfolio

A modern, interactive personal portfolio for PhD candidates — single-page, no build step, no dependencies. Just open `index.html` and you're live.

## Features

- **Custom animated cursor** with smooth lerp following
- **Live constellation background** that responds to mouse movement
- **Typewriter effect** cycling through roles
- **Animated number counters** for stats
- **3D tilt cards** on the research interests
- **Filterable publications** (by year, first author, preprint)
- **Scroll-spy navbar** with progress bar
- **Theme toggle** (light/dark) with `localStorage` persistence
- **Reveal-on-scroll** animations
- **Orbiting tech tags** in the hero
- **Fully responsive** down to mobile
- **No build tools, no frameworks** — pure HTML/CSS/JS

## Quick Start

```bash
# Option 1: open directly
open index.html

# Option 2: serve locally (recommended for fonts)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customization

All content lives in **one place**: the `DATA` object at the top of `assets/js/main.js` (lines ~1–90).

### Edit your identity
```js
const DATA = {
  name: 'Your Name',                  // appears in hero, nav, footer
  typed: ['PhD Candidate', ...],      // rotating subtitle words
  ...
};
```

### Edit publications
Add or modify entries in `DATA.publications`:
```js
{
  title: 'Paper Title',
  authors: ['<b>Your Name</b>', 'Co-Author'],
  venue: 'NeurIPS 2025',
  year: 2025,
  tags: ['first', '2025'],            // used by filter chips
  links: { arxiv: '#', code: '#', pdf: '#', site: '#' },
  venueType: 'conference',            // 'conference' | 'preprint' | 'workshop' | 'journal'
  thumb: 'NeurIPS'                    // text shown in left thumb box
}
```

Filter chips use these tag values: `all`, `first`, `2025`, `2024`, `2023`, `preprint`. Add more year chips in `index.html` under `#pubFilters`.

### Edit projects
```js
{
  title: 'project-name',
  desc: 'What it does in one sentence.',
  tags: ['Python', 'PyTorch'],
  year: '2025',
  links: { code: '#', docs: '#', paper: '#', site: '#' }
}
```

### Edit timeline / news
```js
news: [
  { date: 'Nov 2025', text: '<strong>Joined</strong> the lab.' },
  ...
]
```

### Edit the About copy
Open `index.html` and find `<section id="about">`. Edit the three paragraphs directly.

### Edit the email and social links
- Email: `<a href="mailto:...">` in the `#contact` section
- Social links: search for `hero-social` and `contact-socials` in `index.html`

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Settings → Pages → Source: `main` branch, root
3. Your site is live at `https://<user>.github.io/<repo>/`

For a personal site (no repo name in URL), name the repo `<user>.github.io` and put these files at the repo root.

## File Structure

```
portfolio/
├── index.html              # Single-page markup
├── assets/
│   ├── css/style.css       # All styles + theme variables
│   ├── js/main.js          # Data + interactivity
│   └── img/                # (Optional) your photo
└── README.md
```

## Adding a profile photo

Replace the `<div class="photo-placeholder">` in the `#about` section with:
```html
<img src="assets/img/your-photo.jpg" alt="Your Name" />
```
Recommended: square, 600×600px, JPG/PNG/WEBP.

## Color customization

Edit the CSS variables at the top of `assets/css/style.css`:
```css
:root {
  --accent: #6d4cff;     /* primary purple */
  --accent-2: #00d4a8;   /* secondary teal */
  --accent-3: #ff7a59;   /* warm orange */
}
```
The dark-mode variant is defined under `[data-theme="dark"]`.

## Tech

- **Fonts**: Inter, Space Grotesk, JetBrains Mono (Google Fonts)
- **Icons**: Font Awesome 6, Academicons
- **No JavaScript frameworks**, no build step
- **Vanilla canvas** for the constellation background
- **CSS `color-mix()`** for theme-aware translucent backgrounds

## Browser Support

Modern browsers (Chrome/Edge/Safari/Firefox, 2022+). Uses `color-mix()`, `backdrop-filter`, and `IntersectionObserver`.

## License

MIT — do whatever you want with it.
