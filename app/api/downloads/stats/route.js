import { NextResponse } from 'next/server';
import { getDownloadStats } from '../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const stats = await getDownloadStats();
    return NextResponse.json(stats, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('Could not read download stats:', error);
    return NextResponse.json(
      { error: 'Download statistics are temporarily unavailable.' },
      { status: 500 }
    );
  }
}
