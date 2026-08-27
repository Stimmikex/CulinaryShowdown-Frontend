const steps = [
  { n: '01', title: 'Pick a side', text: 'Choose Hot Meals or Frozen Goods and represent your kitchen.' },
  { n: '02', title: 'Grab the order', text: 'Move fast, coordinate with your team and keep the counter alive.' },
  { n: '03', title: 'Cause chaos', text: 'Use the arena, gadgets and rivalry to stop the opposing kitchen.' }
];

export default function HowToPlay() {
  return (
    <section id="game" className="section cream-section">
      <div className="shell">
        <div className="section-heading">
          <span className="kicker">How it plays</span>
          <h2>Simple rules. Loud kitchen.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.n}>
              <span className="step-number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
