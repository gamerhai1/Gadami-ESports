import { results } from '../../lib/data';

export default function ResultsPage() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-title">Past winners</div>
        <div className="section-subtitle">
          Gadami Esports Free Fire tournaments – winners & top fraggers.
        </div>

        {results.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
            Abhi tak koi completed tournament nahi. Jald hi results yahan
            dikhne lagenge. 👀
          </p>
        ) : (
          <div className="card-grid">
            {results.map((r) => (
              <div key={r.tournamentSlug} className="card">
                <div className="card-header">
                  <div>
                    <div className="card-title">{r.tournamentTitle}</div>
                    <div className="card-meta">
                      {new Date(r.date).toLocaleDateString('en-IN', {
                        dateStyle: 'medium',
                      })}
                    </div>
                  </div>
                  <span className="badge">Completed</span>
                </div>

                <ul className="clean" style={{ marginTop: '0.5rem' }}>
                  <li>🏆 Winner: {r.winnerTeam}</li>
                  <li>🥈 Runner-up: {r.runnerUpTeam}</li>
                  <li>🔥 Top fragger: {r.topFragger}</li>
                  <li>💰 Prize: {r.prizeGiven}</li>
                </ul>

                {r.notes && (
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: '#d1d5db',
                      marginTop: '0.5rem',
                    }}
                  >
                    {r.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
