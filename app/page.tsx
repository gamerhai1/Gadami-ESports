import { tournaments } from '../lib/data';

export default function HomePage() {
  const featured = tournaments[0];
  const upcoming = tournaments.filter((t) => t.status === 'upcoming');

  return (
    <div>
      <section className="section">
        <div className="section-inner hero-layout">
          <div>
            <div className="hero-kicker">
              <span className="hero-kicker-dot" />
              Free Fire • Gadami Esports
            </div>
            <h1 className="hero-title">
              Competitive <span className="hero-highlight">Free Fire</span>{' '}
              tournaments for real grinders.
            </h1>
            <p className="hero-subtitle">
              Custom rooms, daily scrims, points table & fair play. No bakwaas,
              sirf genuine competitive Free Fire action for Indian players.
            </p>
            <div className="hero-actions">
              <a href="/tournaments">
                <button className="btn-primary">
                  View Tournaments
                  <span>🔥</span>
                </button>
              </a>
              <a href="/results">
                <button className="btn-ghost">
                  Past Winners
                  <span>🏆</span>
                </button>
              </a>
            </div>
          </div>

          <div>
            <div className="card">
              <div className="card-header">
                <div>
                  <div className="card-title">Featured Tournament</div>
                  <div className="card-meta">{featured.title}</div>
                </div>
                <div className="badge">Free Fire</div>
              </div>

              <div className="badge-row">
                <span className="badge badge--ff">FF • Squad</span>
                <span className="badge badge--mode">{featured.mapPool}</span>
                <span className="badge badge--region">India Only</span>
              </div>

              <div className="chip-row">
                <span className="chip">Entry: {featured.entryFee}</span>
                <span className="chip">Prize: {featured.prizePool}</span>
                <span className="chip">
                  Slots: {featured.maxTeams} squads
                </span>
              </div>

              <p
                style={{
                  fontSize: '0.8rem',
                  marginTop: '0.7rem',
                  color: '#e5e7eb',
                }}
              >
                {featured.description}
              </p>

              <a href={`/tournaments/${featured.slug}`}>
                <button
                  className="btn-ghost"
                  style={{ marginTop: '0.8rem', width: '100%' }}
                >
                  View details & rules →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-title">Upcoming Free Fire tournaments</div>
          <div className="section-subtitle">
            Register your squad, join custom rooms, and grind like a pro.
          </div>

          <div className="card-grid">
            {upcoming.map((t) => (
              <a key={t.slug} href={`/tournaments/${t.slug}`} className="card">
                <div className="card-header">
                  <div>
                    <div className="card-title">{t.title}</div>
                    <div className="card-meta">
                      {new Date(t.date).toLocaleString('en-IN', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </div>
                  </div>
                </div>
                <div className="badge-row">
                  <span className="badge badge--ff">Free Fire</span>
                  <span className="badge badge--mode">{t.mapPool}</span>
                  <span className="badge badge--region">India</span>
                </div>
                <div className="chip-row">
                  <span className="chip">Entry: {t.entryFee}</span>
                  <span className="chip">Prize: {t.prizePool}</span>
                  <span className="chip">
                    Type: {t.type} • {t.maxTeams} squads
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
