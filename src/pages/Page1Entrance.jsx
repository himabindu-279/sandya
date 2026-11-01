import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Star, Compass, ArrowRight, Mail, Heart } from 'lucide-react';
import { sandyaConfig, imageMap } from '../data/sandyaData';
import { playChime, playSealCrack, startAmbientMusic } from '../utils/audio';

export default function Page1Entrance() {
  const navigate = useNavigate();
  const [invitationUnsealed, setInvitationUnsealed] = useState(false);

  const handleUnsealInvitation = () => {
    if (!invitationUnsealed) {
      playSealCrack();
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#ffd700', '#f8a5c2', '#ffffff', '#e84393'],
      });
      setInvitationUnsealed(true);
    }
  };

  const handleEnter = () => {
    startAmbientMusic();
    playChime();
    navigate('/world');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Dreamy Ambient Light Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 222, 233, 0.8) 0%, rgba(246, 230, 250, 0.45) 45%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 10, maxWidth: '780px', width: '100%' }}
      >
        {/* Subtle Pill Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 22px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(220, 160, 180, 0.45)',
            boxShadow: '0 4px 16px rgba(180, 90, 115, 0.1)',
            marginBottom: '24px',
          }}
        >
          <Sparkles size={16} color="#ba6378" />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.84rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#843b4e',
            }}
          >
            {sandyaConfig.tagline}
          </span>
          <Sparkles size={16} color="#ba6378" />
        </div>

        {/* Main Hero Name & Chapter 20 */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(3.2rem, 8vw, 5.8rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#3e242d',
            marginBottom: '12px',
            letterSpacing: '0.04em',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #ba6378 0%, #a8475e 50%, #873347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {sandyaConfig.name.toUpperCase()}
          </span>
        </h1>

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
          <span
            className="font-serif"
            style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 600,
              color: '#ba6378',
            }}
          >
            {sandyaConfig.milestone}
          </span>
          <span style={{ color: '#deb3c0' }}>•</span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#7d5964',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Calendar size={15} color="#ba6378" /> {sandyaConfig.celebrationDate}
          </span>
        </div>

        {/* Hero Portrait Frame */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            width: '270px',
            height: '340px',
            margin: '0 auto 36px auto',
            borderRadius: '26px',
            padding: '8px',
            background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.95), rgba(255, 255, 255, 0.9))',
            border: '2px solid rgba(230, 185, 200, 0.55)',
            boxShadow: '0 20px 50px -10px rgba(180, 95, 120, 0.22), 0 0 35px rgba(255, 215, 225, 0.4)',
          }}
        >
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
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              background: '#fcebf0',
            }}
          >
            <img
              src={imageMap.sandyaHero}
              alt={sandyaConfig.name}
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
              Sandya
            </div>
          </div>
        </motion.div>

        {/* Hidden Room Surprise: Interactive Sealed Invitation */}
        <div style={{ maxWidth: '480px', margin: '0 auto 36px auto' }}>
          {!invitationUnsealed ? (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleUnsealInvitation}
              className="glass-panel"
              style={{
                padding: '20px 24px',
                borderRadius: '20px',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #ffffff, #fff2f6)',
                border: '2px dashed #ba6378',
                boxShadow: '0 12px 30px rgba(186, 99, 120, 0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #ba6378, #873347)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(135, 51, 71, 0.35)',
                  fontSize: '1.2rem',
                }}
              >
                💌
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#ba6378', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  SURPRISE INVITATION
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#3e242d' }}>
                  Tap to Unseal Your Chapter 20 Invitation
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="letter-parchment"
              style={{
                padding: '24px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 16px 36px rgba(180, 95, 120, 0.2)',
                border: '2px solid rgba(220, 160, 180, 0.6)',
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#ba6378', fontWeight: 700, marginBottom: '6px' }}>
                <Heart size={14} fill="#ba6378" /> OFFICIAL BIRTHDAY INVITATION
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#472935', fontWeight: 700, marginBottom: '8px' }}>
                Welcome to A World of Your Own
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#67404e', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
                “You are cordially invited to step into a digital world created to celebrate 20 extraordinary years of you. Every room holds a secret waiting for your discovery.”
              </p>
              <div className="font-script" style={{ fontSize: '1.35rem', color: '#ba6378' }}>
                Happy 20th Birthday, Sandya! ✨
              </div>
            </motion.div>
          )}
        </div>

        {/* Animated ENTER Button with strict direct second-person language */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <button
            onClick={handleEnter}
            className="btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '1.15rem 3rem',
              borderRadius: '9999px',
            }}
          >
            <Compass size={20} />
            ENTER YOUR LITTLE UNIVERSE
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
