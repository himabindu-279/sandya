import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { toggleAmbientMusic } from '../utils/audio';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const active = toggleAmbientMusic();
    setIsPlaying(active);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
      }}
    >
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Mute sound' : 'Turn on sound'}
        className="glass-pill"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          cursor: 'pointer',
          border: '1px solid rgba(220, 160, 180, 0.45)',
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(255, 240, 245, 0.95), rgba(255, 255, 255, 0.98))'
            : 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 8px 24px -4px rgba(180, 90, 115, 0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={18} color="#ba6378" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#843b4e',
              }}
            >
              Sound on
            </span>
            {/* Visualizer wave bars */}
            <span style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px', marginLeft: '4px' }}>
              <span
                style={{
                  width: '3px',
                  background: '#d48296',
                  borderRadius: '2px',
                  height: '100%',
                  animation: 'soundWave1 0.8s ease-in-out infinite alternate',
                }}
              />
              <span
                style={{
                  width: '3px',
                  background: '#ba6378',
                  borderRadius: '2px',
                  height: '70%',
                  animation: 'soundWave2 0.7s ease-in-out 0.2s infinite alternate',
                }}
              />
              <span
                style={{
                  width: '3px',
                  background: '#a44e62',
                  borderRadius: '2px',
                  height: '90%',
                  animation: 'soundWave3 0.9s ease-in-out 0.4s infinite alternate',
                }}
              />
            </span>
          </>
        ) : (
          <>
            <VolumeX size={18} color="#946573" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#6e4752',
              }}
            >
              Sound off
            </span>
          </>
        )}
      </button>

      <style>{`
        @keyframes soundWave1 {
          0% { height: 35%; }
          100% { height: 100%; }
        }
        @keyframes soundWave2 {
          0% { height: 100%; }
          100% { height: 30%; }
        }
        @keyframes soundWave3 {
          0% { height: 45%; }
          100% { height: 95%; }
        }
      `}</style>
    </div>
  );
}
