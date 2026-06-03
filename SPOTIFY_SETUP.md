# 🎵 Spotify "Now Playing" — 5-minute setup

The portfolio can show the song you're **actually listening to** on Spotify, live.
A static site can't talk to Spotify directly (it needs a secret token that must be
refreshed), so we use a tiny free serverless function. Here's the whole flow.

> Until you finish this, the widget simply hides itself — the site works fine without it.

---

## 1. Create a Spotify app (2 min)

1. Go to <https://developer.spotify.com/dashboard> → **Create app**.
2. Name it anything (e.g. "Portfolio Now Playing").
3. **Redirect URI:** add `http://localhost:3000` (we only use it once, below).
4. Save. Copy the **Client ID** and **Client Secret**.

## 2. Get a refresh token (2 min)

You authorize *once* and get a long-lived refresh token.

1. Open this URL in your browser (replace `CLIENT_ID`):

   ```
   https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing
   ```

2. Approve. You'll be redirected to `http://localhost:3000/?code=XXXX` — copy the `code`.
3. In a terminal, exchange it for tokens (replace the 3 capitalised parts):

   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code&code=THE_CODE&redirect_uri=http://localhost:3000&client_id=CLIENT_ID&client_secret=CLIENT_SECRET"
   ```

4. The JSON response has a `refresh_token` — copy it.

## 3. Deploy the function on Vercel (1 min)

1. Create a free account at <https://vercel.com> and **import** this repo (or just the
   `api/` folder in any Vercel project).
2. In **Settings → Environment Variables**, add:

   | Name                    | Value                |
   |-------------------------|----------------------|
   | `SPOTIFY_CLIENT_ID`     | your client id       |
   | `SPOTIFY_CLIENT_SECRET` | your client secret   |
   | `SPOTIFY_REFRESH_TOKEN` | the refresh token    |

3. Deploy. Your endpoint is `https://YOUR-APP.vercel.app/api/now-playing`.
   Open it in a browser — you should see `{"isPlaying":...}`.

## 4. Point the portfolio at it (10 sec)

In [`data.js`](data.js), set:

```js
export const SPOTIFY = {
  endpoint: 'https://YOUR-APP.vercel.app/api/now-playing',
};
```

Then rebuild:

```bash
node build.js
```

Done — play a song on Spotify and refresh the portfolio. 🎧

---

**Cloudflare Workers** works too if you prefer — the logic in `api/now-playing.js`
ports over directly; just read the env vars from the Worker bindings.
