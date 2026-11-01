import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Heart, Maximize2, Sparkles, Star, X } from 'lucide-react';
import { soloPortraitsData } from '../data/sandyaData';
import LightboxModal from '../components/LightboxModal';
import { playChime, playConfettiPop } from '../utils/audio';

export default function Page3JustSandya() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [starSurpriseOpen, setStarSurpriseOpen] = useState(false);

  // Clothesline items for lightbox
  const allSoloPhotos = soloPortraitsData.clothesline.map((item) => ({
    src: item.src,
    title: 'Your World',
    caption: item.caption,
    tag: 'Solo Keepsake',
  }));

  const openLightbox = (index) => {
    playChime();
    setLightboxIndex(index);
  };

  const handleOpenStarSurprise = () => {
    playConfettiPop();
    setStarSurpriseOpen(true);
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
          <Sparkles size={14} /> ROOM 02 · YOUR EDITORIAL SHOWCASE
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
          Your World
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6, marginBottom: '20px' }}>
          {soloPortraitsData.subtitle} A visual editorial celebrating your personal style, contagious smile, and natural
          grace as you enter Chapter 20.
        </p>

        {/* Hidden Room Surprise: Glowing Star Button */}
        <button
          onClick={handleOpenStarSurprise}
          className="glass-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            fontSize: '0.84rem',
            fontWeight: 700,
            color: '#ba6378',
            border: '1.5px solid #d48296',
            background: 'linear-gradient(135deg, #ffffff, #fff2f6)',
            boxShadow: '0 4px 18px rgba(186, 99, 120, 0.22)',
            cursor: 'pointer',
          }}
        >
          <Star size={16} fill="#ffd700" color="#ffd700" />
          <span>✨ Tap the Glowing Star for a Hidden Snapshot</span>
        </button>
      </motion.div>

      {/* Feature 1: The Hanging Clothesline Polaroids */}
      <div style={{ maxWidth: '1050px', margin: '0 auto 64px auto', position: 'relative' }}>
        <div
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #c89578 15%, #c89578 85%, transparent)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
            marginBottom: '-16px',
            position: 'relative',
            zIndex: 1,
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {soloPortraitsData.clothesline.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, rotate: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(idx)}
              className="polaroid-frame"
              style={{
                transform: `rotate(${item.rotation})`,
                cursor: 'pointer',
                paddingTop: '24px',
                background: '#ffffff',
                boxShadow: '0 16px 36px -8px rgba(180, 100, 125, 0.16)',
              }}
            >
              {/* Wooden Peg Graphic */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '28px',
                  background: 'linear-gradient(180deg, #deb887 0%, #c49568 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  zIndex: 10,
                }}
              />

              <div
                style={{
                  width: '100%',
                  height: '240px',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  background: '#fcebf0',
                  marginBottom: '12px',
                  position: 'relative',
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6e4752',
                  }}
                >
                  <Maximize2 size={12} />
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div className="font-script" style={{ fontSize: '1.25rem', color: '#472935' }}>
                  {item.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hidden Star Surprise Modal */}
      <AnimatePresence>
        {starSurpriseOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 110,
              backgroundColor: 'rgba(35, 18, 25, 0.7)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            onClick={() => setStarSurpriseOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '440px',
                padding: '24px',
                borderRadius: '24px',
                background: '#ffffff',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setStarSurpriseOpen(false)}
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
                <Sparkles size={14} /> SECRET SNAPSHOT UNLOCKED
              </div>

              <div
                className="polaroid-frame"
                style={{
                  maxWidth: '300px',
                  margin: '0 auto 16px auto',
                  transform: 'rotate(-2deg)',
                }}
              >
                <div className="washi-tape" style={{ background: '#ffd79e' }} />
                <div style={{ width: '100%', height: '260px', overflow: 'hidden', borderRadius: '4px', background: '#fff2e5', marginBottom: '10px' }}>
                  <img
                    src={soloPortraitsData.surprise.image}
                    alt="Surprise Snapshot"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="font-script" style={{ fontSize: '1.3rem', color: '#472935' }}>
                  {soloPortraitsData.surprise.caption}
                </div>
              </div>

              <button
                onClick={() => setStarSurpriseOpen(false)}
                className="btn-primary"
                style={{ padding: '8px 24px', fontSize: '0.88rem' }}
              >
                Keep Shining ✨
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

        <Link to="/celebration" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Your Birthday Room</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={allSoloPhotos}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % allSoloPhotos.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + allSoloPhotos.length) % allSoloPhotos.length)}
      />
    </div>
  );
}
