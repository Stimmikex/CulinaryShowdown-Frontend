import { NextResponse } from 'next/server';
import { ensureDownloadTable, pool } from '../../../../lib/db';

const PLATFORM_URLS = {
  windows: process.env.ITCHIO_WINDOWS_URL || process.env.ITCHIO_GAME_URL,
  linux: process.env.ITCHIO_LINUX_URL || process.env.ITCHIO_GAME_URL,
  macos: process.env.ITCHIO_MACOS_URL || process.env.ITCHIO_GAME_URL,
};

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { platform } = await params;
  const normalizedPlatform = String(platform || '').toLowerCase();
  const destination = PLATFORM_URLS[normalizedPlatform];

  if (!Object.hasOwn(PLATFORM_URLS, normalizedPlatform)) {
    return NextResponse.json({ error: 'Unsupported platform.' }, { status: 404 });
  }

  if (!destination) {
    return NextResponse.json(
      { error: 'The itch.io download URL has not been configured yet.' },
      { status: 503 }
    );
  }

  try {
    await ensureDownloadTable();
    await pool.query(
      'INSERT INTO game_downloads (platform, source) VALUES ($1, $2)',
      [normalizedPlatform, 'website']
    );
  } catch (error) {
    console.error('Could not record download:', error);
    // Do not prevent a player from getting the game if analytics is unavailable.
  }

  return NextResponse.redirect(destination, 302);
}
