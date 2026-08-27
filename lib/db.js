import { Pool } from 'pg';

const globalForDb = globalThis;

export const pool = globalForDb.__culinaryShowdownPool ?? new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' && process.env.PGSSL !== 'disable'
    ? { rejectUnauthorized: false }
    : false,
});

if (process.env.NODE_ENV !== 'production') {
  globalForDb.__culinaryShowdownPool = pool;
}

export async function ensureDownloadTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS game_downloads (
      id BIGSERIAL PRIMARY KEY,
      platform VARCHAR(30) NOT NULL DEFAULT 'unknown',
      source VARCHAR(30) NOT NULL DEFAULT 'website',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS game_downloads_created_at_idx
    ON game_downloads (created_at DESC)
  `);
}

export async function getDownloadStats() {
  await ensureDownloadTable();
  const result = await pool.query(`
    SELECT
      COUNT(*)::int AS total,
      COUNT(*) FILTER (WHERE platform = 'windows')::int AS windows,
      COUNT(*) FILTER (WHERE platform = 'linux')::int AS linux,
      COUNT(*) FILTER (WHERE platform = 'macos')::int AS macos,
      COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')::int AS last_7_days
    FROM game_downloads
  `);
  return result.rows[0];
}
