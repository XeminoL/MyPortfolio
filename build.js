/* =====================================================================
   build.js — bundle the source into a single self-contained index.html
   that runs from file:// (double-click), no server needed.

   Source of truth (edit these):
     index.src.html  — page skeleton + mount points
     style.css       — styling & animations
     data.js         — all content (bilingual)
     app.js          — rendering & interaction

   This inlines <link rel="stylesheet"> as <style>, and replaces the
   <script type="module"> with a plain inlined script (data.js + app.js,
   with import/export stripped) so file:// has no CORS issues.

   Usage:  node build.js
   ===================================================================== */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const read = (f) => fs.readFileSync(path.join(DIR, f), 'utf8');

const css = read('style.css');
const dataJS = read('data.js').replace(/^export\s+/gm, '');
const appJS = read('app.js')
  .replace(/import\s*\{[\s\S]*?\}\s*from\s*['"]\.\/data\.js['"];?/, '');

const bundledScript = `<script>\n/* === data.js === */\n${dataJS}\n/* === app.js === */\n${appJS}\n</script>`;
const styleTag = `<style>\n${css}\n</style>`;

// Use replacement *functions* so `$`/`$$` inside CSS/JS are inserted
// literally (string replacements treat `$$`, `$&`, etc. as special).
const html = read('index.src.html')
  .replace('<link rel="stylesheet" href="style.css">', () => styleTag)
  .replace('<script type="module" src="app.js"></script>', () => bundledScript);

fs.writeFileSync(path.join(DIR, 'index.html'), html);
console.log(`built index.html (${Buffer.byteLength(html)} bytes) — open it directly in a browser.`);
