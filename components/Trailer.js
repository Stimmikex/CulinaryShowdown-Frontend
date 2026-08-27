export default function Trailer() {
  return (
    <section id="trailer" className="section trailer-section">
      <div className="shell trailer-shell">
        <div className="section-heading centered trailer-heading">
          <span className="kicker">Watch the showdown</span>
          <h2>Official <em>Trailer</em></h2>
          <p>See Hot Meals and Frozen Goods collide in the kitchen.</p>
        </div>

        <div className="trailer-stage">
          <div className="trailer-badge trailer-badge-blue">Frozen Goods</div>
          <div className="trailer-badge trailer-badge-orange">Hot Meals</div>
          <div className="trailer-frame">
            <video
              className="trailer-video"
              controls
              preload="metadata"
              playsInline
              poster="/media/trailer-poster.jpg"
            >
              <source src="/media/final_3.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
