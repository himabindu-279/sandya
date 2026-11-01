import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Compass, Home, Menu, Sparkles, Volume2, VolumeX, X } from 'lucide-react';
import { roomsList } from '../data/sandyaData';
import { toggleAmbientMusic } from '../utils/audio';

export default function NavigationHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Do not show full header on the cinematic entrance
  const isEntrance = location.pathname === '/';

  const handleToggleSound = () => {
    const active = toggleAmbientMusic();
    setIsPlaying(active);
  };

  const currentRoom = roomsList.find((r) => r.path === location.pathname);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1100px',
          zIndex: 85,
        }}
      >
        <div
          className="glass-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 22px',
            boxShadow: '0 8px 30px -4px rgba(180, 90, 115, 0.16)',
            border: '1px solid rgba(255, 235, 245, 0.95)',
          }}
        >
          {/* Logo / Brand */}
          <Link
            to="/world"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fce4eb, #f3d4e0)',
                border: '1px solid #eab6c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ba6378',
              }}
            >
              <Sparkles size={16} />
            </div>
            <div>
              <div
                className="font-serif"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#472935',
                  letterSpacing: '0.04em',
                  lineHeight: 1.1,
                }}
              >
                SANDYA
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: '#946573',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}
              >
                CHAPTER 20 · A WORLD OF YOUR OWN
              </div>
            </div>
          </Link>

          {/* Current Page Chip (Desktop) */}
          {currentRoom && (
            <div
              className="hidden-mobile"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '9999px',
                background: 'rgba(253, 235, 242, 0.85)',
                border: '1px solid rgba(220, 160, 180, 0.4)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#843b4e',
              }}
            >
              <span>{currentRoom.icon}</span>
              <span>{currentRoom.title}</span>
            </div>
          )}

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* World Hub Button */}
            {!isEntrance && location.pathname !== '/world' && (
              <button
                onClick={() => navigate('/world')}
                className="glass-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#843b4e',
                  border: '1px solid rgba(220, 160, 180, 0.4)',
                  cursor: 'pointer',
                }}
                title="Return to World Navigation Hub"
              >
                <Compass size={14} color="#ba6378" />
                <span className="hidden-mobile">World Hub</span>
              </button>
            )}

            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: isPlaying ? '#ba6378' : '#7d5964',
                border: '1px solid rgba(220, 160, 180, 0.4)',
                cursor: 'pointer',
              }}
              title={isPlaying ? 'Mute Music' : 'Play Happy Birthday Music Box Song'}
            >
              {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
              <span className="hidden-mobile">{isPlaying ? 'Birthday Song ♫' : 'Birthday Song'}</span>
            </button>

            {/* Room Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="glass-pill"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid rgba(220, 160, 180, 0.4)',
                cursor: 'pointer',
                color: '#6e4752',
              }}
              aria-label="Toggle Rooms Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Rooms Navigation Drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 84,
            backgroundColor: 'rgba(40, 20, 30, 0.45)',
            backdropFilter: 'blur(6px)',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              position: 'fixed',
              top: '80px',
              right: '16px',
              width: '320px',
              maxHeight: 'calc(100vh - 100px)',
              overflowY: 'auto',
              padding: '20px',
              background: 'rgba(255, 252, 254, 0.98)',
              borderRadius: '20px',
              boxShadow: '0 20px 50px -10px rgba(120, 50, 75, 0.25)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(220, 180, 195, 0.3)',
              }}
            >
              <span className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 600, color: '#472935' }}>
                Rooms in Your World
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link
                to="/world"
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: location.pathname === '/world' ? '#fbebf0' : 'transparent',
                  color: location.pathname === '/world' ? '#ba6378' : '#472935',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                }}
              >
                <Home size={16} /> World Navigation Hub
              </Link>

              {roomsList.map((room) => {
                const isActive = location.pathname === room.path;
                return (
                  <Link
                    key={room.id}
                    to={room.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: isActive ? 'linear-gradient(135deg, #fce4eb, #f9d8e3)' : 'transparent',
                      color: isActive ? '#94495c' : '#5e3c46',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.88rem',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{room.icon}</span>
                      <span>{room.title}</span>
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#ba6378' }}>{room.badge}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
