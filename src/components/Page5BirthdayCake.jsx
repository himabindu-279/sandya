import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake, Flame, Heart, RefreshCw, Sparkles, Wind } from 'lucide-react';
import { playCandleBlow, playChime, playConfettiPop } from '../utils/audio';

export default function Page5BirthdayCake({ friendName }) {
  // Initialize all 20 candles as lit (true)
  const [candles, setCandles] = useState(Array(20).fill(true));
  const [hasBlownAll, setHasBlownAll] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [customWish, setCustomWish] = useState('');
  const [savedWish, setSavedWish] = useState('');

  const litCount = candles.filter(Boolean).length;

  const toggleCandle = (index) => {
    playChime();
    setCandles((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const fireGrandConfetti = () => {
    playConfettiPop();
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#f8a5c2', '#f78fb3', '#f5cd79', '#e66767', '#ffffff', '#e58e26', '#b08dd6'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleBlowCandles = () => {
    playCandleBlow();
    // Extinguish all candles
    setCandles(Array(20).fill(false));
    setHasBlownAll(true);
    setWishMade(true);
    if (customWish.trim()) {
      setSavedWish(customWish.trim());
    }
    setTimeout(() => {
      fireGrandConfetti();
    }, 400);
  };

  const handleRelight = () => {
    playChime();
    setCandles(Array(20).fill(true));
    setHasBlownAll(false);
    setWishMade(false);
  };

  const handleCelebrateClick = () => {
    fireGrandConfetti();
  };

  return (
    <section id="page-5" className="section-wrapper" style={{ position: 'relative', textAlign: 'center' }}>
      {/* Section Header */}
      <div style={{ maxWidth: '720px', margin: '0 auto 40px auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(254, 235, 241, 0.9)',
            border: '1px solid rgba(220, 160, 180, 0.45)',
            color: '#ba6378',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          <Sparkles size={14} /> CHAPTER 20 · CELEBRATION
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 700,
            color: '#3e242d',
            lineHeight: 1.15,
            marginBottom: '14px',
          }}
        >
          The Birthday Cake & 20 Candles
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          Every candle represents a year of life, grace, resilience, and your extraordinary journey. Click individual
          candles to interact, write your 20th birthday wish, and blow them out!
        </p>

        {/* Lit candles counter badge */}
        <div style={{ marginTop: '16px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 18px',
              borderRadius: '9999px',
              background: litCount > 0 ? '#fff0e6' : '#f0f0f0',
              border: litCount > 0 ? '1px solid #ffd1b3' : '1px solid #d0d0d0',
              color: litCount > 0 ? '#b85c28' : '#707070',
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            <Flame size={16} fill={litCount > 0 ? '#e27a3f' : 'none'} color={litCount > 0 ? '#e27a3f' : '#888'} />
            {litCount} of 20 Candles Lit
          </span>
        </div>
      </div>

      {/* Optional Birthday Wish Input Before Blowing */}
      {!hasBlownAll && (
        <div
          style={{
            maxWidth: '460px',
            margin: '0 auto 36px auto',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '16px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(220, 180, 195, 0.4)',
            boxShadow: '0 4px 16px rgba(180, 100, 125, 0.08)',
          }}
        >
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#472935', marginBottom: '8px' }}>
            ✨ Whisper a Birthday Wish for Your 20s (Optional):
          </label>
          <input
            type="text"
            placeholder="Type your secret wish or intention..."
            value={customWish}
            onChange={(e) => setCustomWish(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid #deb3c0',
              outline: 'none',
              fontSize: '0.9rem',
              textAlign: 'center',
            }}
          />
        </div>
      )}

      {/* Visually Beautiful 3D Cake Canvas Stage */}
      <div
        style={{
          position: 'relative',
          maxWidth: '560px',
          margin: '0 auto 40px auto',
          padding: '40px 20px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* The 20 Candles Array (Arranged in 2 neat arched rows) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '-12px',
            zIndex: 15,
            width: '100%',
            maxWidth: '380px',
          }}
        >
          {/* Row 1: 9 candles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', width: '100%' }}>
            {candles.slice(0, 9).map((isLit, i) => (
              <CandleItem key={i} index={i} isLit={isLit} onToggle={() => toggleCandle(i)} />
            ))}
          </div>

          {/* Row 2: 11 candles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', width: '100%' }}>
            {candles.slice(9, 20).map((isLit, i) => (
              <CandleItem key={i + 9} index={i + 9} isLit={isLit} onToggle={() => toggleCandle(i + 9)} />
            ))}
          </div>
        </div>

        {/* 3D Cake Tiers */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          {/* Top Tier */}
          <div
            style={{
              width: '280px',
              height: '80px',
              borderRadius: '24px 24px 16px 16px',
              background: 'linear-gradient(180deg, #fff7fa 0%, #fbe4eb 60%, #f7d2dd 100%)',
              border: '2px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 8px 24px rgba(180, 80, 110, 0.15), inset 0 2px 4px #ffffff',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Frosting Drips Graphic */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '24px',
                background: '#ffffff',
                borderRadius: '0 0 12px 12px',
                opacity: 0.9,
              }}
            />
            {/* Number 20 gold badge on cake */}
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#ba6378',
                letterSpacing: '0.06em',
                zIndex: 2,
              }}
            >
              20
            </div>
          </div>

          {/* Middle Tier */}
          <div
            style={{
              width: '360px',
              height: '95px',
              borderRadius: '22px 22px 14px 14px',
              background: 'linear-gradient(180deg, #fcedf2 0%, #f8d7e3 60%, #f0c3d2 100%)',
              border: '2px solid rgba(255, 255, 255, 0.85)',
              boxShadow: '0 10px 28px rgba(180, 80, 110, 0.18), inset 0 2px 4px #ffffff',
              marginTop: '-10px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Elegant pearl garland pattern */}
            <div style={{ display: 'flex', gap: '14px', opacity: 0.75 }}>
              {[...Array(9)].map((_, i) => (
                <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
              ))}
            </div>
            <div
              className="font-script"
              style={{
                position: 'absolute',
                bottom: '14px',
                fontSize: '1.45rem',
                color: '#843b4e',
              }}
            >
              Happy 20th, {friendName}
            </div>
          </div>

          {/* Base Tier */}
          <div
            style={{
              width: '440px',
              height: '110px',
              borderRadius: '24px 24px 16px 16px',
              background: 'linear-gradient(180deg, #f8e1ea 0%, #ecc8d5 60%, #e2b3c2 100%)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 16px 36px rgba(180, 80, 110, 0.22), inset 0 2px 6px #ffffff',
              marginTop: '-12px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: 0,
                right: 0,
                textAlign: 'center',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: '#703645',
                textTransform: 'uppercase',
              }}
            >
              02 NOVEMBER 2026 · CHAPTER 20
            </div>
          </div>

          {/* Pedestal Stand */}
          <div
            style={{
              width: '480px',
              height: '24px',
              borderRadius: '9999px',
              background: 'linear-gradient(180deg, #ffffff 0%, #eedee3 100%)',
              boxShadow: '0 16px 30px rgba(150, 70, 95, 0.25)',
              marginTop: '-6px',
            }}
          />
          <div
            style={{
              width: '180px',
              height: '28px',
              background: 'linear-gradient(180deg, #eedee3 0%, #deb8c6 100%)',
              borderRadius: '0 0 16px 16px',
              boxShadow: '0 8px 18px rgba(150, 70, 95, 0.15)',
            }}
          />
        </div>
      </div>

      {/* Interactive Action Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          marginBottom: '36px',
        }}
      >
        {!hasBlownAll ? (
          <button
            onClick={handleBlowCandles}
            className="btn-primary"
            style={{
              fontSize: '1.05rem',
              padding: '1rem 2.4rem',
            }}
          >
            <Wind size={20} />
            BLOW THE 20 CANDLES & MAKE A WISH!
          </button>
        ) : (
          <button
            onClick={handleRelight}
            className="btn-secondary"
            style={{
              padding: '0.9rem 2rem',
              fontSize: '0.95rem',
              fontWeight: 600,
            }}
          >
            <RefreshCw size={18} />
            Relight All 20 Candles
          </button>
        )}

        <button
          onClick={handleCelebrateClick}
          className="btn-primary"
          style={{
            background: 'linear-gradient(135deg, #e295a9 0%, #d48296 50%, #b86076 100%)',
            fontSize: '1rem',
            padding: '1rem 2.2rem',
          }}
        >
          <Sparkles size={18} />
          CELEBRATE! 🎉
        </button>
      </div>

      {/* Wish Granted Celebration Card Modal / Box */}
      {wishMade && (
        <div
          className="glass-panel"
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            padding: '32px 28px',
            background: 'linear-gradient(135deg, #ffffff, #fff7fa)',
            border: '2px solid #d48296',
            boxShadow: '0 20px 50px -10px rgba(180, 80, 110, 0.25)',
            borderRadius: '24px',
            animation: 'unfoldCard 0.5s ease-out',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: '#fbe4eb',
              color: '#ba6378',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <Heart size={14} fill="#ba6378" /> BIRTHDAY BLESSING UNLOCKED
          </div>

          <h3
            className="font-serif"
            style={{
              fontSize: '1.85rem',
              fontWeight: 700,
              color: '#472935',
              marginBottom: '12px',
            }}
          >
            May Every Wish of Chapter 20 Come True!
          </h3>

          {savedWish && (
            <div
              style={{
                background: '#fdf2f5',
                padding: '12px 18px',
                borderRadius: '12px',
                border: '1px dashed #e4a2b3',
                marginBottom: '16px',
                color: '#843b4e',
                fontSize: '0.94rem',
                fontStyle: 'italic',
              }}
            >
              “{savedWish}”
            </div>
          )}

          <p style={{ fontSize: '0.98rem', color: '#67404e', lineHeight: 1.7, marginBottom: '20px' }}>
            Turning 20 is the start of your most magnetic, adventurous, and empowering decade yet. May you be blessed
            with boundless health, exciting discoveries, deep peace, loyal laughter, and every achievement your brave
            heart is working towards!
          </p>

          <div
            className="font-script"
            style={{
              fontSize: '1.6rem',
              color: '#ba6378',
            }}
          >
            Happy 20th Birthday, my wonderful friend! ✨
          </div>
        </div>
      )}
    </section>
  );
}

// Individual Candle Item Component
function CandleItem({ index, isLit, onToggle }) {
  const candleColors = ['#f8b4c8', '#f2d2e2', '#e9b7ce', '#fed8cc', '#f5c6dc', '#fed8dd'];
  const color = candleColors[index % candleColors.length];

  return (
    <div
      onClick={onToggle}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        width: '22px',
        userSelect: 'none',
      }}
      title={isLit ? `Candle #${index + 1}: Click to blow` : `Candle #${index + 1}: Click to relight`}
    >
      {/* Flame or Smoke */}
      <div style={{ height: '22px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        {isLit ? (
          <div
            className="candle-flame"
            style={{
              width: '12px',
              height: '18px',
              background: 'radial-gradient(ellipse at bottom, #fffae6 15%, #ffc04d 50%, #ff5722 90%)',
              borderRadius: '50% 50% 35% 35% / 60% 60% 40% 40%',
            }}
          />
        ) : (
          <div className="smoke-puff" style={{ fontSize: '10px', color: '#908085' }}>
            〰️
          </div>
        )}
      </div>

      {/* Wick */}
      <div style={{ width: '2px', height: '5px', background: '#4a2e35' }} />

      {/* Candle Body */}
      <div
        style={{
          width: '10px',
          height: '38px',
          borderRadius: '4px',
          background: `linear-gradient(180deg, #ffffff 0%, ${color} 40%, ${color} 100%)`,
          border: '1px solid rgba(255, 255, 255, 0.7)',
          boxShadow: isLit ? '0 0 10px rgba(255, 200, 100, 0.4)' : 'none',
          transition: 'all 0.2s',
        }}
      />
    </div>
  );
}
