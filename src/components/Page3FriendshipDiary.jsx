import { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Heart, Plus, Sparkles, Trash2, X } from 'lucide-react';
import { friendshipTimeline as defaultTimeline } from '../data/universeData';
import { playChime } from '../utils/audio';

const STORAGE_KEY = 'her-universe-friendship-diary';

export default function Page3FriendshipDiary({ friendName, friendshipImage1, friendshipImage2 }) {
  const [memories, setMemories] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultTimeline;
    } catch {
      return defaultTimeline;
    }
  });

  const [expandedId, setExpandedId] = useState('diary-1');
  const [modalOpen, setModalOpen] = useState(false);
  const [newMemory, setNewMemory] = useState({
    title: '',
    date: '',
    category: 'Adventures',
    caption: '',
    fullStory: '',
    image: '',
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
    } catch (e) {
      console.error(e);
    }
  }, [memories]);

  const handleAddMemory = (e) => {
    e.preventDefault();
    if (!newMemory.title.trim()) return;

    const created = {
      id: `diary-${Date.now()}`,
      title: newMemory.title.trim(),
      date: newMemory.date || 'Our Memory',
      category: newMemory.category || 'Special Moment',
      caption: newMemory.caption.trim() || 'A memory worth keeping forever.',
      fullStory: newMemory.fullStory.trim() || newMemory.caption.trim(),
      image: newMemory.image || friendshipImage1,
      tag: 'Custom Memory',
      isCustom: true,
    };

    setMemories([created, ...memories]);
    setExpandedId(created.id);
    setNewMemory({ title: '', date: '', category: 'Adventures', caption: '', fullStory: '', image: '' });
    setModalOpen(false);
    playChime();
  };

  const handleDeleteMemory = (id, e) => {
    e.stopPropagation();
    setMemories(memories.filter((m) => m.id !== id));
  };

  const resolveImage = (mem) => {
    if (mem.image && !mem.image.includes('/assets/images/')) return mem.image;
    if (mem.id === 'diary-1' || mem.id === 'diary-2') return friendshipImage1;
    if (mem.id === 'diary-3' || mem.id === 'diary-4') return friendshipImage2;
    return mem.image || friendshipImage1;
  };

  return (
    <section id="page-3" className="section-wrapper" style={{ position: 'relative' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · CHRONICLES
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
          Our Friendship Diary
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6, marginBottom: '24px' }}>
          From day-one laughs to late-night revelations. A scrapbook of the moments that made our friendship rare,
          unbreakable, and full of joy.
        </p>

        {/* Add Memory Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="btn-primary"
          style={{ padding: '10px 22px', fontSize: '0.9rem' }}
        >
          <Plus size={16} /> Add a New Memory
        </button>
      </div>

      {/* Vertical Scrapbook Timeline */}
      <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
        {/* Central dotted connector line */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            left: '32px',
            width: '2px',
            background: 'repeating-linear-gradient(to bottom, #d88fa2 0, #d88fa2 6px, transparent 6px, transparent 12px)',
            zIndex: 1,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 2 }}>
          {memories.map((mem, index) => {
            const isExpanded = expandedId === mem.id;
            const imgSrc = resolveImage(mem);

            return (
              <div
                key={mem.id}
                onClick={() => {
                  playChime();
                  setExpandedId(isExpanded ? null : mem.id);
                }}
                className="glass-card"
                style={{
                  marginLeft: '64px',
                  padding: '24px',
                  cursor: 'pointer',
                  position: 'relative',
                  border: isExpanded ? '1.5px solid #d48296' : '1px solid rgba(255, 255, 255, 0.9)',
                  background: isExpanded
                    ? 'linear-gradient(145deg, #ffffff, #fff7fa)'
                    : 'rgba(255, 255, 255, 0.88)',
                  boxShadow: isExpanded
                    ? '0 18px 40px -10px rgba(186, 99, 120, 0.2)'
                    : '0 8px 24px -6px rgba(180, 100, 125, 0.08)',
                }}
              >
                {/* Timeline node icon on the connector */}
                <div
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: '-52px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: isExpanded
                      ? 'linear-gradient(135deg, #ba6378, #94495c)'
                      : '#ffffff',
                    border: '2px solid #ba6378',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isExpanded ? '#ffffff' : '#ba6378',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(186, 99, 120, 0.25)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {index + 1}
                </div>

                {/* Top metadata row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: '#fbebf0',
                        color: '#843b4e',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {mem.category}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.82rem',
                        color: '#946573',
                        fontWeight: 500,
                      }}
                    >
                      <Calendar size={13} /> {mem.date}
                    </span>
                  </div>

                  {mem.isCustom && (
                    <button
                      onClick={(e) => handleDeleteMemory(mem.id, e)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: '#a86575',
                        cursor: 'pointer',
                        padding: '4px',
                      }}
                      title="Delete memory"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    color: '#3e242d',
                    marginBottom: '8px',
                  }}
                >
                  {mem.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: '#67404e', lineHeight: 1.6, marginBottom: '14px' }}>
                  {mem.caption}
                </p>

                {/* Expanded content view */}
                {isExpanded && (
                  <div
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(220, 180, 195, 0.4)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '240px',
                        background: '#fbebf0',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={mem.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div
                      style={{
                        background: '#ffffff',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        border: '1px solid rgba(220, 180, 195, 0.3)',
                      }}
                    >
                      <p style={{ fontSize: '0.92rem', color: '#472935', lineHeight: 1.7, fontStyle: 'italic' }}>
                        “{mem.fullStory}”
                      </p>
                    </div>
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#ba6378',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    marginTop: '8px',
                  }}
                >
                  <span>{isExpanded ? 'Show less' : 'Read full memory story'}</span>
                  <ChevronRight size={14} style={{ transform: isExpanded ? 'rotate(90deg)' : 'none' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Memory Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(50, 25, 35, 0.55)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '28px',
              position: 'relative',
              background: '#ffffff',
              borderRadius: '20px',
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                border: 'none',
                background: '#f8e4eb',
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
              <X size={18} />
            </button>

            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#472935', marginBottom: '8px' }}>
              Add a Friendship Memory
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#7d5964', marginBottom: '20px' }}>
              Record another chapter or funny inside joke in your friendship diary.
            </p>

            <form onSubmit={handleAddMemory} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Memory Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The Spontaneous Sunset Drive"
                  value={newMemory.title}
                  onChange={(e) => setNewMemory({ ...newMemory, title: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #deb3c0',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                    Date / Season
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Summer 2024"
                    value={newMemory.date}
                    onChange={(e) => setNewMemory({ ...newMemory, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #deb3c0',
                      outline: 'none',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                    Category
                  </label>
                  <select
                    value={newMemory.category}
                    onChange={(e) => setNewMemory({ ...newMemory, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #deb3c0',
                      outline: 'none',
                      fontSize: '0.9rem',
                      background: '#ffffff',
                    }}
                  >
                    <option value="Adventures">Adventures</option>
                    <option value="Funny Moments">Funny Moments</option>
                    <option value="Heartfelt Talks">Heartfelt Talks</option>
                    <option value="Celebrations">Celebrations</option>
                    <option value="Little Things">Little Things</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Short Caption *
                </label>
                <input
                  type="text"
                  required
                  placeholder="One sentence that sums up this unforgettable day"
                  value={newMemory.caption}
                  onChange={(e) => setNewMemory({ ...newMemory, caption: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #deb3c0',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Full Story
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the details, the laughs, and why it means so much..."
                  value={newMemory.fullStory}
                  onChange={(e) => setNewMemory({ ...newMemory, fullStory: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #deb3c0',
                    outline: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="btn-secondary"
                  style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" style={{ padding: '8px 22px', fontSize: '0.88rem' }}>
                  Save Memory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
