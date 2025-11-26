import { tournaments } from '../../lib/data';

const statusLabel: Record<string, string> = {
  upcoming: 'Upcoming',
  live: 'Live Now',
  completed: 'Completed',
};

export default function TournamentsPage() {
  const sorted = [...tournaments].sort((a, b) =>
    a.status === b.status
      ? new Date(a.date).getTime() - new Date(b.date).getTime()
      : a.status === 'live'
      ? -1
      : a.status === 'upcoming' && b.status === 'completed'
      ? -1
      : 1
  );

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-title">Free Fire tournaments</div>
        <div className="section-subtitle">
          All customs, scrims & cups hosted under Gadami Esports.
        </div>

        <div className="card-grid">
          {sorted.map((t) => (
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
                <span className="badge">
                  {statusLabel[t.status] ?? t.status}
                </span>
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
                  {t.type} • {t.maxTeams} squads
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.8rem',
                  marginTop: '0.6rem',
                  color: '#e5e7eb',
                }}
              >
                {t.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
