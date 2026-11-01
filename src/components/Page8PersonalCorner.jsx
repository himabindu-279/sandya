import { useState, useEffect } from 'react';
import { Calendar, Check, Edit2, Heart, Plus, RefreshCw, Sparkles, Target, Trash2, X } from 'lucide-react';
import { personalCornerData as defaultData } from '../data/universeData';
import { playChime } from '../utils/audio';

const STORAGE_KEYS = {
  notes: 'her-universe-corner-notes',
  dates: 'her-universe-corner-dates',
  goals: 'her-universe-corner-goals',
};

export default function Page8PersonalCorner({ friendName }) {
  // 1. Personal Notes State
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.notes);
      return saved ? JSON.parse(saved) : defaultData.defaultNotes;
    } catch {
      return defaultData.defaultNotes;
    }
  });

  // 2. Important Dates State
  const [dates, setDates] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.dates);
      return saved ? JSON.parse(saved) : defaultData.importantDates;
    } catch {
      return defaultData.importantDates;
    }
  });

  // 3. Goals Tracker State
  const [goals, setGoals] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.goals);
      return saved ? JSON.parse(saved) : defaultData.goalsTracker;
    } catch {
      return defaultData.goalsTracker;
    }
  });

  // 4. Daily Sparkle State
  const [quoteIndex, setQuoteIndex] = useState(0);

  // New Note Form State
  const [newNote, setNewNote] = useState({ title: '', content: '', color: 'blush' });
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editNoteContent, setEditNoteContent] = useState('');

  // New Date Form State
  const [newDate, setNewDate] = useState({ title: '', date: '', category: 'Milestone' });

  // New Goal Form State
  const [newGoal, setNewGoal] = useState({ title: '', target: '', progress: 50 });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.dates, JSON.stringify(dates));
  }, [dates]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.goals, JSON.stringify(goals));
  }, [goals]);

  // Notes Actions
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.title.trim() || !newNote.content.trim()) return;

    playChime();
    const note = {
      id: `note-${Date.now()}`,
      title: newNote.title.trim(),
      content: newNote.content.trim(),
      color: newNote.color,
    };
    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '', color: 'blush' });
  };

  const handleDeleteNote = (id) => {
    playChime();
    setNotes(notes.filter((n) => n.id !== id));
  };

  const handleStartEdit = (note) => {
    setEditingNoteId(note.id);
    setEditNoteContent(note.content);
  };

  const handleSaveEdit = (id) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, content: editNoteContent } : n)));
    setEditingNoteId(null);
    playChime();
  };

  // Dates Actions
  const handleAddDate = (e) => {
    e.preventDefault();
    if (!newDate.title.trim() || !newDate.date.trim()) return;

    playChime();
    const created = {
      id: `date-${Date.now()}`,
      title: newDate.title.trim(),
      date: newDate.date.trim(),
      category: newDate.category,
    };
    setDates([...dates, created]);
    setNewDate({ title: '', date: '', category: 'Milestone' });
  };

  const handleDeleteDate = (id) => {
    setDates(dates.filter((d) => d.id !== id));
  };

  // Goals Actions
  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.title.trim()) return;

    playChime();
    const created = {
      id: `goal-${Date.now()}`,
      title: newGoal.title.trim(),
      target: newGoal.target.trim() || 'In Progress',
      progress: Number(newGoal.progress) || 50,
    };
    setGoals([...goals, created]);
    setNewGoal({ title: '', target: '', progress: 50 });
  };

  const handleUpdateGoalProgress = (id, newProgress) => {
    setGoals(goals.map((g) => (g.id === id ? { ...g, progress: Number(newProgress) } : g)));
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const nextQuote = () => {
    playChime();
    setQuoteIndex((prev) => (prev + 1) % defaultData.dailySparkles.length);
  };

  const colorMap = {
    blush: { bg: '#fff0f3', border: '#f7cad5', tag: '#94495c' },
    lavender: { bg: '#f5effa', border: '#e2d3f2', tag: '#6a3f91' },
    peach: { bg: '#fff4ed', border: '#fcd8c4', tag: '#8f4f29' },
    cream: { bg: '#fffcf7', border: '#f5e8d8', tag: '#75583b' },
  };

  return (
    <section id="page-8" className="section-wrapper" style={{ position: 'relative' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · EVERYDAY UTILITY
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
          Her Personal Corner
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          A cozy, genuinely useful digital sanctuary. Sticky notes, countdown calendar, goal tracker, and daily
          motivation cards—saved automatically so you can use it every day.
        </p>
      </div>

      {/* Feature 1: Daily Sparkle Motivation Drawer */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '780px',
          margin: '0 auto 48px auto',
          padding: '28px 32px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #fff7fa 0%, #fffcfd 100%)',
          border: '1.5px solid rgba(220, 170, 190, 0.5)',
          boxShadow: '0 12px 32px -8px rgba(180, 90, 115, 0.14)',
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
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          <Sparkles size={14} /> DAILY SPARKLE · INSPIRATION CARD
        </div>

        <p
          className="font-serif"
          style={{
            fontSize: '1.45rem',
            fontStyle: 'italic',
            color: '#472935',
            lineHeight: 1.65,
            marginBottom: '18px',
          }}
        >
          {defaultData.dailySparkles[quoteIndex]}
        </p>

        <button
          onClick={nextQuote}
          className="btn-secondary"
          style={{ padding: '8px 20px', fontSize: '0.85rem' }}
        >
          <RefreshCw size={14} /> Draw Another Sparkle Card
        </button>
      </div>

      {/* Grid: Sticky Notes & Goals Tracker */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px',
          marginBottom: '48px',
        }}
      >
        {/* Sticky Notes Wall */}
        <div
          className="glass-card"
          style={{
            padding: '28px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 250, 252, 0.95))',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935' }}>
                Personal Sticky Notes
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#7d5964' }}>Reminders, mantras & cozy thoughts</p>
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#ba6378',
                background: '#fbebf0',
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              {notes.length} Notes
            </span>
          </div>

          {/* Add Note Mini-Form */}
          <form onSubmit={handleAddNote} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="text"
              placeholder="Note title (e.g. Chapter 20 Motto)..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #deb3c0',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
            <textarea
              rows={2}
              placeholder="Write your note content..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #deb3c0',
                fontSize: '0.88rem',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['blush', 'lavender', 'peach', 'cream'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setNewNote({ ...newNote, color: c })}
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: colorMap[c].bg,
                      border: newNote.color === c ? '2px solid #ba6378' : `1px solid ${colorMap[c].border}`,
                      cursor: 'pointer',
                    }}
                    title={c}
                  />
                ))}
              </div>
              <button type="submit" className="btn-primary" style={{ padding: '6px 16px', fontSize: '0.82rem' }}>
                <Plus size={14} /> Add Note
              </button>
            </div>
          </form>

          {/* Notes List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {notes.map((note) => {
              const theme = colorMap[note.color] || colorMap.blush;
              const isEditing = editingNoteId === note.id;

              return (
                <div
                  key={note.id}
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    background: theme.bg,
                    border: `1px solid ${theme.border}`,
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: theme.tag }}>{note.title}</h4>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => handleStartEdit(note)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#946573' }}
                        title="Edit note"
                      >
                        <Edit2 size={13} />
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#a8475e' }}
                        title="Delete note"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <div>
                      <textarea
                        rows={2}
                        value={editNoteContent}
                        onChange={(e) => setEditNoteContent(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px',
                          borderRadius: '6px',
                          border: '1px solid #deb3c0',
                          fontSize: '0.85rem',
                          fontFamily: 'inherit',
                          marginBottom: '6px',
                        }}
                      />
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          onClick={() => handleSaveEdit(note.id)}
                          className="btn-primary"
                          style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                        >
                          <Check size={12} /> Save
                        </button>
                        <button
                          onClick={() => setEditingNoteId(null)}
                          className="btn-secondary"
                          style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: '0.86rem', color: '#472935', lineHeight: 1.5 }}>{note.content}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Goals Tracker */}
        <div
          className="glass-card"
          style={{
            padding: '28px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(254, 245, 248, 0.95))',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935' }}>
                Personal Goals Tracker
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#7d5964' }}>Track your daily & weekly milestones</p>
            </div>
            <Target size={20} color="#ba6378" />
          </div>

          {/* Add Goal Mini-Form */}
          <form onSubmit={handleAddGoal} style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="New goal title..."
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #deb3c0',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '6px 16px', fontSize: '0.82rem' }}>
              <Plus size={14} /> Add
            </button>
          </form>

          {/* Goals List with Interactive Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {goals.map((g) => (
              <div
                key={g.id}
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid rgba(220, 180, 195, 0.35)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#3e242d' }}>{g.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ba6378' }}>{g.progress}%</span>
                    <button
                      onClick={() => handleDeleteGoal(g.id)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#b07888' }}
                      title="Delete goal"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={g.progress}
                  onChange={(e) => handleUpdateGoalProgress(g.id, e.target.value)}
                  style={{
                    width: '100%',
                    accentColor: '#ba6378',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ fontSize: '0.75rem', color: '#8e5d6d', marginTop: '2px' }}>Target: {g.target}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 3: Important Dates Calendar */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '28px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(254, 245, 248, 0.95))',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#472935' }}>
              Important Dates & Celebrations
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#7d5964' }}>Birthdays, anniversaries, and future milestones</p>
          </div>
          <Calendar size={22} color="#ba6378" />
        </div>

        {/* Add Date Mini-Form */}
        <form onSubmit={handleAddDate} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <input
            type="text"
            required
            placeholder="Event name (e.g. Friends Trip)..."
            value={newDate.title}
            onChange={(e) => setNewDate({ ...newDate, title: e.target.value })}
            style={{
              flex: '1 1 180px',
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #deb3c0',
              fontSize: '0.88rem',
              outline: 'none',
            }}
          />
          <input
            type="text"
            required
            placeholder="Date (e.g. 2026-11-02)..."
            value={newDate.date}
            onChange={(e) => setNewDate({ ...newDate, date: e.target.value })}
            style={{
              flex: '1 1 130px',
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #deb3c0',
              fontSize: '0.88rem',
              outline: 'none',
            }}
          />
          <button type="submit" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
            <Plus size={14} /> Add Date
          </button>
        </form>

        {/* Dates Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
          }}
        >
          {dates.map((d) => (
            <div
              key={d.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1px solid rgba(220, 180, 195, 0.35)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3e242d', marginBottom: '2px' }}>
                  {d.title}
                </h4>
                <div style={{ fontSize: '0.78rem', color: '#ba6378', fontWeight: 600 }}>
                  📅 {d.date} • {d.category}
                </div>
              </div>
              <button
                onClick={() => handleDeleteDate(d.id)}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#b07888' }}
                title="Remove date"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
