CREATE TABLE IF NOT EXISTS game_downloads (
  id BIGSERIAL PRIMARY KEY,
  platform VARCHAR(30) NOT NULL DEFAULT 'unknown',
  source VARCHAR(30) NOT NULL DEFAULT 'website',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS game_downloads_created_at_idx
ON game_downloads (created_at DESC);
