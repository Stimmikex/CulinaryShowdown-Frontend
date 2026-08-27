import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-dots" />
      <div className="shell hero-grid">
        <div className="character-side frozen-side">
          <span className="micro-label">Frozen Goods</span>
          <Image className="hero-character penguin" src="/assets/penguin.png" alt="Frozen Goods penguin" width={363} height={448} priority />
        </div>

        <div className="hero-copy">
          <span className="eyebrow">One kitchen. Two teams. Zero chill.</span>
          <h1>Culinary<br /><span>Showdown</span></h1>
          <p>A fast, playful team battle where hot food, frozen goods and kitchen chaos collide.</p>
          <div className="versus-pill" aria-label="Frozen Goods versus Hot Meals">
            <span>Frozen Goods</span><b>VS</b><span>Hot Meals</span>
          </div>
          <div className="hero-actions">
            <a className="button button-blue" href="#trailer">Watch trailer</a>
            <a className="button button-yellow" href="#wishlist">Wishlist</a>
          </div>
        </div>

        <div className="character-side hot-side">
          <span className="micro-label">Hot Meals</span>
          <Image className="hero-character salamander" src="/assets/salamander.png" alt="Hot Meals salamander" width={299} height={432} priority />
        </div>
      </div>
    </section>
  );
}
