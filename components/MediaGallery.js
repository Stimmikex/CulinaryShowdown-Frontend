import Image from 'next/image';

export default function MediaGallery() {
  return (
    <section id="media" className="section media-section">
      <div className="shell">
        <div className="section-heading">
          <span className="kicker">From the game</span>
          <h2>The UI is part of the personality.</h2>
        </div>
        <div className="media-grid">
          <figure className="media-main">
            <Image src="/assets/main-screen.png" alt="Main menu from Culinary Showdown" fill sizes="(max-width: 900px) 100vw, 65vw" />
            <figcaption>Main menu</figcaption>
          </figure>
          <div className="media-stack">
            <figure>
              <Image src="/assets/gameplay-controls.png" alt="Gameplay controls" fill sizes="35vw" />
              <figcaption>Controls</figcaption>
            </figure>
            <figure>
              <Image src="/assets/pause-menu.png" alt="Pause menu" fill sizes="35vw" />
              <figcaption>Pause UI</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
