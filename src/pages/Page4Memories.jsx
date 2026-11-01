import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Compass, Heart, KeyRound, Maximize2, Sparkles, X } from 'lucide-react';
import { friendshipMemoriesData } from '../data/sandyaData';
import LightboxModal from '../components/LightboxModal';
import { playChime, playConfettiPop } from '../utils/audio';

export default function Page4Memories() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [scratchRevealed, setScratchRevealed] = useState(false);
  const [secretMemoryNote, setSecretMemoryNote] = useState(null);

  const openLightbox = (index) => {
    playChime();
    setLightboxIndex(index);
  };

  const handleRevealScratch = () => {
    if (!scratchRevealed) {
      playConfettiPop();
      setScratchRevealed(true);
    }
  };

  const handleShowSecretMemory = (mem, e) => {
    e.stopPropagation();
    playChime();
    setSecretMemoryNote(mem);
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
          <Sparkles size={14} /> ROOM 04 · OUR MEMORIES
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
          Our Memories
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          {friendshipMemoriesData.subtitle} Click the polaroids to view full size, or tap the little key on each card to
          unlock its hidden memory message.
        </p>
      </motion.div>

      {/* Hidden Room Surprise: Interactive Scratch-to-Reveal Secret Code */}
      <div style={{ maxWidth: '640px', margin: '0 auto 48px auto', textAlign: 'center' }}>
        <div
          onClick={handleRevealScratch}
          className="glass-panel"
          style={{
            padding: '24px',
            borderRadius: '20px',
            cursor: scratchRevealed ? 'default' : 'pointer',
            border: '2px dashed #ba6378',
            background: scratchRevealed ? 'linear-gradient(135deg, #ffffff, #fff2f6)' : 'linear-gradient(135deg, #fbe4eb, #fbeff3)',
            boxShadow: '0 8px 24px rgba(186, 99, 120, 0.15)',
            transition: 'all 0.3s ease',
          }}
        >
          {!scratchRevealed ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontSize: '1.8rem' }}>🎁</div>
              <h4 className="font-serif" style={{ fontSize: '1.3rem', color: '#472935' }}>
                Tap to Scratch & Reveal Your Secret Friendship Code
              </h4>
              <span style={{ fontSize: '0.8rem', color: '#ba6378', fontWeight: 700 }}>
                (Tap anywhere inside this box!)
              </span>
            </div>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>💖</div>
              <h4 className="font-serif" style={{ fontSize: '1.35rem', color: '#843b4e', fontWeight: 700, marginBottom: '6px' }}>
                Friendship Code Unlocked!
              </h4>
              <p style={{ fontSize: '0.94rem', color: '#5e3c46', fontStyle: 'italic', lineHeight: 1.5 }}>
                {friendshipMemoriesData.scratchSurprise.hiddenText}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scrapbook Clustered Grid */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto 60px auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}
      >
        {friendshipMemoriesData.memories.map((mem, index) => (
          <motion.div
            key={mem.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            style={{
              minHeight: '380px',
              cursor: 'pointer',
            }}
            onClick={() => openLightbox(index)}
          >
            <div
              className="polaroid-frame"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
                boxShadow: '0 16px 36px -10px rgba(180, 95, 120, 0.16)',
                position: 'relative',
                transform: index % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
              }}
            >
              <div className="washi-tape" />

              <div>
                <div
                  style={{
                    width: '100%',
                    height: '280px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    background: '#fbebf0',
                    marginBottom: '14px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={mem.src}
                    alt={mem.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: mem.objectPosition || 'center',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6e4752',
                    }}
                  >
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      color: '#ba6378',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      marginBottom: '4px',
                    }}
                  >
                    <Calendar size={13} /> {mem.date}
                  </div>

                  <h4 className="font-serif" style={{ fontSize: '1.35rem', color: '#3e242d', marginBottom: '6px' }}>
                    {mem.title}
                  </h4>

                  <p className="font-script" style={{ fontSize: '1.2rem', color: '#67404e', lineHeight: 1.4, marginBottom: '10px' }}>
                    “{mem.caption}”
                  </p>

                  <button
                    onClick={(e) => handleShowSecretMemory(mem, e)}
                    style={{
                      border: 'none',
                      background: '#fbebf0',
                      color: '#843b4e',
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
                    <KeyRound size={12} color="#ba6378" /> Secret Memory Note
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(0,0,0,0.05)',
                  fontSize: '0.76rem',
                  color: '#946573',
                  marginTop: '10px',
                }}
              >
                <span style={{ fontWeight: 600 }}>✦ {mem.tag}</span>
                <span>Tap photo to expand</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secret Memory Note Modal */}
      <AnimatePresence>
        {secretMemoryNote && (
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
            onClick={() => setSecretMemoryNote(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '28px',
                borderRadius: '20px',
                background: '#ffffff',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSecretMemoryNote(null)}
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

              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💌</div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#472935', marginBottom: '6px' }}>
                {secretMemoryNote.title}
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#67404e', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                “{secretMemoryNote.secretMessage}”
              </p>
              <button
                onClick={() => setSecretMemoryNote(null)}
                className="btn-primary"
                style={{ padding: '6px 20px', fontSize: '0.85rem' }}
              >
                Keep in Memory Vault ♡
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Script Accent Banner */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div
          className="font-script"
          style={{
            fontSize: '2.5rem',
            color: '#ba6378',
            letterSpacing: '0.02em',
          }}
        >
          Friends Through The Years ✨
        </div>
      </div>

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

        <Link to="/calendar" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Your Birthday Calendar & Gift</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Lightbox */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={friendshipMemoriesData.memories}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % friendshipMemoriesData.memories.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + friendshipMemoriesData.memories.length) % friendshipMemoriesData.memories.length)}
      />
    </div>
  );
}
