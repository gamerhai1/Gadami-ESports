import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gadami Esports • Free Fire Tournaments',
  description: 'Gadami Esports – Competitive Free Fire tournaments, scrims & customs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-body text-gray-100">
        <div className="min-h-screen flex flex-col">
          <header className="header">
            <div className="header-inner">
              <a href="/" className="brand">
                <span className="brand-logo">GE</span>
                <div className="brand-text">
                  <div className="brand-title">Gadami Esports</div>
                  <div className="brand-subtitle">
                    Free Fire Tournaments • India
                  </div>
                </div>
              </a>
              <nav className="nav">
                <a href="/tournaments" className="nav-link">
                  Tournaments
                </a>
                <a href="/results" className="nav-link">
                  Results
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  className="nav-cta"
                >
                  Join Discord
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="footer">
            <div className="footer-inner">
              <span>© {year} Gadami Esports</span>
              <span>Free Fire customs • Scrims • Tournaments</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
