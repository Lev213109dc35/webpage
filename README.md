# Fehérvári Levente – CV website

My personal CV and portfolio site, in Hungarian (default) and English..
Plain HTML, CSS and JavaScript: no build step and nothing to install.

## Folders

```
index.html            page structure
css/styles.css        design
js/content.js         ALL the text on the site, in Hungarian and English
js/works.js           my projects and uploaded works
js/main.js            language switch, menu, rendering (rarely needs editing)
assets/cv/            CV PDFs
works/                files for my projects (PDF, Excel, R scripts, images…)
```

## Common changes

**Edit text:** open `js/content.js`. Each piece of text has a `hu` and an `en` version.

**Add a project or piece of work:**
1. Copy the file into `works/`.
2. Open `js/works.js`, copy the example entry, remove the `//` marks and fill it in.
   `file` can be the file (`"works/my-analysis.pdf"`) or a link (for example a GitHub repository).
3. Commit and push. The "Munkáim / Work" section and its menu link appear automatically
   once the list has at least one entry.

**Add a Hungarian CV:** put the PDF in `assets/cv/` (for example
`Levente_Fehervari_CV_HU.pdf`) and set `cv.hu` in `js/content.js` to its path.
Until then, the Hungarian button downloads the English CV and says "(angol)".

## Preview on your computer

Open `index.html` in a browser, or for a closer match to the live site run
`python -m http.server` in this folder and go to http://localhost:8000.

## Publish with GitHub Pages (free)

1. Create a new repository on GitHub (for example `cv`), and push this folder to it.
2. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`, then **Save**.
3. After a minute or two the site is live at `https://<your-username>.github.io/cv/`.
   Every later push to `main` updates it automatically.
