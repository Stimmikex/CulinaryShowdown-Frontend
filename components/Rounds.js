import Image from 'next/image';

export default function Rounds() {
  return (
    <section id="rounds" className="section rounds-section">
      <div className="shell rounds-layout">
        <div className="rounds-copy">
          <span className="kicker">Rounds</span>
          <h2>Every round changes the recipe.</h2>
          <p>The original round-board styling becomes the centerpiece here: bold score blocks, team colors and a timer that keeps the match feeling competitive.</p>
          <div className="round-chips"><span>Score</span><span>Timer</span><span>Rounds</span><span>Team color</span></div>
        </div>
        <div className="round-board-wrap">
          <Image src="/assets/round-board.png" alt="Culinary Showdown round board" width={700} height={574} />
        </div>
      </div>
    </section>
  );
}
