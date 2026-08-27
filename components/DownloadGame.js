'use client';

import { useEffect, useState } from 'react';

const platforms = [
  { key: 'windows', label: 'Windows', detail: '64-bit build', icon: '▦' },
  { key: 'linux', label: 'Linux', detail: '64-bit build', icon: '◆' },
  { key: 'macos', label: 'macOS', detail: 'Universal build', icon: '●' },
];

const number = new Intl.NumberFormat('en-US');

export default function DownloadGame() {
  const [stats, setStats] = useState(null);
  const [statsError, setStatsError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch('/api/downloads/stats', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load stats');
        return response.json();
      })
      .then((data) => {
        if (active) setStats(data);
      })
      .catch(() => {
        if (active) setStatsError(true);
      });

    return () => { active = false; };
  }, []);

  return (
    <section className="download-section" id="download">
      <div className="download-dots download-dots-blue" aria-hidden="true" />
      <div className="download-dots download-dots-orange" aria-hidden="true" />

      <div className="shell download-shell">
        <div className="download-copy">
          <span className="eyebrow">Ready to enter the kitchen?</span>
          <h2>Download Culinary Showdown</h2>
          <p>
            Pick your platform, grab your crew and start the showdown. The game is hosted on
            itch.io while this page keeps track of download starts from the official website.
          </p>

          <div className="download-stats" aria-live="polite">
            <div className="download-total">
              <strong>{stats ? number.format(stats.total) : statsError ? '—' : '…'}</strong>
              <span>downloads</span>
            </div>
            <div className="download-week">
              <strong>{stats ? number.format(stats.last_7_days) : statsError ? '—' : '…'}</strong>
              <span>in the last 7 days</span>
            </div>
          </div>
        </div>

        <div className="download-panel">
          <div className="download-panel-top">
            <img src="/assets/logo.png" alt="Culinary Showdown" />
            <div>
              <strong>Choose your build</strong>
              <span>Hosted securely on itch.io</span>
            </div>
          </div>

          <div className="download-platforms">
            {platforms.map((platform) => (
              <a
                className={`download-platform download-platform-${platform.key}`}
                href={`/api/downloads/${platform.key}`}
                key={platform.key}
              >
                <span className="download-platform-icon" aria-hidden="true">{platform.icon}</span>
                <span className="download-platform-text">
                  <strong>Download for {platform.label}</strong>
                  <small>{platform.detail}</small>
                </span>
                <span className="download-arrow" aria-hidden="true">↓</span>
              </a>
            ))}
          </div>

          <p className="download-note">
            Download count records button clicks from this website. It does not represent unique
            installations or completed installs.
          </p>
        </div>
      </div>
    </section>
  );
}
