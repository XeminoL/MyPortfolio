# Portfolio — Dang Thai Khang

A bilingual (EN / VI) personal website. Tech / neon-dark aesthetic, built from scratch
with plain HTML, CSS and JavaScript — no frameworks, no build server, no runtime
dependencies. Every mark on the page is drawn in CSS or canvas; there are no emoji.

**Live:** https://xeminol.github.io/MyPortfolio/

## Features

- **System boot intro** — a hand-drawn canvas HUD (concentric rings, radial ticks,
  rotating reticles, radar sweep, live telemetry) that charges 0→100% and dissolves.
  Skippable, and it only plays once per browser session.
- **Animated hero** — an interactive particle network (it reacts to the cursor and
  pauses when off-screen) plus a typing effect cycling through what I build.
- **Sections** — About (with a quick-facts strip and a short "how I work"), Stack,
  Timeline + Now, Projects, Contact.
- **Project detail pages** — each project opens its own page (hash route) with an
  at-a-glance list, a self-drawn flow diagram, and the story told technically.
- **3D globe** — a rotating wireframe Earth (graticule + dotted continents), drawn from
  scratch on canvas. Drag to spin it. Open it from the command palette.
- **Spotify "Now Playing"** — a popup showing the track I'm really listening to, via a
  tiny serverless function (see [`SPOTIFY_SETUP.md`](SPOTIFY_SETUP.md)).
- **Command palette** — <kbd>Ctrl / ⌘ + K</kbd> to jump anywhere, open the globe, or
  switch language.
- **Live status strip** — wall clock + session uptime. Cursor spotlight on desktop.
- **Bilingual** EN ⇄ VI, remembered across visits.
- **Easter eggs** — type `matrix`, enter the Konami code, or click the glitchy footer
  glyph to toggle a matrix rain.
- **Accessible & responsive** — keyboard support throughout, visible focus rings,
  Escape closes any overlay, and everything respects `prefers-reduced-motion`.

## Files

| File                 | Purpose                                                        |
|----------------------|----------------------------------------------------------------|
| `data.js`            | **All content** (bilingual) + config (GitHub user, Spotify)    |
| `app.js`             | Rendering & all interaction                                    |
| `style.css`          | Styling and animations                                         |
| `index.src.html`     | Page skeleton + mount points (the template)                    |
| `build.js`           | Bundles the four above into a self-contained `index.html`      |
| `index.html`         | **Generated** — open directly in a browser (double-click)      |
| `og.svg`             | Social-card image (Open Graph / Twitter)                       |
| `api/now-playing.js` | Serverless function for the Spotify widget (optional)          |
| `SPOTIFY_SETUP.md`   | 5-minute guide to wire up real Spotify "now playing"           |

The source is split for clean editing; `index.html` is the built artifact and is what
GitHub Pages serves.

## Run / edit

Open `index.html` in any browser — it is fully self-contained, no server needed.

After editing `data.js`, `app.js`, `style.css` or `index.src.html`, rebuild:

```bash
node build.js     # regenerates index.html
```

Tip: append `?intro=0` to the URL to skip the boot intro while developing.

---

© 2026 Dang Thai Khang · [github.com/XeminoL](https://github.com/XeminoL)
