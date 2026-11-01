import { useState } from 'react';
import { Calendar, ChevronDown, Heart, Sparkles, Star } from 'lucide-react';
import { playChime, playSealCrack, startAmbientMusic } from '../utils/audio';

export default function Page1Hero({ friendName, heroImage, onEnterUniverse }) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!envelopeOpen) {
      playSealCrack();
      setEnvelopeOpen(true);
    }
  };

  const handleEnterClick = () => {
    startAmbientMusic();
    playChime();
    onEnterUniverse();
  };

  return (
    <section
      id="page-1"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 60px 20px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Decorative ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 226, 235, 0.75) 0%, rgba(245, 235, 250, 0.5) 45%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '880px', width: '100%' }}>
        {/* Subtle pill badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(220, 160, 180, 0.45)',
            boxShadow: '0 4px 16px rgba(180, 90, 115, 0.1)',
            marginBottom: '20px',
          }}
        >
          <Sparkles size={16} color="#ba6378" />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#843b4e',
            }}
          >
            Today, the world celebrates YOU.
          </span>
          <Sparkles size={16} color="#ba6378" />
        </div>

        {/* Main Serif Heading */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: '#3e242d',
            marginBottom: '16px',
            textShadow: '0 2px 10px rgba(180, 100, 120, 0.08)',
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
        </h1>

        {/* Date and Concept Subtitle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#946573',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Calendar size={15} color="#ba6378" /> 02 November 2026
          </span>
          <span style={{ color: '#deb3c0' }}>•</span>
          <span
            className="font-serif"
            style={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#ba6378',
            }}
          >
            Chapter 20
          </span>
          <span style={{ color: '#deb3c0' }}>•</span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#7d5964',
            }}
          >
            Born 2 November 2006
          </span>
        </div>

        {/* Hero Portrait & Interactive Envelope Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {/* Hero Portrait with soft halo */}
          <div
            style={{
              position: 'relative',
              width: '260px',
              height: '320px',
              borderRadius: '24px',
              padding: '8px',
              background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.95), rgba(255, 255, 255, 0.9))',
              border: '2px solid rgba(230, 185, 200, 0.5)',
              boxShadow: '0 20px 48px -10px rgba(180, 95, 120, 0.22), 0 0 40px rgba(255, 215, 225, 0.5)',
            }}
          >
            {/* Soft decorative badge */}
            <div
              className="glass-pill"
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                padding: '6px 14px',
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
              <Star size={13} fill="#d4a373" color="#d4a373" /> CHAPTER 20
            </div>

            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '18px',
                overflow: 'hidden',
                position: 'relative',
                background: '#fcebf0',
              }}
            >
              <img
                src={heroImage}
                alt={friendName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(71, 41, 53, 0.45) 0%, transparent 45%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  color: '#ffffff',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                {friendName}
              </div>
            </div>
          </div>

          {/* Interactive Envelope Invitation Card */}
          <div
            onClick={handleOpenEnvelope}
            style={{
              width: '100%',
              maxWidth: '440px',
              cursor: envelopeOpen ? 'default' : 'pointer',
              perspective: '1000px',
              position: 'relative',
            }}
          >
            {!envelopeOpen ? (
              <div
                className="glass-panel"
                style={{
                  padding: '24px 28px',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(230, 180, 195, 0.6)',
                  background: 'linear-gradient(135deg, rgba(255, 250, 252, 0.95), rgba(254, 240, 245, 0.95))',
                  boxShadow: '0 16px 36px -8px rgba(180, 95, 120, 0.16)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  className="wax-seal"
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 16px rgba(180, 50, 75, 0.4)',
                    animation: 'floatGentle 3s ease-in-out infinite',
                  }}
                >
                  <Heart size={24} fill="#ffffff" />
                </div>

                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: '#472935',
                      marginBottom: '4px',
                    }}
                  >
                    You Have a Birthday Invitation
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#8e5d6d' }}>
                    Click the wax seal to unwrap your special invitation
                  </p>
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#ba6378',
                    letterSpacing: '0.04em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>OPEN YOUR INVITATION ♡</span>
                </div>
              </div>
            ) : (
              <div
                className="glass-panel letter-parchment"
                style={{
                  padding: '28px 24px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  animation: 'unfoldCard 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                  boxShadow: '0 20px 50px -10px rgba(180, 95, 120, 0.25)',
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
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  <Sparkles size={14} /> EXCLUSIVE INVITATION
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#472935',
                    marginBottom: '10px',
                  }}
                >
                  Welcome to Your Little Universe
                </h3>
                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#67404e',
                    marginBottom: '16px',
                  }}
                >
                  Every card, photograph, timeline moment, and interactive memory here was lovingly curated to
                  celebrate the phenomenal friend you are. Today belongs entirely to you.
                </p>
                <div
                  className="font-script"
                  style={{
                    fontSize: '1.4rem',
                    color: '#ba6378',
                  }}
                >
                  Let the celebration begin! ✨
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ENTER HER LITTLE UNIVERSE CTA Button */}
        <div>
          <button
            onClick={handleEnterClick}
            className="btn-primary"
            style={{
              fontSize: '1.05rem',
              padding: '1.1rem 2.8rem',
              borderRadius: '9999px',
            }}
          >
            <Sparkles size={18} />
            ENTER HER LITTLE UNIVERSE ♡
          </button>
        </div>

        {/* Smooth scroll indicator */}
        <div
          onClick={handleEnterClick}
          style={{
            marginTop: '36px',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            color: '#946573',
            fontSize: '0.82rem',
            fontWeight: 500,
          }}
        >
          <span>Scroll to explore</span>
          <ChevronDown size={18} style={{ animation: 'floatGentle 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes unfoldCard {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(15px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
