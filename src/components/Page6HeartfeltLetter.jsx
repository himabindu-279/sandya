import { useState } from 'react';
import { Heart, Mail, MailOpen, Sparkles } from 'lucide-react';
import { heartfeltLetter } from '../data/universeData';
import { playChime, playSealCrack } from '../utils/audio';

export default function Page6HeartfeltLetter({ friendName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      playSealCrack();
    } else {
      playChime();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="page-6" className="section-wrapper" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · FROM THE HEART
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
          A Letter For You
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          Words written from the heart of a loyal friend, celebrating the person you are today and all the magic
          waiting for you in your twenties.
        </p>
      </div>

      {/* Interactive Letter Experience Container */}
      <div style={{ maxWidth: '780px', margin: '0 auto', perspective: '1000px' }}>
        {!isOpen ? (
          /* Folded Envelope with Wax Seal */
          <div
            onClick={toggleLetter}
            className="glass-panel"
            style={{
              padding: '60px 30px',
              textAlign: 'center',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #fff7fa 0%, #fffcfd 50%, #fef0f4 100%)',
              border: '2px solid rgba(230, 180, 195, 0.6)',
              borderRadius: '24px',
              boxShadow: '0 20px 48px -12px rgba(180, 80, 110, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              transition: 'all 0.35s ease',
            }}
          >
            <div
              className="wax-seal"
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(153, 31, 52, 0.45)',
                animation: 'floatGentle 3s ease-in-out infinite',
              }}
            >
              <Heart size={32} fill="#ffffff" />
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#94495c',
                  marginBottom: '8px',
                }}
              >
                CONFIDENTIAL FRIENDSHIP SEAL · FOR {friendName.toUpperCase()}
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#472935',
                  marginBottom: '6px',
                }}
              >
                Click to Unseal Your Birthday Letter
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#7d5964' }}>
                A digital handwritten keepsake written especially for Chapter 20
              </p>
            </div>

            <div
              className="glass-pill"
              style={{
                padding: '8px 22px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#ba6378',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(220, 160, 180, 0.5)',
              }}
            >
              <MailOpen size={16} /> TAP TO READ LETTER ♡
            </div>
          </div>
        ) : (
          /* Unfolded Parchment Letter */
          <div
            className="letter-parchment"
            style={{
              padding: 'clamp(28px, 6vw, 56px)',
              borderRadius: '20px',
              animation: 'unfoldLetter 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
              position: 'relative',
            }}
          >
            {/* Top Date & Re-fold Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(210, 175, 185, 0.35)',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontSize: '1.05rem',
                  color: '#843b4e',
                  fontStyle: 'italic',
                }}
              >
                Written on: {heartfeltLetter.date}
              </div>

              <button
                onClick={toggleLetter}
                className="btn-secondary"
                style={{
                  padding: '6px 14px',
                  fontSize: '0.82rem',
                }}
              >
                <Mail size={14} /> Fold Letter Back
              </button>
            </div>

            {/* Salutation */}
            <h3
              className="font-serif"
              style={{
                fontSize: '1.9rem',
                fontWeight: 700,
                color: '#472935',
                marginBottom: '24px',
                fontStyle: 'italic',
              }}
            >
              Dearest {friendName},
            </h3>

            {/* Body Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {heartfeltLetter.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: 1.85,
                    color: '#472935',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Sign-Off & Signature */}
            <div
              style={{
                marginTop: '40px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(210, 175, 185, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <div style={{ fontSize: '0.96rem', color: '#7d5964', fontStyle: 'italic' }}>
                {heartfeltLetter.signOff}
              </div>
              <div
                className="font-script"
                style={{
                  fontSize: '2.2rem',
                  color: '#ba6378',
                  marginTop: '4px',
                }}
              >
                {heartfeltLetter.sender}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes unfoldLetter {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
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
