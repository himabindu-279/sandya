import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight, Compass, Flame, Heart, RefreshCw, Sparkles, Star, Wind, X } from 'lucide-react';
import { birthdayRoomData } from '../data/sandyaData';
import { playCandleBlow, playChime, playConfettiPop } from '../utils/audio';

export default function Page5BirthdayRoom() {
  const [candles, setCandles] = useState(Array(20).fill(true));
  const [hasBlownAll, setHasBlownAll] = useState(false);
  const [wishRevealed, setWishRevealed] = useState(false);
  const [fortuneOpen, setFortuneOpen] = useState(false);

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
    const count = 180;
    const defaults = { origin: { y: 0.65 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#f8a5c2', '#ffd700', '#ffffff', '#e84393', '#b08dd6'],
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
    setCandles(Array(20).fill(false));
    setHasBlownAll(true);
    setWishRevealed(true);
    setTimeout(() => {
      fireGrandConfetti();
    }, 400);
  };

  const handleRelight = () => {
    playChime();
    setCandles(Array(20).fill(true));
    setHasBlownAll(false);
    setWishRevealed(false);
  };

  const handleOpenFortune = () => {
    playConfettiPop();
    setFortuneOpen(true);
  };

  return (
    <div className="section-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', textAlign: 'center' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '720px', margin: '0 auto 40px auto' }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            background: 'rgba(254, 235, 241, 0.9)',
            border: '1px solid rgba(220, 160, 180, 0.45)',
            color: '#ba6378',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}
        >
          <Sparkles size={14} /> ROOM 03 · YOUR BIRTHDAY ROOM
        </div>

        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontWeight: 700,
            color: '#3e242d',
            lineHeight: 1.15,
            marginBottom: '14px',
          }}
        >
          {birthdayRoomData.title}
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6, marginBottom: '16px' }}>
          {birthdayRoomData.subtitle} Click individual candles to interact, or blow them all out together to unlock
          your 20th birthday celebration!
        </p>

        {/* Lit candles counter badge */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
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

          {/* Hidden Room Surprise: Secret 20s Fortune Pill */}
          <button
            onClick={handleOpenFortune}
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              fontSize: '0.84rem',
              fontWeight: 700,
              color: '#ba6378',
              border: '1px solid rgba(220, 160, 180, 0.5)',
              background: '#ffffff',
              cursor: 'pointer',
            }}
          >
            <Star size={14} fill="#d4a373" color="#d4a373" />
            <span>✨ Tap for Your 20s Fortune Card</span>
          </button>
        </div>
      </motion.div>

      {/* 3D Animated Cake Stage */}
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
        {/* The 20 Candles (Arranged in 2 neat arched rows) */}
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
            <div
              className="font-script"
              style={{
                fontSize: '1.45rem',
                color: '#843b4e',
              }}
            >
              Happy 20th Birthday, Sandya
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
              02.11.2026 · CHAPTER 20
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
        </div>
      </div>

      {/* Action Buttons */}
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
              padding: '1rem 2.5rem',
            }}
          >
            <Wind size={20} />
            BLOW YOUR 20 CANDLES & MAKE A WISH!
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
          onClick={fireGrandConfetti}
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

      {/* Wish Granted Celebration Box */}
      {wishRevealed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
          style={{
            maxWidth: '640px',
            margin: '0 auto 48px auto',
            padding: '32px 28px',
            background: 'linear-gradient(135deg, #ffffff, #fff7fa)',
            border: '2px solid #d48296',
            boxShadow: '0 20px 50px -10px rgba(180, 80, 110, 0.25)',
            borderRadius: '24px',
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
            <Heart size={14} fill="#ba6378" /> YOUR BIRTHDAY BLESSING
          </div>

          <h3 className="font-serif" style={{ fontSize: '1.85rem', fontWeight: 700, color: '#472935', marginBottom: '12px' }}>
            May Every Wish of Chapter 20 Come True!
          </h3>

          <p style={{ fontSize: '1rem', color: '#67404e', lineHeight: 1.7, marginBottom: '18px' }}>
            {birthdayRoomData.celebrationWish}
          </p>

          <div className="font-script" style={{ fontSize: '1.6rem', color: '#ba6378' }}>
            Happy 20th Birthday, Sandya! ✨
          </div>
        </motion.div>
      )}

      {/* Secret Fortune Modal (Hidden Room Surprise) */}
      <AnimatePresence>
        {fortuneOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 105,
              backgroundColor: 'rgba(35, 18, 25, 0.65)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            onClick={() => setFortuneOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '480px',
                padding: '28px',
                borderRadius: '24px',
                background: '#ffffff',
                border: '2px solid #ffd700',
                boxShadow: '0 25px 60px rgba(180, 80, 110, 0.3)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setFortuneOpen(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  border: 'none',
                  background: '#fbebf0',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#6e4752',
                }}
              >
                <X size={16} />
              </button>

              <div style={{ fontSize: '2.4rem', marginBottom: '8px' }}>🌟</div>
              <h3 className="font-serif" style={{ fontSize: '1.65rem', color: '#472935', marginBottom: '12px', fontWeight: 700 }}>
                Your 20s Birthday Fortune
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#67404e', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '20px' }}>
                {birthdayRoomData.secretFortune}
              </p>
              <button
                onClick={() => setFortuneOpen(false)}
                className="btn-primary"
                style={{ padding: '8px 24px', fontSize: '0.88rem' }}
              >
                Claim Your Fortune ✨
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          paddingTop: '32px',
          borderTop: '1px solid rgba(220, 180, 195, 0.3)',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <Link to="/world" className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
          <Compass size={16} /> Return to World Hub
        </Link>

        <Link to="/memories" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Our Memories</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

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

      <div style={{ width: '2px', height: '5px', background: '#4a2e35' }} />

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
