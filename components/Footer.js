import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <Image src="/assets/logo.png" alt="Culinary Showdown" width={120} height={69} />
        <p>Concept landing page built from the provided game UI assets.</p>
        <div className="footer-links"><a href="#home">Top</a><a href="#teams">Teams</a><a href="#rounds">Rounds</a></div>
      </div>
    </footer>
  );
}
