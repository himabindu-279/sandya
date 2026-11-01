import { useEffect, useState } from 'react';
import { Compass, Menu, Palette, Sparkles, X } from 'lucide-react';

const sections = [
  { id: 'page-1', label: '1. Landing' },
  { id: 'page-2', label: '2. Her World' },
  { id: 'page-3', label: '3. Friendship Diary' },
  { id: 'page-4', label: '4. 20 Things' },
  { id: 'page-5', label: '5. Birthday Cake' },
  { id: 'page-6', label: '6. Letter' },
  { id: 'page-7', label: '7. Dreams & Future' },
  { id: 'page-8', label: '8. Personal Corner' },
  { id: 'page-9', label: '9. Photo Scrapbook' },
  { id: 'page-10', label: '10. Secret Surprise' },
  { id: 'page-11', label: '11. Celebration' },
];

export default function Navbar({ friendName, onOpenCustomizer }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? Math.min(100, Math.round((currentScroll / totalScroll) * 100)) : 0;
      setScrollProgress(progress);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setCurrentChapter(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1240px',
          zIndex: 80,
        }}
      >
        <div
          className="glass-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle scroll progress line at top of navbar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '3px',
              width: `${scrollProgress}%`,
              background: 'linear-gradient(90deg, #e995a9, #c87d8e, #a85266)',
              transition: 'width 0.1s linear',
            }}
          />

          {/* Left: Brand / Title */}
          <div
            onClick={() => scrollTo('page-1')}
            style={{
              cursor: 'pointer',
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
                background: 'linear-gradient(135deg, #fce4eb, #f5d4e0)',
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
                HER LITTLE UNIVERSE
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: '#946573',
                  letterSpacing: '0.06em',
                  fontWeight: 600,
                }}
              >
                CHAPTER 20 · {friendName.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Center: Current Chapter & Progress (Desktop) */}
          <div
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#843b4e',
                background: 'rgba(253, 235, 241, 0.85)',
                padding: '4px 12px',
                borderRadius: '9999px',
                border: '1px solid rgba(220, 160, 180, 0.4)',
              }}
            >
              <Compass size={13} />
              Chapter {currentChapter} of 11
            </span>

            <span style={{ fontSize: '0.8rem', color: '#8e5d6d', fontWeight: 500 }}>
              {scrollProgress}% explored
            </span>
          </div>

          {/* Right: Quick actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onOpenCustomizer}
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#ba6378',
                border: '1px solid rgba(220, 160, 180, 0.45)',
                cursor: 'pointer',
              }}
              title="Upload her real photos or change name"
            >
              <Palette size={14} />
              <span className="hidden-mobile">Photos & Name</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Navigation menu"
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
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Chapters Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 79,
            backgroundColor: 'rgba(40, 20, 30, 0.4)',
            backdropFilter: 'blur(6px)',
          }}
          onClick={() => setMobileMenuOpen(false)}
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
              background: 'rgba(255, 252, 254, 0.96)',
              borderRadius: '20px',
              boxShadow: '0 20px 50px -10px rgba(120, 50, 75, 0.25)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(220, 180, 195, 0.3)',
              }}
            >
              <span className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#472935' }}>
                All 11 Chapters
              </span>
              <span style={{ fontSize: '0.8rem', color: '#946573', fontWeight: 600 }}>
                {scrollProgress}% Explored
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {sections.map((s, idx) => {
                const isActive = currentChapter === idx + 1;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: 'none',
                      background: isActive ? 'linear-gradient(135deg, #fce4eb, #f9d8e3)' : 'transparent',
                      color: isActive ? '#94495c' : '#5e3c46',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span>{s.label}</span>
                    {isActive && <span style={{ fontSize: '0.75rem', color: '#ba6378' }}>● Active</span>}
                  </button>
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
