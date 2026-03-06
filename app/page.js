'use client'

import { useState, useEffect } from 'react'

const episodes = [
  {
    number: '001',
    subject: 'BEN JENKINS',
    location: 'CAIRO, EGYPT',
    tagline: 'Comedian. Stuck in Cairo with a pug.',
    status: 'COMING SOON',
    date: 'MARCH 2026',
    available: false,
  },
]

function TimecodeCounter() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000)
      const h = Math.floor(elapsed / 3600)
      const m = Math.floor((elapsed % 3600) / 60)
      const s = elapsed % 60
      setTime({ h, m, s })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <span className="timecode-live">
      {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
    </span>
  )
}

function GreenBar({ style, className = '' }) {
  return <div className={`green-bar ${className}`} style={style} />
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <main className={`site ${loaded ? 'loaded' : ''}`}>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-left">
          <span className="nav-rec">
            <span className="rec-dot" />
            REC
          </span>
          <TimecodeCounter />
        </div>
        <div className="nav-right">
          <a href="#episodes" className="nav-link">EPISODES</a>
          <a href="#about" className="nav-link">ABOUT</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <GreenBar className="hero-bar-top" />
        <div className="hero-content">
          <h1 className="hero-timecode">
            <span className="hero-24">24</span>
            <span className="hero-colon">:</span>
            <span className="hero-00">00</span>
            <span className="hero-colon">:</span>
            <span className="hero-00">00</span>
          </h1>
          <div className="hero-rule" />
          <p className="hero-word">HOURS</p>
          <p className="hero-tagline">One subject. One day. Twenty-four minutes.</p>
        </div>
        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* CONCEPT */}
      <section className="concept" id="about">
        <GreenBar className="section-bar" />
        <div className="concept-grid">
          <div className="concept-label">THE FORMAT</div>
          <div className="concept-text">
            <p>
              Twenty-four continuous hours with one person. Camera rolling from
              minute one. No script. No plan. No second takes.
            </p>
            <p>
              The first hour is performance. By hour six, the mask starts to
              slip. By hour fourteen, nobody has the energy to be anyone but
              themselves. By hour nineteen — three in the morning — the real
              conversation begins.
            </p>
            <p>
              Twenty-four hours of footage. Twenty-four minutes of truth.
            </p>
          </div>
        </div>
      </section>

      {/* EPISODES */}
      <section className="episodes" id="episodes">
        <GreenBar className="section-bar" />
        <div className="episodes-header">
          <span className="section-label">EPISODES</span>
        </div>
        <div className="episodes-list">
          {episodes.map((ep) => (
            <div
              key={ep.number}
              className={`episode-card ${ep.available ? 'available' : 'upcoming'}`}
            >
              <div className="episode-top">
                <span className="episode-number">EP{ep.number}</span>
                <span className={`episode-status ${ep.available ? 'live' : 'soon'}`}>
                  {ep.available ? (
                    <><span className="status-dot live" /> WATCH NOW</>
                  ) : (
                    <><span className="status-dot soon" /> {ep.status}</>
                  )}
                </span>
              </div>
              <GreenBar className="episode-bar" />
              <h3 className="episode-subject">{ep.subject}</h3>
              <p className="episode-location">{ep.location}</p>
              <p className="episode-tagline">{ep.tagline}</p>
              <div className="episode-bottom">
                <span className="episode-date">{ep.date}</span>
                {ep.available && (
                  <a href="#" className="episode-cta">
                    WATCH →
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder for future episodes */}
          <div className="episode-card placeholder">
            <div className="episode-top">
              <span className="episode-number">EP002</span>
              <span className="episode-status soon">
                <span className="status-dot soon" /> SCOUTING
              </span>
            </div>
            <GreenBar className="episode-bar" />
            <h3 className="episode-subject">???</h3>
            <p className="episode-location">AMERICA</p>
            <p className="episode-tagline">Who should we spend 24 hours with next?</p>
          </div>
        </div>
      </section>

      {/* FOLLOW */}
      <section className="follow">
        <GreenBar className="section-bar" />
        <div className="follow-content">
          <p className="follow-cta">FOLLOW FOR MORE</p>
          <p className="follow-handle">@24hoursdoc</p>
          <div className="follow-links">
            <a href="#" className="follow-link">YOUTUBE</a>
            <span className="follow-divider">/</span>
            <a href="#" className="follow-link">TIKTOK</a>
            <span className="follow-divider">/</span>
            <a href="#" className="follow-link">INSTAGRAM</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <GreenBar className="footer-bar" />
        <div className="footer-content">
          <span className="footer-brand">A COBY WORLDWIDE PRODUCTION</span>
          <span className="footer-year">2026</span>
        </div>
      </footer>

      <style jsx>{`
        /* ============================================
           ANIMATIONS
           ============================================ */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes drawLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes drawVertical {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(6px); }
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          96% { opacity: 0.9; }
          97% { opacity: 1; }
        }

        /* ============================================
           GREEN BAR MOTIF
           ============================================ */
        .green-bar {
          background: var(--green);
          transform-origin: left;
        }

        .hero-bar-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          animation: drawLine 1s ease-out 0.3s both;
        }

        .section-bar {
          width: 100%;
          height: 2px;
          margin-bottom: 3rem;
          animation: drawLine 0.8s ease-out both;
        }

        .episode-bar {
          width: 60px;
          height: 3px;
          margin: 0.75rem 0;
        }

        .footer-bar {
          width: 100%;
          height: 1px;
          margin-bottom: 2rem;
          opacity: 0.4;
        }

        /* ============================================
           NAV
           ============================================ */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2.5rem;
          background: rgba(17, 17, 16, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-rec {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #ff4d00;
          font-weight: 700;
          font-size: 0.65rem;
        }

        .rec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff4d00;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .timecode-live {
          color: var(--mid-gray);
          font-variant-numeric: tabular-nums;
        }

        .nav-right {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: var(--light-gray);
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: var(--green);
        }

        /* ============================================
           HERO
           ============================================ */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--green-glow) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.5s ease;
        }

        .loaded .hero::before {
          opacity: 1;
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-timecode {
          font-size: clamp(4rem, 15vw, 12rem);
          font-weight: 700;
          color: var(--green);
          line-height: 1;
          letter-spacing: -0.02em;
          animation: flicker 8s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .loaded .hero-timecode {
          opacity: 1;
        }

        .hero-colon {
          color: var(--green);
          opacity: 0.6;
        }

        .hero-rule {
          width: 200px;
          height: 1px;
          background: var(--mid-gray);
          margin: 1.5rem auto;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: opacity 0.6s ease 0.6s, transform 0.8s ease 0.6s;
        }

        .loaded .hero-rule {
          opacity: 0.5;
          transform: scaleX(1);
        }

        .hero-word {
          font-size: clamp(1rem, 3vw, 1.8rem);
          letter-spacing: 0.5em;
          color: var(--cream);
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s;
        }

        .loaded .hero-word {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-tagline {
          font-size: clamp(0.7rem, 1.5vw, 0.85rem);
          color: var(--mid-gray);
          letter-spacing: 0.1em;
          font-weight: 400;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 1.2s, transform 0.6s ease 1.2s;
        }

        .loaded .hero-tagline {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: var(--mid-gray);
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          animation: scrollPulse 2.5s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.6s ease 1.8s;
        }

        .loaded .hero-scroll-hint {
          opacity: 1;
        }

        .scroll-line {
          width: 1px;
          height: 30px;
          background: var(--mid-gray);
          opacity: 0.4;
        }

        /* ============================================
           CONCEPT
           ============================================ */
        .concept {
          padding: 6rem 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .concept-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 3rem;
        }

        .concept-label {
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: var(--green-dim);
          padding-top: 0.3rem;
        }

        .concept-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .concept-text p {
          font-size: 0.95rem;
          line-height: 1.85;
          color: var(--light-gray);
          max-width: 600px;
        }

        .concept-text p:last-child {
          color: #fff;
          font-weight: 700;
        }

        /* ============================================
           EPISODES
           ============================================ */
        .episodes {
          padding: 6rem 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .episodes-header {
          margin-bottom: 3rem;
        }

        .section-label {
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: var(--green-dim);
        }

        .episodes-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .episode-card {
          background: var(--charcoal);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 2rem;
          position: relative;
          transition: border-color 0.3s, transform 0.3s;
        }

        .episode-card:hover {
          border-color: rgba(0, 224, 90, 0.2);
          transform: translateY(-2px);
        }

        .episode-card.placeholder {
          border-style: dashed;
          border-color: rgba(255, 255, 255, 0.08);
          opacity: 0.5;
        }

        .episode-card.placeholder:hover {
          opacity: 0.7;
          border-color: rgba(0, 224, 90, 0.15);
        }

        .episode-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .episode-number {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--green);
          font-weight: 700;
        }

        .episode-status {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .episode-status.soon {
          color: var(--mid-gray);
        }

        .episode-status.live {
          color: var(--green);
        }

        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .status-dot.soon {
          background: var(--mid-gray);
        }

        .status-dot.live {
          background: var(--green);
          animation: pulse 1.5s ease-in-out infinite;
        }

        .episode-subject {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.25rem;
          letter-spacing: 0.02em;
        }

        .episode-location {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--mid-gray);
          margin-bottom: 1rem;
        }

        .episode-tagline {
          font-size: 0.8rem;
          color: var(--light-gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .episode-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .episode-date {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--mid-gray);
        }

        .episode-cta {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--green);
          text-decoration: none;
          font-weight: 700;
          transition: opacity 0.3s;
        }

        .episode-cta:hover {
          opacity: 0.7;
        }

        /* ============================================
           FOLLOW
           ============================================ */
        .follow {
          padding: 6rem 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .follow-content {
          padding: 4rem 0;
        }

        .follow-cta {
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: var(--green);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .follow-handle {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
        }

        .follow-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
        }

        .follow-link {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--light-gray);
          text-decoration: none;
          transition: color 0.3s;
        }

        .follow-link:hover {
          color: var(--green);
        }

        .follow-divider {
          color: rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
        }

        /* ============================================
           FOOTER
           ============================================ */
        .footer {
          padding: 0 2.5rem 3rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-brand {
          font-size: 0.55rem;
          letter-spacing: 0.25em;
          color: var(--mid-gray);
          opacity: 0.5;
        }

        .footer-year {
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: var(--mid-gray);
          opacity: 0.5;
        }

        /* ============================================
           MOBILE
           ============================================ */
        @media (max-width: 768px) {
          .nav {
            padding: 1rem 1.5rem;
          }

          .nav-right {
            gap: 1.25rem;
          }

          .concept-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .episodes-list {
            grid-template-columns: 1fr;
          }

          .concept, .episodes, .follow, .footer {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .hero-scroll-hint {
            bottom: 2rem;
          }

          .follow-links {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .nav {
            padding: 0.75rem 1rem;
            font-size: 0.6rem;
          }

          .nav-left {
            gap: 0.75rem;
          }

          .episode-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </main>
  )
}
