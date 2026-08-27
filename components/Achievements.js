import Image from 'next/image';

const badges = [
  ['/assets/badge-collectionist.png', 'Collectionist'],
  ['/assets/badge-creation.png', 'Creation'],
  ['/assets/badge-foodslinger.png', 'Food Slinger'],
  ['/assets/badge-painlover.png', 'Pain Lover']
];

export default function Achievements() {
  return (
    <section className="section achievement-section">
      <div className="shell achievement-grid">
        <div>
          <span className="kicker">Achievements</span>
          <h2>Collect a little kitchen glory.</h2>
        </div>
        <div className="badges">
          {badges.map(([src, label]) => (
            <div className="badge" key={label}>
              <Image src={src} alt={label} width={210} height={84} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
