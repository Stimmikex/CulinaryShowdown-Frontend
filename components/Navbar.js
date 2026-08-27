import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="nav shell">
      <a className="brand" href="#home" aria-label="Culinary Showdown home">
        <Image src="/assets/logo.png" alt="Culinary Showdown" width={160} height={92} priority />
      </a>
      <nav aria-label="Primary navigation">
        <a href="#game">Game</a>
        <a href="#teams">Teams</a>
        <a href="#rounds">Rounds</a>
        <a href="#media">Media</a>
        <a href="#download">Download</a>
      </nav>
      <a className="button button-yellow nav-cta" href="#download">Download</a>
    </header>
  );
}
