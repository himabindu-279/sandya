import confetti from 'canvas-confetti';
import { Heart, RefreshCw, Sparkles, Star } from 'lucide-react';
import { playConfettiPop } from '../utils/audio';

export default function Page11FinalCelebration({ friendName, bestImage, onReplayUniverse }) {
  const handleReplay = () => {
    playConfettiPop();
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f8a5c2', '#ffd700', '#ffffff', '#e84393', '#b08dd6'],
    });
    onReplayUniverse();
  };

  return (
    <section
      id="page-11"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 60px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 226, 235, 0.75) 0%, rgba(245, 235, 250, 0.5) 45%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '820px', width: '100%', position: 'relative', zIndex: 10 }}>
        {/* Subtle crown pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.92)',
            border: '1px solid rgba(220, 160, 180, 0.45)',
            boxShadow: '0 4px 16px rgba(180, 90, 115, 0.12)',
            marginBottom: '20px',
          }}
        >
          <Sparkles size={16} color="#ba6378" />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#843b4e',
            }}
          >
            CHAPTER 20 · FINALE BLESSING
          </span>
          <Sparkles size={16} color="#ba6378" />
        </div>

        {/* Finale Heading */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#3e242d',
            marginBottom: '18px',
          }}
        >
          Happy 20th Birthday,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ba6378 0%, #a8475e 50%, #873347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}
          >
            {friendName}!
          </span>
        </h2>

        {/* Exact specified blessing quote */}
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.55rem)',
            lineHeight: 1.6,
            color: '#5c3541',
            fontStyle: 'italic',
            maxWidth: '680px',
            margin: '0 auto 36px auto',
          }}
        >
          “May this chapter bring you happiness, courage, beautiful opportunities and everything your heart is working
          towards.”
        </p>

        {/* Ornate Best Photograph Showcase Frame */}
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '350px',
            margin: '0 auto 40px auto',
            borderRadius: '28px',
            padding: '10px',
            background: 'linear-gradient(135deg, #ffffff, #fff2f6)',
            border: '2px solid rgba(220, 160, 180, 0.6)',
            boxShadow: '0 24px 60px -12px rgba(180, 80, 110, 0.28), 0 0 45px rgba(255, 215, 230, 0.6)',
          }}
        >
          {/* Top Star Badge */}
          <div
            className="glass-pill"
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '4px 16px',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#843b4e',
              border: '1px solid rgba(220, 160, 180, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              zIndex: 5,
            }}
          >
            <Star size={13} fill="#d4a373" color="#d4a373" /> THE IRREPLACEABLE BEST FRIEND
          </div>

          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#fcebf0',
              position: 'relative',
            }}
          >
            <img
              src={bestImage}
              alt={`${friendName} best photograph`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(71, 41, 53, 0.45) 0%, transparent 40%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: 0,
                right: 0,
                color: '#ffffff',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Chapter 20 Begins Today
            </div>
          </div>
        </div>

        {/* REPLAY YOUR LITTLE UNIVERSE Button */}
        <div>
          <button
            onClick={handleReplay}
            className="btn-primary"
            style={{
              fontSize: '1.08rem',
              padding: '1.1rem 2.8rem',
              borderRadius: '9999px',
            }}
          >
            <RefreshCw size={20} />
            REPLAY YOUR LITTLE UNIVERSE ↺
          </button>
        </div>

        {/* Footer info */}
        <div
          style={{
            marginTop: '60px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(220, 180, 195, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '0.84rem',
            color: '#8e5d6d',
          }}
        >
          <div>
            Created with endless appreciation and genuine friendship for <strong>{friendName}</strong>
          </div>
          <div style={{ fontSize: '0.78rem', color: '#a07d88' }}>
            02 November 2026 • Born 02 November 2006 • Chapter 20
          </div>
        </div>
      </div>
    </section>
  );
}
