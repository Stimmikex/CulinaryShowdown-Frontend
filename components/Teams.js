import Image from 'next/image';

export default function Teams() {
  return (
    <section id="teams" className="section teams-section">
      <div className="shell">
        <div className="section-heading centered">
          <span className="kicker">Choose your kitchen</span>
          <h2>Hot Meals <em>vs</em> Frozen Goods</h2>
        </div>
        <div className="team-grid">
          <article className="team-card hot-team">
            <div className="team-copy">
              <Image src="/assets/hot-logo.png" alt="Hot Meals logo" width={210} height={131} />
              <h3>Serve it hot.</h3>
              <p>Fast, direct and a little reckless. Hot Meals wants the kitchen moving.</p>
            </div>
            <div className="team-art">
              <Image src="/assets/salamander.png" alt="Hot Meals salamander" width={240} height={347} />
              <Image className="team-prop" src="/assets/furnace.png" alt="Furnace" width={260} height={185} />
            </div>
          </article>

          <article className="team-card frozen-team">
            <div className="team-copy">
              <Image src="/assets/frozen-logo.png" alt="Frozen Goods logo" width={190} height={198} />
              <h3>Keep it cool.</h3>
              <p>Patient, precise and hard to rattle. Frozen Goods controls the flow.</p>
            </div>
            <div className="team-art">
              <Image src="/assets/penguin.png" alt="Frozen Goods penguin" width={270} height={333} />
              <Image className="team-prop" src="/assets/freezer.png" alt="Freezer" width={260} height={185} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
