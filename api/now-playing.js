/* =====================================================================
   api/now-playing.js — Vercel serverless function (Node runtime).
   Returns the track Khang is currently playing on Spotify.

   Deploy: put this file at /api/now-playing.js in a Vercel project, set
   the 3 env vars below, and point data.js → SPOTIFY.endpoint at its URL.
   See SPOTIFY_SETUP.md for the full 5-minute walkthrough.

   Required environment variables (Vercel → Settings → Environment Variables):
     SPOTIFY_CLIENT_ID
     SPOTIFY_CLIENT_SECRET
     SPOTIFY_REFRESH_TOKEN
   ===================================================================== */

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';

async function getAccessToken() {
  const basic = Buffer
    .from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)
    .toString('base64');
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });
  return res.json();
}

export default async function handler(req, res) {
  // allow the static site to call this from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=30');

  try {
    const { access_token: accessToken } = await getAccessToken();
    const np = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (np.status === 204 || np.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await np.json();
    if (!song || !song.item) return res.status(200).json({ isPlaying: false });

    return res.status(200).json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((a) => a.name).join(', '),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images?.[0]?.url || '',
      songUrl: song.item.external_urls?.spotify || '',
    });
  } catch (err) {
    return res.status(200).json({ isPlaying: false });
  }
}
