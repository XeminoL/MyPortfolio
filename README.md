# Portfolio — Dang Thai Khang

My personal site. Bilingual (EN / VI), tech-dark look, plain HTML / CSS / JS.
No framework and no build server; everything ships in one self-contained
`index.html`. Type is set in a system sans, with monospace kept for code,
labels and tags.

## What's on it

- A hero, About, Stack, a short Timeline, Projects, and Contact.
- Each project opens its own page (hash route) with a self-drawn flow diagram
  and the story told technically.
- A background scene built from CSS only — drifting aurora, a masked grid, and
  a bit of cursor parallax. A one-second boot intro plays on load.
- A `Ctrl / ⌘ + K` command palette, EN ⇄ VI, and a small "extras" panel with a
  3D globe, matrix rain, and an amber-CRT theme.
- An optional Spotify "now playing" popup (see [`SPOTIFY_SETUP.md`](SPOTIFY_SETUP.md)).

Everything respects `prefers-reduced-motion`.

## Files

| File                 | Purpose                                                     |
|----------------------|-------------------------------------------------------------|
| `data.js`            | All content (bilingual) + config (GitHub user, Spotify)     |
| `app.js`             | Rendering and interaction                                   |
| `style.css`          | Styling and animations                                      |
| `index.src.html`     | Page skeleton + mount points (the template)                 |
| `build.js`           | Bundles the four above into `index.html`                    |
| `index.html`         | Generated — this is what GitHub Pages serves                |
| `api/now-playing.js` | Serverless function for the Spotify widget (optional)       |
| `SPOTIFY_SETUP.md`   | How to wire up real Spotify "now playing"                   |

## Run / edit

Open `index.html` in any browser — it's self-contained, no server needed.

After editing `data.js`, `app.js`, `style.css` or `index.src.html`, rebuild:

```bash
node build.js
```

Append `?intro=0` to the URL to skip the boot intro while developing.

---

© 2026 Dang Thai Khang · [github.com/XeminoL](https://github.com/XeminoL)
