'use client'

import { useState, useEffect } from 'react'

function TimecodeCounter() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000)
      setTime({
        h: Math.floor(elapsed / 3600),
        m: Math.floor((elapsed % 3600) / 60),
        s: elapsed % 60,
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')
  return <span className="tc">{pad(time.h)}:{pad(time.m)}:{pad(time.s)}</span>
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <main className={loaded ? 'loaded' : ''}>

      {/* NAV — logo + REC + timecode */}
      <nav>
        <div className="nav-left">
          <img src="/logo.png" alt="24 Hours" className="nav-logo" />
          <span className="rec"><span className="rec-dot" />REC</span>
          <TimecodeCounter />
        </div>
      </nav>

      {/* HERO — the whole point */}
      <section className="hero">
        <div className="hero-glow" />
        <h1 className="timecode">
          24<span className="colon">:</span>00<span className="colon">:</span>00
        </h1>
        <div className="rule" />
        <p className="hours">H O U R S</p>
        <p className="tagline">One subject. One day. Twenty-four minutes.</p>
      </section>

      {/* EPISODE — single card, no grid, no placeholder */}
      <section className="episode">
        <div className="ep-bar" />
        <div className="ep-meta">
          <span className="ep-num">EP001</span>
          <span className="ep-status"><span className="status-dot" />COMING SOON</span>
        </div>
        <h2 className="ep-name">BEN JENKINS</h2>
        <p className="ep-loc">CAIRO, EGYPT</p>
        <p className="ep-tag">Comedian. Stuck in Cairo with a pug.</p>
      </section>

      {/* FOLLOW — just the handle */}
      <section className="follow">
        <p className="handle">@24hoursdoc</p>
        <div className="links">
          <a href="#">YOUTUBE</a>
          <a href="#">TIKTOK</a>
          <a href="#">INSTAGRAM</a>
        </div>
      </section>

      {/* FOOTER — just the line */}
      <footer>
        <div className="footer-line" />
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        :global(*) { margin: 0; padding: 0; box-sizing: border-box; }
        :global(html) { scroll-behavior: smooth; }
        :global(body) {
          background: #111110;
          color: #fff;
          font-family: 'Space Mono', monospace;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        :global(::selection) {
          background: #00e05a;
          color: #111110;
        }

        /* scanlines */
        :global(body::after) {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 9999;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px
          );
        }

        /* ---- NAV ---- */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.5rem 2.5rem;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .nav-logo {
          height: 24px;
          width: auto;
          opacity: 0.9;
        }

        .rec {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #ff4d00;
          font-weight: 700;
          font-size: 0.6rem;
        }

        .rec-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ff4d00;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .tc { color: #5a5550; font-variant-numeric: tabular-nums; }

        /* ---- HERO ---- */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 2rem;
        }

        .hero-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,224,90,0.08) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 2s ease;
        }

        .loaded .hero-glow { opacity: 1; }

        .timecode {
          font-size: clamp(5rem, 18vw, 14rem);
          font-weight: 700;
          color: #00e05a;
          line-height: 1;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
          opacity: 0;
          transition: opacity 1s ease 0.2s;
        }

        .loaded .timecode { opacity: 1; }

        .colon { opacity: 0.4; }

        .rule {
          width: 160px;
          height: 1px;
          background: #5a5550;
          margin: 1.5rem 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 1s ease 0.7s;
        }

        .loaded .rule { transform: scaleX(1); }

        .hours {
          font-size: clamp(0.9rem, 2.5vw, 1.4rem);
          letter-spacing: 0.5em;
          color: #d4d0c8;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.6s ease 1s, transform 0.6s ease 1s;
        }

        .loaded .hours {
          opacity: 1;
          transform: translateY(0);
        }

        .tagline {
          font-size: clamp(0.65rem, 1.2vw, 0.8rem);
          color: #5a5550;
          letter-spacing: 0.08em;
          font-weight: 400;
          opacity: 0;
          transition: opacity 0.8s ease 1.3s;
        }

        .loaded .tagline { opacity: 1; }

        /* ---- EPISODE ---- */
        .episode {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 2.5rem 8rem;
        }

        .ep-bar {
          width: 40px;
          height: 3px;
          background: #00e05a;
          margin-bottom: 2rem;
        }

        .ep-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .ep-num {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #00e05a;
          font-weight: 700;
        }

        .ep-status {
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          color: #5a5550;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .status-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #5a5550;
        }

        .ep-name {
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
          margin-bottom: 0.4rem;
        }

        .ep-loc {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: #5a5550;
          margin-bottom: 1.25rem;
        }

        .ep-tag {
          font-size: 0.85rem;
          color: #8a8580;
          line-height: 1.7;
        }

        /* ---- FOLLOW ---- */
        .follow {
          text-align: center;
          padding: 4rem 2rem 6rem;
        }

        .handle {
          font-size: clamp(1.2rem, 3.5vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .links {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .links a {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: #5a5550;
          text-decoration: none;
          transition: color 0.3s;
        }

        .links a:hover { color: #00e05a; }

        /* ---- FOOTER ---- */
        footer {
          padding: 0 2.5rem 3rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .footer-line {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 1.5rem;
        }

        .credit {
          font-size: 0.5rem;
          letter-spacing: 0.25em;
          color: #5a5550;
          opacity: 0.4;
          text-align: center;
        }

        /* ---- ANIMATIONS ---- */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* ---- MOBILE ---- */
        @media (max-width: 768px) {
          nav { padding: 1rem 1.5rem; }
          .episode { padding: 0 1.5rem 6rem; }
          .follow { padding: 3rem 1.5rem 5rem; }
          footer { padding: 0 1.5rem 2rem; }
        }

        @media (max-width: 480px) {
          nav { padding: 0.75rem 1rem; }
          .links { gap: 1.25rem; }
        }
      `}</style>
    </main>
  )
}
