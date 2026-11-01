import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Star } from 'lucide-react';
import { roomsList, sandyaConfig } from '../data/sandyaData';
import { playChime } from '../utils/audio';

export default function PageWorldHub() {
  return (
    <div className="section-wrapper" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px auto' }}
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
          <Sparkles size={14} /> EXPLORATION HUB
        </div>

        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 700,
            color: '#3e242d',
            lineHeight: 1.12,
            marginBottom: '14px',
          }}
        >
          A World of Your Own
        </h1>

        <p style={{ fontSize: '1.08rem', color: '#7d5964', lineHeight: 1.6 }}>
          Seven dedicated rooms crafted to celebrate your life, family roots, unforgettable solo moments, friendship
          memories, and future dreams. Step into any room to begin exploring.
        </p>
      </motion.div>

      {/* Grid of 7 World Rooms */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '28px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {roomsList.map((room, idx) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <Link
              to={room.path}
              onClick={playChime}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              className="glass-card"
            >
              <div
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 250, 252, 0.9))',
                }}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px',
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: room.color || '#fce4eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        boxShadow: '0 4px 14px rgba(180, 100, 125, 0.12)',
                      }}
                    >
                      {room.icon}
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#ba6378',
                        background: '#fbebf0',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        border: '1px solid #f2c7d5',
                      }}
                    >
                      {room.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 600,
                      color: '#472935',
                      marginBottom: '8px',
                    }}
                  >
                    {room.title}
                  </h3>

                  {/* Short subtitle / description */}
                  <p style={{ fontSize: '0.92rem', color: '#7d5964', lineHeight: 1.5, marginBottom: '20px' }}>
                    {room.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(220, 180, 195, 0.25)',
                    color: '#ba6378',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                  }}
                >
                  <span>Step Inside Room</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
