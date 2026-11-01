import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Heart, Maximize2, Sparkles, X } from 'lucide-react';
import { familyWorldData } from '../data/sandyaData';
import LightboxModal from '../components/LightboxModal';
import { playChime, playSealCrack } from '../utils/audio';

export default function Page2FamilyWorld() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [secretFamilyNote, setSecretFamilyNote] = useState(null);

  const openLightbox = (idx) => {
    playChime();
    setLightboxIndex(idx);
  };

  const handleRevealSecretNote = (photo, e) => {
    e.stopPropagation();
    playSealCrack();
    setSecretFamilyNote(photo);
  };

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
          <Sparkles size={14} /> ROOM 01 · YOUR FAMILY HERITAGE
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
          Your Family World
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          {familyWorldData.heroSubtitle} Honoring the unconditional love, deep roots, and shared warmth that walk beside
          you in every single chapter.
        </p>
      </motion.div>

      {/* Hero Family Photo Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: '960px', margin: '0 auto 56px auto' }}
      >
        <div
          onClick={() => openLightbox(0)}
          className="glass-panel"
          style={{
            padding: '16px',
            borderRadius: '24px',
            cursor: 'pointer',
            background: 'linear-gradient(145deg, #ffffff, #fff8f5)',
            border: '2px solid rgba(230, 200, 190, 0.6)',
            boxShadow: '0 20px 50px -10px rgba(180, 110, 100, 0.16)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(280px, 50vw, 480px)',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#f9eee8',
            }}
          >
            <img
              src={familyWorldData.photos[0].src}
              alt="Your Family Main Portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(50, 30, 25, 0.6) 0%, transparent 45%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                color: '#ffffff',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#ffdcd2',
                  }}
                >
                  YOUR FAMILY HERO PORTRAIT
                </span>
                <h3 className="font-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 600 }}>
                  {familyWorldData.photos[0].title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#f5ebe6', fontStyle: 'italic' }}>
                  {familyWorldData.photos[0].caption}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Maximize2 size={18} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Creative Scrapbook Collage */}
      <div style={{ maxWidth: '1050px', margin: '0 auto 60px auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#472935' }}>
            Your Cherished Family Moments
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#7d5964' }}>
            Click any photograph to view in full resolution or tap the heart to discover its hidden memory detail
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {familyWorldData.photos.slice(1).map((photo, index) => {
            const actualIndex = index + 1;
            return (
              <motion.div
                key={photo.id}
                whileHover={{ y: -6, rotate: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(actualIndex)}
                className="polaroid-frame"
                style={{
                  transform: `rotate(${photo.rotation || '0deg'})`,
                  cursor: 'pointer',
                  background: '#ffffff',
                  boxShadow: '0 16px 36px -10px rgba(160, 90, 80, 0.16)',
                }}
              >
                {/* Pearl Pushpin Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #ffffff, #d2baa8)',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    width: '100%',
                    height: '280px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    background: '#f9eee8',
                    marginBottom: '14px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6e4752',
                    }}
                  >
                    <Maximize2 size={13} />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.74rem', color: '#b3785a', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {photo.tag}
                  </div>
                  <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#3e242d', marginBottom: '4px' }}>
                    {photo.title}
                  </h4>
                  <p className="font-script" style={{ fontSize: '1.15rem', color: '#7d5964', marginBottom: '10px' }}>
                    “{photo.caption}”
                  </p>

                  <button
                    onClick={(e) => handleRevealSecretNote(photo, e)}
                    style={{
                      border: 'none',
                      background: '#fbebf0',
                      color: '#ba6378',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Heart size={12} fill="#ba6378" /> Tap for Secret Memory Detail
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Torn Paper Quote Note */}
          <div
            className="letter-parchment"
            style={{
              padding: '28px 24px',
              borderRadius: '16px',
              border: '1px solid rgba(210, 180, 160, 0.5)',
              boxShadow: '0 12px 30px -8px rgba(160, 90, 80, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '280px',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌾</div>
            <p
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: '#472935',
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              {familyWorldData.quote}
            </p>
            <div className="font-script" style={{ fontSize: '1.35rem', color: '#b3785a' }}>
              Your family is forever
            </div>
          </div>
        </div>
      </div>

      {/* Secret Family Note Reveal Modal (Hidden Surprise) */}
      <AnimatePresence>
        {secretFamilyNote && (
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
            onClick={() => setSecretFamilyNote(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '480px',
                padding: '28px',
                borderRadius: '20px',
                background: '#ffffff',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSecretFamilyNote(null)}
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

              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏡</div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#472935', marginBottom: '8px' }}>
                {secretFamilyNote.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#67404e', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                “{secretFamilyNote.secretNote}”
              </p>
              <button
                onClick={() => setSecretFamilyNote(null)}
                className="btn-primary"
                style={{ padding: '6px 20px', fontSize: '0.85rem' }}
              >
                Close Note
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

        <Link to="/portraits" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Your World</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Lightbox */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={familyWorldData.photos}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % familyWorldData.photos.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + familyWorldData.photos.length) % familyWorldData.photos.length)}
      />
    </div>
  );
}
