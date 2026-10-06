# Ismam Nur Swapnil — Portfolio

A responsive academic portfolio for research, publications, projects, and experience. It is a static GitHub Pages site with no build step, framework, or external runtime dependency.

## Preview locally

Open `index.html` directly, or serve this folder so the CV and image load over HTTP:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Update content

- Profile, research topics, experience, contact details, and section order are in `index.html`.
- Publications, projects, and Recent milestones are in the `DATA` object at the top of `assets/js/main.js`.
- The profile photo is `assets/img/photo.jpg`; the CV is `assets/files/CV.pdf`.
- Colors, typography, spacing, and responsive layouts are in `assets/css/style.css`.

Publication abstracts use the browser’s built-in disclosure control. The page has no analytics, visitor counter, or client-side storage.

The page leads with papers, documented personal contributions, and evaluation context. Research directions distinguish future questions from completed work. Collaborator affiliations describe the collaborators, rather than implying institutional employment. Earlier milestones and applied projects remain available in native disclosure controls.

Use the current CV for personal roles and contributions, and the linked papers for methods and results. Keep preprint and review status explicit. Add paper implementation links only after confirming that the repository documents the corresponding method; related prototypes are listed separately under software.

## Deploy

Push the repository to GitHub and enable Pages for the `main` branch, using the repository root as the publishing source.
