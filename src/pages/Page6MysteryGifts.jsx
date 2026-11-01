import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight, Compass, Gift, Heart, Mail, Sparkles, Star, Ticket, X } from 'lucide-react';
import { mysteryGiftData } from '../data/sandyaData';
import { playGiftReveal, playSealCrack, playChime } from '../utils/audio';

export default function Page6MysteryGifts() {
  const [openedBoxId, setOpenedBoxId] = useState('gift-1');

  const handleBoxClick = (id) => {
    if (openedBoxId !== id) {
      playGiftReveal();
      setOpenedBoxId(id);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f8a5c2', '#ffd700', '#ffffff', '#e84393'],
      });
    } else {
      playChime();
      setOpenedBoxId(null);
    }
  };

  const currentGift = mysteryGiftData.gifts.find((g) => g.id === openedBoxId);

  return (
    <div className="section-wrapper" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}
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
          <Sparkles size={14} /> ROOM 05 · MYSTERY KEEPSAKES
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
          The Mystery Gift Room
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          {mysteryGiftData.subtitle} Tap each of the three gift boxes to unlock the keepsakes hidden within.
        </p>
      </motion.div>

      {/* 3 Animated Gift Boxes Selector */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '960px',
          margin: '0 auto 48px auto',
        }}
      >
        {mysteryGiftData.gifts.map((g, idx) => {
          const isSelected = openedBoxId === g.id;

          return (
            <motion.div
              key={g.id}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleBoxClick(g.id)}
              className="glass-card"
              style={{
                padding: '28px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                border: isSelected ? '2px solid #ba6378' : '1px solid rgba(220, 180, 195, 0.4)',
                background: isSelected
                  ? 'linear-gradient(145deg, #ffffff, #fff2f6)'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 250, 252, 0.9))',
                boxShadow: isSelected
                  ? '0 16px 36px -8px rgba(186, 99, 120, 0.28)'
                  : '0 8px 24px -6px rgba(180, 100, 125, 0.08)',
              }}
            >
              {/* Animated 3D Gift Box Icon */}
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '20px',
                  margin: '0 auto 16px auto',
                  background: isSelected
                    ? 'linear-gradient(135deg, #ba6378, #873347)'
                    : `linear-gradient(135deg, ${g.color}, #ba6378)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 10px 24px rgba(186, 99, 120, 0.25)',
                  animation: isSelected ? 'none' : 'floatGentle 4s ease-in-out infinite',
                }}
              >
                <Gift size={42} />
              </div>

              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#ba6378',
                  marginBottom: '4px',
                }}
              >
                {g.title}
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.35rem', color: '#3e242d', marginBottom: '8px' }}>
                {g.label}
              </h3>

              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: isSelected ? '#ba6378' : '#8e5d6d',
                }}
              >
                {isSelected ? '✦ Unboxed' : 'Tap to open gift'}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Revealed Gift Stage */}
      <AnimatePresence mode="wait">
        {currentGift && (
          <motion.div
            key={currentGift.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '820px', margin: '0 auto 60px auto' }}
          >
            {/* Box 1: Friendship Letter */}
            {currentGift.type === 'letter' && (
              <div
                className="letter-parchment"
                style={{
                  padding: 'clamp(28px, 6vw, 48px)',
                  borderRadius: '20px',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(210, 175, 185, 0.35)',
                    marginBottom: '24px',
                  }}
                >
                  <span className="font-serif" style={{ fontStyle: 'italic', color: '#843b4e', fontSize: '1.05rem' }}>
                    Written on: {currentGift.content.date}
                  </span>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#ba6378',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    KEEPSAKE LETTER 01
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#472935', marginBottom: '18px', fontStyle: 'italic' }}>
                  {currentGift.content.greeting}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {currentGift.content.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.08rem',
                        lineHeight: 1.8,
                        color: '#472935',
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <div style={{ marginTop: '32px', paddingTop: '18px', borderTop: '1px solid rgba(210, 175, 185, 0.35)' }}>
                  <div style={{ fontSize: '0.94rem', color: '#7d5964', fontStyle: 'italic' }}>
                    {currentGift.content.signOff}
                  </div>
                  <div className="font-script" style={{ fontSize: '2rem', color: '#ba6378', marginTop: '4px' }}>
                    {currentGift.content.sender}
                  </div>
                </div>
              </div>
            )}

            {/* Box 2: Special Photo Keepsake */}
            {currentGift.type === 'photo' && (
              <div
                className="glass-panel"
                style={{
                  padding: '36px 24px',
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, #ffffff, #fff7fa)',
                  border: '2px solid #d48296',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#ba6378',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  <Star size={14} fill="#ba6378" /> PHOTO KEEPSAKE 02
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#472935', marginBottom: '20px' }}>
                  {currentGift.content.title}
                </h3>

                <div
                  className="polaroid-frame"
                  style={{
                    maxWidth: '360px',
                    margin: '0 auto',
                    transform: 'rotate(-1.5deg)',
                  }}
                >
                  <div className="washi-tape" style={{ background: '#ffd79e' }} />
                  <div
                    style={{
                      width: '100%',
                      height: '320px',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      background: '#fff2e5',
                      marginBottom: '14px',
                    }}
                  >
                    <img
                      src={currentGift.content.image}
                      alt="Gift Keepsake"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="font-script" style={{ fontSize: '1.4rem', color: '#472935' }}>
                    {currentGift.content.caption}
                  </div>
                </div>
              </div>
            )}

            {/* Box 3: Secret Friendship Passes */}
            {currentGift.type === 'passes' && (
              <div
                className="glass-panel"
                style={{
                  padding: '36px 28px',
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, #ffffff, #faf5fc)',
                  border: '2px solid #b08dd6',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#9068b5',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  <Ticket size={14} /> SECRET PASSES 03
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#472935', marginBottom: '20px' }}>
                  {currentGift.content.title}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                  {currentGift.content.passes.map((pass, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: '#ffffff',
                        border: '1px solid rgba(200, 170, 230, 0.4)',
                        boxShadow: '0 4px 12px rgba(180, 100, 125, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#3e242d' }}>{pass.title}</h4>
                          <span
                            style={{
                              padding: '2px 8px',
                              borderRadius: '6px',
                              background: '#f5eefc',
                              color: '#7b4ea4',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              fontFamily: 'monospace',
                            }}
                          >
                            {pass.code}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.82rem', color: '#7d5964', lineHeight: 1.5 }}>{pass.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
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

        <Link to="/future" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Her Next Chapter</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
