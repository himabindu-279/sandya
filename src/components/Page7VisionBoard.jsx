import { useState, useEffect } from 'react';
import { Briefcase, CheckCircle2, Circle, Compass, MapPin, Plus, Sparkles, Target, Trash2, Trophy } from 'lucide-react';
import { visionBoardData as defaultVision } from '../data/universeData';
import { playChime } from '../utils/audio';

const STORAGE_KEY = 'her-universe-vision-board';

export default function Page7VisionBoard({ friendName }) {
  const [visionData, setVisionData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultVision;
    } catch {
      return defaultVision;
    }
  });

  const [newDream, setNewDream] = useState({ category: 'career', title: '', note: '' });
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(visionData));
    } catch (e) {
      console.error(e);
    }
  }, [visionData]);

  const toggleBucketItem = (id) => {
    playChime();
    setVisionData((prev) => ({
      ...prev,
      bucketList20: prev.bucketList20.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    }));
  };

  const handleAddDream = (e) => {
    e.preventDefault();
    if (!newDream.title.trim()) return;

    playChime();
    if (newDream.category === 'bucket') {
      const newItem = {
        id: `bucket-${Date.now()}`,
        text: newDream.title.trim(),
        done: false,
      };
      setVisionData((prev) => ({ ...prev, bucketList20: [newItem, ...prev.bucketList20] }));
    } else if (newDream.category === 'travel') {
      const newDest = {
        destination: newDream.title.trim(),
        description: newDream.note.trim() || 'A dreamy place waiting to be explored',
        icon: '✈️',
      };
      setVisionData((prev) => ({ ...prev, travel: [newDest, ...prev.travel] }));
    } else {
      const newCard = {
        title: newDream.title.trim(),
        note: newDream.note.trim() || 'Goal set for Chapter 20 and beyond.',
        status: 'In Motion',
      };
      const catKey = newDream.category === 'career' ? 'career' : 'growth';
      setVisionData((prev) => ({ ...prev, [catKey]: [newCard, ...prev[catKey]] }));
    }

    setNewDream({ category: 'career', title: '', note: '' });
  };

  const completedBucketCount = visionData.bucketList20.filter((b) => b.done).length;
  const bucketProgress = Math.round((completedBucketCount / (visionData.bucketList20.length || 1)) * 100);

  return (
    <section id="page-7" className="section-wrapper" style={{ position: 'relative' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · VISION & HORIZONS
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
          Her Dreams & The Future
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          A digital vision board built to inspire {friendName} throughout her twenties. Add future goals, check off
          bucket list adventures, and manifest every dream.
        </p>
      </div>

      {/* Vision Board Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '48px',
        }}
      >
        {/* 1. Career Goals Card */}
        <div
          className="glass-card"
          style={{
            padding: '28px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(254, 245, 248, 0.95))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#ba6378',
              letterSpacing: '0.08em',
              marginBottom: '10px',
            }}
          >
            <Briefcase size={16} /> CAREER GOALS & AMBITIONS
          </div>

          <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935', marginBottom: '16px' }}>
            Professional Horizons
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {visionData.career.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid rgba(220, 180, 195, 0.35)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#3e242d' }}>{c.title}</h4>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#ba6378',
                      background: '#fbebf0',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                    }}
                  >
                    {c.status || 'Active'}
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#7d5964', lineHeight: 1.5 }}>{c.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Dream Destinations Card */}
        <div
          className="glass-card"
          style={{
            padding: '28px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(250, 245, 255, 0.95))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#b08dd6',
              letterSpacing: '0.08em',
              marginBottom: '10px',
            }}
          >
            <MapPin size={16} /> DREAM DESTINATIONS
          </div>

          <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935', marginBottom: '16px' }}>
            Wanderlust & Exploration
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {visionData.travel.map((dest, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid rgba(220, 195, 235, 0.35)',
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>{dest.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#3e242d', marginBottom: '2px' }}>
                    {dest.destination}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#7d5964' }}>{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Personal Growth Card */}
        <div
          className="glass-card"
          style={{
            padding: '28px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 248, 245, 0.95))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#d48296',
              letterSpacing: '0.08em',
              marginBottom: '10px',
            }}
          >
            <Target size={16} /> PERSONAL GROWTH
          </div>

          <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935', marginBottom: '16px' }}>
            Inner Strength & Peace
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {visionData.growth.map((g, i) => (
              <div
                key={i}
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid rgba(220, 180, 195, 0.35)',
                }}
              >
                <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: '#3e242d', marginBottom: '4px' }}>
                  {g.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#7d5964', lineHeight: 1.5 }}>{g.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Skills & Mastery Card */}
        <div
          className="glass-card"
          style={{
            padding: '28px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(254, 242, 246, 0.95))',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#ba6378',
              letterSpacing: '0.08em',
              marginBottom: '10px',
            }}
          >
            <Trophy size={16} /> SKILLS TO MASTER
          </div>

          <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935', marginBottom: '16px' }}>
            Craft & Creative Passions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {visionData.skills.map((s, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: 600, color: '#3e242d', marginBottom: '4px' }}>
                  <span>{s.skill}</span>
                  <span style={{ color: '#ba6378' }}>{s.level}</span>
                </div>
                <div style={{ height: '8px', background: '#f5dbe3', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: s.level,
                      background: 'linear-gradient(90deg, #e494a8, #ba6378)',
                      borderRadius: '9999px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. 20s Bucket List with Interactive Checkboxes */}
        <div
          className="glass-card"
          style={{
            gridColumn: '1 / -1',
            padding: '32px 28px',
            background: 'linear-gradient(145deg, #ffffff, #fff7fa)',
            border: '1.5px solid rgba(220, 180, 195, 0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#ba6378',
                  letterSpacing: '0.08em',
                  marginBottom: '4px',
                }}
              >
                <Compass size={16} /> THE CHAPTER 20 BUCKET LIST
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.65rem', color: '#472935' }}>
                Adventures Waiting For Her Twenties
              </h3>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ba6378' }}>
                {completedBucketCount} of {visionData.bucketList20.length} Completed ({bucketProgress}%)
              </div>
              <div
                style={{
                  width: '160px',
                  height: '8px',
                  background: '#f2d4df',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginTop: '4px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${bucketProgress}%`,
                    background: 'linear-gradient(90deg, #e494a8, #ba6378)',
                    borderRadius: '9999px',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px',
            }}
          >
            {visionData.bucketList20.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleBucketItem(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: item.done ? '#fdf2f5' : '#ffffff',
                  border: item.done ? '1px solid #eec8d5' : '1px solid rgba(220, 180, 195, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {item.done ? (
                  <CheckCircle2 size={20} color="#ba6378" fill="#f8e4eb" />
                ) : (
                  <Circle size={20} color="#deb3c0" />
                )}
                <span
                  style={{
                    fontSize: '0.9rem',
                    color: item.done ? '#8e5d6d' : '#3e242d',
                    textDecoration: item.done ? 'line-through' : 'none',
                    fontWeight: item.done ? 500 : 600,
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pin a New Dream to the Vision Board (Interactive Form) */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '28px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(254, 245, 248, 0.95))',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935', marginBottom: '4px' }}>
            Pin a Future Goal or Dream
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#7d5964' }}>
            Write an aspiration or adventure to keep this vision board alive throughout Chapter 20.
          </p>
        </div>

        <form onSubmit={handleAddDream} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Category
              </label>
              <select
                value={newDream.category}
                onChange={(e) => setNewDream({ ...newDream, category: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid #deb3c0',
                  outline: 'none',
                  fontSize: '0.88rem',
                  background: '#ffffff',
                }}
              >
                <option value="career">Career Goal</option>
                <option value="travel">Dream Destination</option>
                <option value="growth">Personal Growth</option>
                <option value="bucket">Bucket List</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Goal / Dream Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Master latte art or visit Kyoto"
                value={newDream.title}
                onChange={(e) => setNewDream({ ...newDream, title: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #deb3c0',
                  outline: 'none',
                  fontSize: '0.88rem',
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
              Note / Intention (Optional)
            </label>
            <input
              type="text"
              placeholder="Why this dream matters for your twenties..."
              value={newDream.note}
              onChange={(e) => setNewDream({ ...newDream, note: e.target.value })}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px solid #deb3c0',
                outline: 'none',
                fontSize: '0.88rem',
              }}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '6px' }}>
            <button type="submit" className="btn-primary" style={{ padding: '10px 28px', fontSize: '0.92rem' }}>
              <Plus size={16} /> Pin to Vision Board
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
