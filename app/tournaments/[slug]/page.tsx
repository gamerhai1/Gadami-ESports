import { notFound } from 'next/navigation';
import { tournaments } from '../../../lib/data';

type Props = {
  params: { slug: string };
};

export default function TournamentDetailPage({ params }: Props) {
  const tournament = tournaments.find((t) => t.slug === params.slug);

  if (!tournament) {
    return notFound();
  }

  const dateFormatted = new Date(tournament.date).toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return (
    <section className="section">
      <div className="section-inner card">
        <div className="badge-row">
          <span className="badge badge--ff">Free Fire</span>
          <span className="badge badge--mode">{tournament.mapPool}</span>
          <span className="badge badge--region">India</span>
        </div>

        <h1 style={{ fontSize: '1.4rem', marginTop: '0.5rem' }}>
          {tournament.title}
        </h1>

        <p
          style={{
            fontSize: '0.9rem',
            color: '#d1d5db',
            marginTop: '0.4rem',
          }}
        >
          {tournament.description}
        </p>

        <div className="chip-row" style={{ marginTop: '0.8rem' }}>
          <span className="chip">Date: {dateFormatted}</span>
          <span className="chip">Entry: {tournament.entryFee}</span>
          <span className="chip">Prize: {tournament.prizePool}</span>
          <span className="chip">
            Type: {tournament.type} • {tournament.maxTeams} squads
          </span>
          <span className="chip">{tournament.roomMode}</span>
        </div>

        <div
          style={{
            marginTop: '1.2rem',
            display: 'grid',
            gap: '1.1rem',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
          }}
        >
          <div>
            <div className="section-title">Rules</div>
            <ul className="clean">
              {tournament.rules.map((r, idx) => (
                <li key={idx}>• {r}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-title">Perks</div>
            <ul className="clean">
              {tournament.perks.map((p, idx) => (
                <li key={idx}>✓ {p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '1.3rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.7rem',
          }}
        >
          <a href="https://forms.gle" target="_blank">
            <button className="btn-primary">
              Register Squad
              <span>⚔️</span>
            </button>
          </a>
          <a href="https://wa.me" target="_blank">
            <button className="btn-ghost">
              Join WhatsApp / get room details
            </button>
          </a>
        </div>

        <p
          style={{
            fontSize: '0.72rem',
            color: '#9ca3af',
            marginTop: '0.7rem',
          }}
        >
          * Room ID & password will be shared 10–15 minutes before match start
          in WhatsApp / Discord lobby.
        </p>
      </div>
    </section>
  );
}
