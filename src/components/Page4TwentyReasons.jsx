import { useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { twentyReasons as defaultReasons } from '../data/universeData';
import { playChime } from '../utils/audio';

export default function Page4TwentyReasons({ friendName }) {
  const [reasons, setReasons] = useState(defaultReasons);
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState(new Set([1, 6, 20]));

  const categories = ['All', 'Friendship', 'Character', 'Energy', 'Empathy', 'Joy'];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    playChime();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredReasons = reasons.filter((r) => {
    if (activeFilter === 'All') return true;
    return r.category === activeFilter;
  });

  return (
    <section id="page-4" className="section-wrapper" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px auto' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · APPRECIATION
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
          20 Things That Make {friendName} Special
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6, marginBottom: '24px' }}>
          Twenty years of life, and twenty distinct reasons why having you as a friend is one of life’s genuine
          blessings. Click the heart on your favorites!
        </p>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playChime();
                  setActiveFilter(cat);
                }}
                className="glass-pill"
                style={{
                  padding: '7px 16px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : '#67404e',
                  background: isActive
                    ? 'linear-gradient(135deg, #ba6378, #94495c)'
                    : 'rgba(255, 255, 255, 0.85)',
                  border: isActive ? '1px solid #ba6378' : '1px solid rgba(220, 180, 195, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(186, 99, 120, 0.25)' : 'none',
                }}
              >
                {cat === 'All' ? 'All 20 Reasons' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 20 Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredReasons.map((reason) => {
          const isFaved = favorites.has(reason.id);
          const formattedNumber = String(reason.id).padStart(2, '0');

          return (
            <div
              key={reason.id}
              className="glass-card"
              style={{
                padding: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: isFaved
                  ? 'linear-gradient(145deg, #ffffff, #fff2f6)'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 250, 252, 0.9))',
                border: isFaved
                  ? '1.5px solid #d48296'
                  : '1px solid rgba(230, 195, 208, 0.45)',
                boxShadow: isFaved
                  ? '0 12px 28px -6px rgba(186, 99, 120, 0.18)'
                  : '0 6px 20px -4px rgba(180, 100, 125, 0.08)',
              }}
            >
              <div>
                {/* Header Row: Number + Icon + Favorite Heart */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #fce4eb, #f9d8e3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#94495c',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        border: '1px solid #eab6c7',
                      }}
                    >
                      {formattedNumber}
                    </span>
                    <span style={{ fontSize: '1.25rem' }}>{reason.icon}</span>
                  </div>

                  <button
                    onClick={(e) => toggleFavorite(reason.id, e)}
                    style={{
                      border: 'none',
                      background: isFaved ? '#fce7ec' : 'rgba(255, 255, 255, 0.7)',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    title={isFaved ? 'Loved!' : 'Heart this quality'}
                  >
                    <Heart
                      size={17}
                      color={isFaved ? '#ba6378' : '#a07d88'}
                      fill={isFaved ? '#ba6378' : 'none'}
                    />
                  </button>
                </div>

                {/* Category chip */}
                <div style={{ marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#ba6378',
                    }}
                  >
                    {reason.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.28rem',
                    fontWeight: 600,
                    color: '#3e242d',
                    marginBottom: '8px',
                    lineHeight: 1.25,
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: '#67404e', lineHeight: 1.6 }}>
                  {reason.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(220, 180, 195, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#946573',
                }}
              >
                <span>Milestone Quality #{reason.id}</span>
                {reason.id === 20 && (
                  <span style={{ color: '#ba6378', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Star size={12} fill="#ba6378" /> Crown Reason
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
