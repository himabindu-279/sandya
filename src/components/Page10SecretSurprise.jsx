import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Edit3, Gift, Heart, Sparkles, Star, Ticket } from 'lucide-react';
import { secretSurpriseData as defaultSurprise } from '../data/universeData';
import { playGiftReveal } from '../utils/audio';

export default function Page10SecretSurprise({ friendName, surpriseImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [surpriseData, setSurpriseData] = useState(defaultSurprise);
  const [isEditing, setIsEditing] = useState(false);
  const [customMsg, setCustomMsg] = useState(surpriseData.revealedMessage);

  const handleOpenGift = () => {
    if (!isOpen) {
      playGiftReveal();
      setIsOpen(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#ffd700', '#f8a5c2', '#ffffff', '#e84393'],
      });
    }
  };

  const handleSaveCustomMsg = (e) => {
    e.preventDefault();
    setSurpriseData({ ...surpriseData, revealedMessage: customMsg });
    setIsEditing(false);
  };

  return (
    <section id="page-10" className="section-wrapper" style={{ position: 'relative', textAlign: 'center' }}>
      {/* Section Header */}
      <div style={{ maxWidth: '720px', margin: '0 auto 48px auto' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · MYSTERY VAULT
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
          The Secret Surprise
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          Something special waiting inside this ribbon-wrapped keepsake box. Click to unwrap your Chapter 20 gifts!
        </p>
      </div>

      {/* Gift Box Container */}
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        {!isOpen ? (
          /* Wrapped Animated Gift Box */
          <div
            onClick={handleOpenGift}
            className="glass-panel"
            style={{
              padding: '60px 24px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #fff5f8 0%, #fffbfd 100%)',
              border: '2px dashed #deb3c0',
              borderRadius: '28px',
              boxShadow: '0 20px 48px -10px rgba(180, 80, 110, 0.22)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.35s ease',
            }}
          >
            {/* Glowing Halo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 220, 230, 0.8) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />

            {/* 3D Gift Box Graphic */}
            <div
              style={{
                position: 'relative',
                marginBottom: '24px',
                animation: 'floatGentle 4s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #f8a5c2 0%, #ba6378 100%)',
                  boxShadow: '0 16px 36px rgba(186, 99, 120, 0.38), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Horizontal Ribbon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '24px',
                    transform: 'translateY(-50%)',
                    background: '#ffd470',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                />
                {/* Vertical Ribbon */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '24px',
                    transform: 'translateX(-50%)',
                    background: '#ffd470',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                />
                <Gift size={56} color="#ffffff" style={{ zIndex: 2 }} />
              </div>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '1.9rem',
                fontWeight: 600,
                color: '#472935',
                marginBottom: '8px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {surpriseData.boxTitle}
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#7d5964', marginBottom: '24px', position: 'relative', zIndex: 2 }}>
              {surpriseData.boxSubtitle}
            </p>

            <button
              onClick={handleOpenGift}
              className="btn-primary"
              style={{
                fontSize: '1rem',
                padding: '0.9rem 2.4rem',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Sparkles size={18} /> OPEN YOUR GIFT 🎁
            </button>
          </div>
        ) : (
          /* Revealed Gift Contents */
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(28px, 5vw, 48px)',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #fff7fa 100%)',
              border: '2px solid #d48296',
              boxShadow: '0 25px 60px -15px rgba(180, 80, 110, 0.28)',
              animation: 'unfoldCard 0.6s ease-out',
              textAlign: 'left',
            }}
          >
            {/* Top Row: Revealed Badge & Edit Message button */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '20px',
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
                }}
              >
                <Star size={14} fill="#ba6378" /> SURPRISE UNLOCKED
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn-secondary"
                style={{ padding: '4px 12px', fontSize: '0.78rem' }}
              >
                <Edit3 size={12} /> {isEditing ? 'Cancel Edit' : 'Edit Surprise Message'}
              </button>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#472935',
                marginBottom: '14px',
              }}
            >
              {surpriseData.revealedTitle}
            </h3>

            {/* Custom Message Editor */}
            {isEditing ? (
              <form onSubmit={handleSaveCustomMsg} style={{ marginBottom: '20px' }}>
                <textarea
                  rows={3}
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #deb3c0',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    marginBottom: '8px',
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '6px 16px', fontSize: '0.82rem' }}>
                  Save Surprise Message
                </button>
              </form>
            ) : (
              <p
                style={{
                  fontSize: '1rem',
                  color: '#67404e',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                {surpriseData.revealedMessage}
              </p>
            )}

            {/* Surprise Polaroid + Coupons Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              {/* Special Keepsake Polaroid */}
              <div
                className="polaroid-frame"
                style={{
                  transform: 'rotate(-2deg)',
                  maxWidth: '320px',
                  margin: '0 auto',
                  width: '100%',
                }}
              >
                <div className="washi-tape" style={{ background: '#ffd79e' }} />
                <div
                  style={{
                    width: '100%',
                    height: '280px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    background: '#fff2e5',
                    marginBottom: '12px',
                  }}
                >
                  <img
                    src={surpriseImage}
                    alt="Surprise Keepsake"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="font-script" style={{ fontSize: '1.4rem', color: '#472935' }}>
                    A smile to treasure forever
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#946573' }}>SURPRISE KEEPSAKE PHOTO</div>
                </div>
              </div>

              {/* 4 Collectible Friendship Coupon Passes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#843b4e',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '2px',
                  }}
                >
                  4 Collectible Friendship Passes (Never Expire):
                </div>

                {surpriseData.coupons.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1px solid rgba(220, 180, 195, 0.4)',
                      boxShadow: '0 2px 6px rgba(180, 100, 125, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                        <Ticket size={14} color="#ba6378" />
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#3e242d' }}>{c.title}</h4>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#7d5964', lineHeight: 1.4 }}>{c.desc}</p>
                    </div>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: '#fbebf0',
                        color: '#94495c',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        fontFamily: 'monospace',
                        flexShrink: 0,
                      }}
                    >
                      {c.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
