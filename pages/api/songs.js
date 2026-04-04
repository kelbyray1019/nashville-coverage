import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const KEY = 'nashville_coverage_songs';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await redis.get(KEY);
    const songs = Array.isArray(data) ? data : [];
    return res.status(200).json(songs);
  }

  if (req.method === 'POST') {
    const songs = req.body;
    if (!Array.isArray(songs)) {
      return res.status(400).json({ error: 'Expected an array' });
    }
    await redis.set(KEY, songs);
    return res.status(200).json({ ok: true });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: 'Method not allowed' });
}
