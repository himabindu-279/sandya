import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Compass, Heart, RefreshCw, Sparkles, Star, X } from 'lucide-react';
import { sandyaConfig, imageMap } from '../data/sandyaData';
import { playConfettiPop, playSealCrack } from '../utils/audio';

export default function Page8GrandFinale() {
  const navigate = useNavigate();
  const [secretPhotoOpen, setSecretPhotoOpen] = useState(false);

  const handleReplay = () => {
    playConfettiPop();
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f8a5c2', '#ffd700', '#ffffff', '#e84393', '#b08dd6'],
    });
    navigate('/');
  };

  const handleFireConfetti = () => {
    playConfettiPop();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#ffd700', '#f8a5c2', '#ffffff', '#e84393'],
    });
  };

  const handleOpenSecretPhoto = () => {
    playSealCrack();
    playConfettiPop();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#f8a5c2', '#ffffff'],
    });
    setSecretPhotoOpen(true);
  };

  return (
    <div
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
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 222, 233, 0.75) 0%, rgba(246, 230, 250, 0.45) 45%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '820px', width: '100%', position: 'relative', zIndex: 10 }}
      >
        {/* Subtle crown pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 22px',
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
            CHAPTER 20 · YOUR GRAND FINALE
          </span>
          <Sparkles size={16} color="#ba6378" />
        </div>

        {/* Headings in direct second person */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 4.6rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#3e242d',
            marginBottom: '16px',
          }}
        >
          HAPPY 20TH BIRTHDAY,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ba6378 0%, #a8475e 50%, #873347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}
          >
            {sandyaConfig.name.toUpperCase()}!
          </span>
        </h1>

        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
            lineHeight: 1.6,
            color: '#5c3541',
            fontStyle: 'italic',
            maxWidth: '680px',
            margin: '0 auto 28px auto',
          }}
        >
          “{sandyaConfig.finaleLine}”
        </p>

        {/* Best Photograph Showcase Frame */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            width: '280px',
            height: '350px',
            margin: '0 auto 28px auto',
            borderRadius: '28px',
            padding: '10px',
            background: 'linear-gradient(135deg, #ffffff, #fff2f6)',
            border: '2px solid rgba(220, 160, 180, 0.6)',
            boxShadow: '0 24px 60px -12px rgba(180, 80, 110, 0.28), 0 0 45px rgba(255, 215, 230, 0.55)',
          }}
        >
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
            <Star size={13} fill="#d4a373" color="#d4a373" /> YOU ARE IRREPLACEABLE
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
              src={imageMap.birthdayPhoto}
              alt={`${sandyaConfig.name} Best Photograph`}
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
              Your Chapter 20 Begins Today
            </div>
          </div>
        </motion.div>

        {/* Hidden Room Surprise: Secret Final Photograph Button */}
        <div style={{ marginBottom: '36px' }}>
          <button
            onClick={handleOpenSecretPhoto}
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#ba6378',
              border: '1.5px solid #d48296',
              background: 'linear-gradient(135deg, #ffffff, #fff7fa)',
              boxShadow: '0 8px 24px rgba(186, 99, 120, 0.22)',
              cursor: 'pointer',
            }}
          >
            <Star size={16} fill="#ffd700" color="#ffd700" />
            <span>✨ Tap to Reveal Your Secret Chapter 20 Memory Photograph</span>
          </button>
        </div>

        {/* Navigation Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <button
            onClick={handleReplay}
            className="btn-primary"
            style={{
              fontSize: '1.05rem',
              padding: '1.1rem 2.6rem',
              borderRadius: '9999px',
            }}
          >
            <RefreshCw size={18} />
            REPLAY YOUR LITTLE UNIVERSE ↺
          </button>

          <Link
            to="/world"
            className="btn-secondary"
            style={{
              fontSize: '0.98rem',
              padding: '1rem 2.2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Compass size={18} />
            Return to World Hub
          </Link>

          <button
            onClick={handleFireConfetti}
            className="btn-secondary"
            style={{
              fontSize: '0.98rem',
              padding: '1rem 2.2rem',
              borderRadius: '9999px',
            }}
          >
            <Sparkles size={16} />
            More Confetti! 🎉
          </button>
        </div>

        {/* Footer info */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(220, 180, 195, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            fontSize: '0.84rem',
            color: '#8e5d6d',
          }}
        >
          <div>
            Created with genuine admiration and friendship for <strong>{sandyaConfig.name}</strong>
          </div>
          <div style={{ fontSize: '0.78rem', color: '#a07d88' }}>
            {sandyaConfig.celebrationDate} • Born {sandyaConfig.birthDate} • Chapter 20
          </div>
        </div>
      </motion.div>

      {/* Secret Final Photograph Reveal Modal */}
      <AnimatePresence>
        {secretPhotoOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 110,
              backgroundColor: 'rgba(35, 18, 25, 0.72)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            onClick={() => setSecretPhotoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '24px',
                borderRadius: '24px',
                background: '#ffffff',
                border: '2px solid #d48296',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(180, 80, 110, 0.3)',
              }}
            >
              <button
                onClick={() => setSecretPhotoOpen(false)}
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

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#ba6378',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                <Heart size={14} fill="#ba6378" /> YOUR SECRET FINALE KEEPSAKE
              </div>

              <div
                className="polaroid-frame"
                style={{
                  maxWidth: '320px',
                  margin: '0 auto 16px auto',
                  transform: 'rotate(-1.5deg)',
                }}
              >
                <div className="washi-tape" style={{ background: '#ffd79e' }} />
                <div style={{ width: '100%', height: '270px', overflow: 'hidden', borderRadius: '4px', background: '#fff2e5', marginBottom: '10px' }}>
                  <img
                    src={imageMap.giftSurprise}
                    alt="Secret Final Memory"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="font-script" style={{ fontSize: '1.35rem', color: '#472935' }}>
                  “Always cheering the loudest for you.”
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#67404e', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '18px' }}>
                May your twenties be filled with laughter that echoes, adventures that inspire, and people who love you unconditionally!
              </p>

              <button
                onClick={() => setSecretPhotoOpen(false)}
                className="btn-primary"
                style={{ padding: '8px 24px', fontSize: '0.88rem' }}
              >
                Keep Forever in Your Heart ♡
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
