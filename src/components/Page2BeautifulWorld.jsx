import { useState } from 'react';
import { Coffee, Heart, Palette, Sparkles, Star, User } from 'lucide-react';
import { herWorldData } from '../data/universeData';
import { playChime } from '../utils/audio';

export default function Page2BeautifulWorld({ friendName, portrait1, portrait2 }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All About Her' },
    { id: 'personality', label: 'Her Personality' },
    { id: 'favorites', label: 'Favourite Things' },
    { id: 'style', label: 'Outfits & Style' },
    { id: 'habits', label: 'Little Habits' },
  ];

  const handleTabChange = (id) => {
    playChime();
    setActiveTab(id);
  };

  return (
    <section id="page-2" className="section-wrapper" style={{ position: 'relative' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · SPOTLIGHT
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
          Her Beautiful World
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          A celebration of everything that makes {friendName} the exceptional, grounded, and unforgettable person she is.
        </p>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '24px',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="glass-pill"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : '#67404e',
                  background: isActive
                    ? 'linear-gradient(135deg, #ba6378, #94495c)'
                    : 'rgba(255, 255, 255, 0.85)',
                  border: isActive ? '1px solid #ba6378' : '1px solid rgba(220, 180, 195, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(186, 99, 120, 0.3)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Layout of Her World */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          alignItems: 'start',
        }}
      >
        {/* 1. Personality & Essence Card */}
        {(activeTab === 'all' || activeTab === 'personality') && (
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(254, 245, 248, 0.95))',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#ba6378',
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              <User size={14} /> {herWorldData.personality.tag}
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '1.65rem',
                fontWeight: 600,
                color: '#472935',
                marginBottom: '12px',
                lineHeight: 1.25,
              }}
            >
              {herWorldData.personality.title}
            </h3>

            <p style={{ fontSize: '0.94rem', color: '#67404e', lineHeight: 1.65, marginBottom: '20px' }}>
              {herWorldData.personality.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {herWorldData.personality.traits.map((trait, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    background: '#fbebf0',
                    border: '1px solid #f2c7d5',
                    color: '#843b4e',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  ✦ {trait}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 2. Photo Polaroid Card 1 */}
        {(activeTab === 'all' || activeTab === 'personality' || activeTab === 'favorites') && (
          <div
            className="polaroid-frame"
            style={{
              transform: 'rotate(-2deg)',
              margin: '0 auto',
              maxWidth: '340px',
              width: '100%',
            }}
          >
            <div className="washi-tape" />
            <div
              style={{
                width: '100%',
                height: '360px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#fcf0f3',
                marginBottom: '14px',
              }}
            >
              <img
                src={portrait1}
                alt={`${friendName} portrait 1`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                className="font-script"
                style={{
                  fontSize: '1.5rem',
                  color: '#472935',
                  marginBottom: '2px',
                }}
              >
                Radiant from the inside out
              </div>
              <div style={{ fontSize: '0.78rem', color: '#946573', letterSpacing: '0.04em' }}>
                CAPTURING HER SUNSHINE SPIRIT
              </div>
            </div>
          </div>
        )}

        {/* 3. Favourite Things Cards */}
        {(activeTab === 'all' || activeTab === 'favorites') && (
          <div
            className="glass-card"
            style={{
              padding: '30px 26px',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 245, 0.95))',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#d48296',
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              <Coffee size={14} /> HER COZY COMFORTS
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '1.65rem',
                fontWeight: 600,
                color: '#472935',
                marginBottom: '16px',
              }}
            >
              Her Favourite Things
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
              {herWorldData.favouriteThings.map((fav, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px',
                    borderRadius: '14px',
                    background: '#ffffff',
                    border: '1px solid rgba(220, 180, 195, 0.3)',
                    boxShadow: '0 2px 6px rgba(180, 100, 125, 0.04)',
                  }}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{fav.icon}</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#3e242d', marginBottom: '2px' }}>
                    {fav.name}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#8e5d6d' }}>{fav.note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Outfits & Aesthetic Styles */}
        {(activeTab === 'all' || activeTab === 'style') && (
          <div
            className="glass-card"
            style={{
              padding: '30px 26px',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(250, 245, 255, 0.95))',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#b08dd6',
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              <Palette size={14} /> AESTHETIC WARDROBE
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '1.65rem',
                fontWeight: 600,
                color: '#472935',
                marginBottom: '16px',
              }}
            >
              Her Favourite Outfits & Style
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {herWorldData.outfitsAndStyle.map((style, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    background: '#ffffff',
                    border: '1px solid rgba(220, 195, 235, 0.4)',
                  }}
                >
                  <div style={{ fontSize: '1.5rem' }}>{style.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#3e242d', marginBottom: '2px' }}>
                      {style.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#7d5964' }}>{style.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Photo Polaroid Card 2 */}
        {(activeTab === 'all' || activeTab === 'style' || activeTab === 'habits') && (
          <div
            className="polaroid-frame"
            style={{
              transform: 'rotate(2deg)',
              margin: '0 auto',
              maxWidth: '340px',
              width: '100%',
            }}
          >
            <div className="washi-tape" style={{ background: 'rgba(235, 218, 246, 0.85)' }} />
            <div
              style={{
                width: '100%',
                height: '360px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#f8effb',
                marginBottom: '14px',
              }}
            >
              <img
                src={portrait2}
                alt={`${friendName} portrait 2`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                className="font-script"
                style={{
                  fontSize: '1.5rem',
                  color: '#472935',
                  marginBottom: '2px',
                }}
              >
                Effortless elegance & poise
              </div>
              <div style={{ fontSize: '0.78rem', color: '#946573', letterSpacing: '0.04em' }}>
                BEAUTIFULLY & UNAPOLOGETICALLY HER
              </div>
            </div>
          </div>
        )}

        {/* 6. Little Habits & Expressions */}
        {(activeTab === 'all' || activeTab === 'habits') && (
          <div
            className="glass-card"
            style={{
              padding: '30px 26px',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(254, 242, 246, 0.95))',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#ba6378',
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              <Heart size={14} /> THE LITTLE DETAILS
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '1.65rem',
                fontWeight: 600,
                color: '#472935',
                marginBottom: '16px',
              }}
            >
              Her Little Habits & Expressions
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {herWorldData.littleHabits.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '14px',
                    background: '#ffffff',
                    border: '1px solid rgba(220, 180, 195, 0.35)',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3e242d', marginBottom: '2px' }}>
                    ✨ {item.habit}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#7d5964', lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quote Banner */}
      <div
        className="glass-panel"
        style={{
          marginTop: '48px',
          padding: '28px 32px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(254, 245, 248, 0.9), rgba(255, 252, 254, 0.95))',
          border: '1px solid rgba(230, 190, 205, 0.5)',
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: '1.35rem',
            fontStyle: 'italic',
            color: '#472935',
            lineHeight: 1.6,
            marginBottom: '8px',
          }}
        >
          {herWorldData.uniqueVibe.quote}
        </p>
        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ba6378',
          }}
        >
          — {herWorldData.uniqueVibe.highlight}
        </span>
      </div>
    </section>
  );
}
