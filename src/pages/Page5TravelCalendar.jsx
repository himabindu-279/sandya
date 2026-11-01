import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight, Calendar, Compass, Crown, Gift, Heart, Mail, PartyPopper, RotateCcw, Sparkles, Star, Ticket, X } from 'lucide-react';
import { calendarAndGiftData } from '../data/sandyaData';
import { playChime, playConfettiPop, playGiftReveal } from '../utils/audio';

export default function Page5TravelCalendar() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [birthdaySurpriseOpen, setBirthdaySurpriseOpen] = useState(false);

  // November 2026 Calendar generation
  // Nov 1, 2026 is a Sunday. (Days 1 to 30)
  const daysInNov = 30;
  // Sunday start offset: Nov 1 is Sunday (index 0 if Sun is first, or 6 if Mon is first).
  // Standard Mon - Sun format: Nov 1 is Sunday, so offset is 6 days (Mon-Sat are empty for week 1)
  const dayOffset = 6;
  const calendarDays = [];
  for (let i = 0; i < dayOffset; i++) {
    calendarDays.push({ empty: true });
  }
  for (let d = 1; d <= daysInNov; d++) {
    calendarDays.push({
      day: d,
      isBirthday: d === 2,
    });
  }

  const handleDayClick = (day) => {
    if (day === 2) {
      playConfettiPop();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#f8a5c2', '#ffffff', '#e84393'],
      });
      setBirthdaySurpriseOpen(true);
    } else {
      playChime();
    }
  };

  const handleOpenGift = () => {
    if (!giftOpened) {
      playGiftReveal();
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#ffd700', '#f8a5c2', '#ffffff', '#e84393', '#ff9ff3'],
      });
      setGiftOpened(true);
    }
  };

  const handleCloseGift = () => {
    playChime();
    setGiftOpened(false);
  };

  const handleReplayLetterConfetti = () => {
    playConfettiPop();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#f8a5c2', '#ffffff', '#e84393'],
    });
  };

  const letter = calendarAndGiftData.giftLetter;

  return (
    <div className="section-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}
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
          <Sparkles size={14} /> ROOM 05 · YOUR BIRTHDAY CALENDAR & GIFT
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
          Your Birthday Calendar & Keepsake Gift
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          {calendarAndGiftData.subtitle} Tap your special birthday date on the calendar, and unwrap your keepsake gift box waiting just for you!
        </p>
      </motion.div>

      {/* SECTION 1: November 2026 Calendar Highlighting Her 20th Birthday */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: '680px', margin: '0 auto 64px auto' }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '32px 24px',
            background: 'linear-gradient(145deg, #ffffff, #fff7fa)',
            border: '2px solid rgba(220, 175, 195, 0.6)',
            boxShadow: '0 20px 48px -10px rgba(180, 95, 120, 0.2)',
            borderRadius: '24px',
            position: 'relative',
          }}
        >
          {/* Calendar Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(220, 180, 195, 0.3)',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#ba6378',
                }}
              >
                YOUR BIRTHDAY MONTH
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#472935', fontWeight: 700 }}>
                November 2026
              </h3>
            </div>

            <div
              className="glass-pill"
              style={{
                padding: '6px 14px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#843b4e',
                border: '1px solid rgba(220, 160, 180, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Crown size={15} color="#d4a373" fill="#d4a373" /> Turning 20
            </div>
          </div>

          {/* Weekday headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#946573',
              marginBottom: '10px',
            }}
          >
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
              <div key={d} style={{ padding: '4px' }}>
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '6px',
            }}
          >
            {calendarDays.map((item, idx) => {
              if (item.empty) {
                return <div key={`empty-${idx}`} style={{ height: '46px' }} />;
              }

              if (item.isBirthday) {
                return (
                  <motion.div
                    key={`day-${item.day}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDayClick(item.day)}
                    style={{
                      height: '52px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #ba6378 0%, #a8475e 50%, #873347 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(186, 99, 120, 0.45)',
                      border: '2px solid #ffffff',
                      position: 'relative',
                    }}
                    title="Click for your birthday surprise!"
                  >
                    <div style={{ position: 'absolute', top: '-10px', fontSize: '13px' }}>👑</div>
                    <span style={{ fontSize: '1rem', fontWeight: 800 }}>02</span>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.04em' }}>YOU!</span>
                  </motion.div>
                );
              }

              return (
                <div
                  key={`day-${item.day}`}
                  onClick={() => handleDayClick(item.day)}
                  style={{
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(220, 180, 195, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#472935',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {item.day}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.84rem', color: '#ba6378', fontWeight: 600 }}>
            ✦ Tap Day 02 to unlock your secret birthday passes & wishes!
          </div>
        </div>
      </motion.div>

      {/* Birthday Surprise Reveal Modal (Triggered by Day 2) */}
      <AnimatePresence>
        {birthdaySurpriseOpen && (
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
            onClick={() => setBirthdaySurpriseOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '620px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px 24px',
                background: 'linear-gradient(145deg, #ffffff, #fff7fa)',
                borderRadius: '24px',
                border: '2px solid #d48296',
                boxShadow: '0 25px 60px -15px rgba(180, 80, 110, 0.3)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setBirthdaySurpriseOpen(false)}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  border: 'none',
                  background: 'rgba(235, 200, 215, 0.3)',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#6e4752',
                }}
              >
                <X size={18} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '6px' }}>👑</div>
                <h3 className="font-serif" style={{ fontSize: '1.9rem', color: '#472935', fontWeight: 700 }}>
                  November 2, 2026: Chapter 20!
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#7d5964' }}>
                  Your official 20th Birthday VIP friendship passes. Keep them handy all year round!
                </p>
              </div>

              {/* Passes List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {calendarAndGiftData.birthdayPasses.map((p) => (
                  <div
                    key={p.code}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '14px',
                      background: '#ffffff',
                      border: '1px dashed #d48296',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                        <Ticket size={15} color="#ba6378" />
                        <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#3e242d' }}>{p.title}</h4>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#7d5964' }}>{p.desc}</p>
                    </div>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        background: '#fbebf0',
                        color: '#94495c',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        fontFamily: 'monospace',
                        flexShrink: 0,
                      }}
                    >
                      {p.code}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <button
                  onClick={() => setBirthdaySurpriseOpen(false)}
                  className="btn-primary"
                  style={{ padding: '8px 24px', fontSize: '0.9rem' }}
                >
                  Save Passes & Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION 2: Interactive Keepsake Gift Box & Letter */}
      <div style={{ maxWidth: '820px', margin: '0 auto 60px auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#ba6378',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            <Gift size={18} /> YOUR SPECIAL BIRTHDAY KEEPSAKE
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              color: '#3e242d',
              lineHeight: 1.15,
              fontWeight: 700,
              marginBottom: '10px',
            }}
          >
            A Gift Box Just for You
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#7d5964', maxWidth: '560px', margin: '0 auto' }}>
            Wrapped in satin ribbons and sealed with warmest friendship. Tap to untie the ribbon and read the letter written especially for your 20th birthday.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!giftOpened ? (
            /* Closed 3D Gift Box */
            <motion.div
              key="closed-gift-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpenGift}
                style={{
                  position: 'relative',
                  width: 'min(320px, 85vw)',
                  height: '280px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 20px 40px rgba(186, 99, 120, 0.3))',
                }}
              >
                {/* 3D Gift Box Body */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '240px',
                    height: '190px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #e597ab 0%, #ba6378 50%, #944054 100%)',
                    boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -6px 12px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Vertical Gold Ribbon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '42px',
                      background: 'linear-gradient(90deg, #d4af37, #ffe082 50%, #c59b27)',
                      boxShadow: '0 0 10px rgba(255, 224, 130, 0.5)',
                    }}
                  />
                  {/* Horizontal Gold Ribbon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      transform: 'translateY(-50%)',
                      height: '38px',
                      background: 'linear-gradient(180deg, #d4af37, #ffe082 50%, #c59b27)',
                      boxShadow: '0 0 10px rgba(255, 224, 130, 0.5)',
                    }}
                  />
                </div>

                {/* 3D Gift Box Lid */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    bottom: '165px',
                    width: '264px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #f2adc0 0%, #c9758a 60%, #9e465b 100%)',
                    boxShadow: '0 8px 20px rgba(130, 50, 70, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
                    zIndex: 2,
                  }}
                >
                  {/* Lid Vertical Gold Ribbon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '42px',
                      background: 'linear-gradient(90deg, #d4af37, #ffe082 50%, #c59b27)',
                    }}
                  />
                </motion.div>

                {/* Golden Ribbon Bow on Top */}
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    bottom: '200px',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Left Bow Loop */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50% 50% 10% 50%',
                      transform: 'rotate(-30deg)',
                      background: 'linear-gradient(135deg, #ffe082, #d4af37)',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                      marginRight: '-10px',
                    }}
                  />
                  {/* Bow Center Knot */}
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #fff3b0 30%, #d4af37 100%)',
                      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.3)',
                      zIndex: 4,
                    }}
                  />
                  {/* Right Bow Loop */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50% 50% 50% 10%',
                      transform: 'rotate(30deg)',
                      background: 'linear-gradient(135deg, #d4af37, #ffe082)',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                      marginLeft: '-10px',
                    }}
                  />
                </motion.div>

                {/* Gift Tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '18px',
                    padding: '6px 14px',
                    background: '#fffdf8',
                    border: '1px solid #e0c8b0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transform: 'rotate(8deg)',
                    zIndex: 5,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#843b4e',
                  }}
                >
                  ✦ For Sandya · Chapter 20
                </div>
              </motion.div>

              {/* Call to action pill */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenGift}
                className="btn-primary"
                style={{
                  marginTop: '28px',
                  padding: '12px 30px',
                  fontSize: '0.96rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 12px 28px rgba(186, 99, 120, 0.35)',
                }}
              >
                <Gift size={18} />
                <span>Tap to Untie the Ribbon & Open Your Letter</span>
              </motion.button>
            </motion.div>
          ) : (
            /* Unfolded Beautiful Keepsake Letter */
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                maxWidth: '720px',
                margin: '0 auto',
                background: 'linear-gradient(145deg, #fffcf7 0%, #fff7fa 100%)',
                borderRadius: '24px',
                border: '2px solid rgba(220, 175, 195, 0.55)',
                boxShadow: '0 24px 60px -12px rgba(186, 99, 120, 0.22)',
                padding: 'clamp(28px, 6vw, 48px)',
                position: 'relative',
              }}
            >
              {/* Top Wax Seal */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #e88fa5, #ba6378 70%, #873347 100%)',
                  boxShadow: '0 6px 18px rgba(186, 99, 120, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                }}
                title="Sealed for Sandya"
              >
                <Heart size={20} fill="#ffffff" />
              </div>

              {/* Letter Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(220, 180, 195, 0.35)',
                  paddingBottom: '16px',
                  marginTop: '12px',
                  marginBottom: '26px',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="#ba6378" />
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#ba6378',
                    }}
                  >
                    {letter.title}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#8e5d6d',
                    background: '#fbebf0',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                  }}
                >
                  {letter.date}
                </span>
              </div>

              {/* Salutation */}
              <h3
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                  fontWeight: 700,
                  color: '#3e242d',
                  marginBottom: '16px',
                }}
              >
                {letter.salutation}
              </h3>

              {/* Milestone Journey Time Completed Grid */}
              {letter.milestoneStats && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '12px',
                    marginBottom: '26px',
                    padding: '16px',
                    borderRadius: '16px',
                    background: 'rgba(254, 235, 242, 0.65)',
                    border: '1px dashed #d48296',
                  }}
                >
                  {letter.milestoneStats.map((stat, sIdx) => (
                    <div key={sIdx} style={{ textAlign: 'center', padding: '6px' }}>
                      <div
                        className="font-serif"
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 800,
                          color: '#ba6378',
                          lineHeight: 1.1,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#472935' }}>
                        {stat.unit}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#8e5d6d' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Letter Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                {letter.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: 'clamp(0.98rem, 2vw, 1.1rem)',
                      lineHeight: 1.8,
                      color: '#4a2f39',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Signature Block */}
              <div
                style={{
                  borderTop: '1px solid rgba(220, 180, 195, 0.35)',
                  paddingTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <div
                    className="font-script"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: '#ba6378',
                      lineHeight: 1.2,
                      marginBottom: '4px',
                    }}
                  >
                    {letter.signature}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#8e5d6d', fontWeight: 600 }}>
                    Always cheering in your corner, today & forever.
                  </div>
                </div>

                {/* Letter Actions */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={handleReplayLetterConfetti}
                    className="btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    title="Fire celebratory confetti"
                  >
                    <PartyPopper size={15} color="#ba6378" />
                    <span>Celebrate!</span>
                  </button>

                  <button
                    onClick={handleCloseGift}
                    className="btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    title="Wrap back into gift box"
                  >
                    <RotateCcw size={15} />
                    <span>Fold Back</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

        <Link to="/dreams" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Your Dream Universe</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
