import Image from 'next/image';

export default function Wishlist() {
  return (
    <section id="wishlist" className="wishlist-section">
      <div className="shell wishlist-grid">
        <Image className="wish-character" src="/assets/penguin.png" alt="Penguin" width={190} height={234} />
        <div>
          <span className="kicker">Ready?</span>
          <h2>The kitchen is open.</h2>
          <p>Pick your side, grab your gear and get ready for Culinary Showdown.</p>
        </div>
        <a className="button button-dark" href="#">Wishlist on Steam</a>
        <Image className="wish-character" src="/assets/salamander.png" alt="Salamander" width={165} height={238} />
      </div>
    </section>
  );
}
