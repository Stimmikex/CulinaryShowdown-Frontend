# Culinary Showdown — Next.js landing page

A responsive one-page Next.js concept built directly from the exported Culinary Showdown assets provided in `Screens.zip`.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Notes

- Original provided assets are stored under `public/assets` with web-friendly filenames.
- Replace the placeholder `Wishlist on Steam` href in `app/page.js` when the Steam page is available.
- All layout and styling lives in `app/globals.css` for fast iteration.

## Trailer component

The landing page includes `components/Trailer.js`. The uploaded trailer is served from `public/media/final_3.mp4` with a generated poster at `public/media/trailer-poster.jpg`. The Hero's “Watch trailer” button scrolls directly to this section.

## Download counter + itch.io

The `DownloadGame` component uses PostgreSQL for download-start analytics and redirects players to itch.io for the actual game files.

1. Copy `.env.example` to `.env.local` (or configure the same variables on the VPS).
2. Set `DATABASE_URL` to the PostgreSQL database connection.
3. Set `ITCHIO_GAME_URL` to your public itch.io game URL. Optional platform-specific URLs override it.
4. Install dependencies and start/build as normal.

The app creates `game_downloads` automatically if the database user has CREATE TABLE permission. You can also run `database/downloads.sql` manually.

Endpoints:
- `GET /api/downloads/stats` returns total/platform/7-day counts.
- `GET /api/downloads/windows` records a download start and redirects to itch.io.
- The same works for `/linux` and `/macos`.

The public number is a count of download button clicks from the website, not unique installs.
