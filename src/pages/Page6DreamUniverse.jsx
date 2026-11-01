import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Circle,
  Compass,
  Edit2,
  GraduationCap,
  Heart,
  Image as ImageIcon,
  Mail,
  Plus,
  Sparkles,
  Star,
  Target,
  Trash2,
  X,
} from 'lucide-react';
import { initialDreamUniverseData } from '../data/sandyaData';
import { playChime, playConfettiPop, playSealCrack } from '../utils/audio';

const STORAGE_KEYS = {
  bucket: 'sandya-dream-bucket-list',
  dreams: 'sandya-dream-board',
  goals: 'sandya-dream-goals',
};

export default function Page6DreamUniverse() {
  // Module A: Bucket List State
  const [bucketList, setBucketList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.bucket);
      return saved ? JSON.parse(saved) : initialDreamUniverseData.bucketList;
    } catch {
      return initialDreamUniverseData.bucketList;
    }
  });

  // Module B: Dreams Board State
  const [dreams, setDreams] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.dreams);
      return saved ? JSON.parse(saved) : initialDreamUniverseData.dreams;
    } catch {
      return initialDreamUniverseData.dreams;
    }
  });

  // Module C: Goals State
  const [goals, setGoals] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.goals);
      return saved ? JSON.parse(saved) : initialDreamUniverseData.goals;
    } catch {
      return initialDreamUniverseData.goals;
    }
  });

  // Filter tabs for bucket list
  const [bucketFilter, setBucketFilter] = useState('All'); // 'All' | 'Pending' | 'Completed'

  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'bucket' | 'dream' | 'goal' | 'futureLetter' | 'deleteConfirm'
  const [editItem, setEditItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null); // { type, id, title }

  // Form states
  const [bucketForm, setBucketForm] = useState({ title: '', category: 'Travel', targetDate: '' });
  const [dreamForm, setDreamForm] = useState({ title: '', description: '', category: 'Travel Dreams', image: '' });
  const [goalForm, setGoalForm] = useState({
    title: '',
    category: 'Career',
    deadline: '',
    progress: 50,
    notes: '',
    isCareerOrEducation: true,
  });

  // Future Self letter modal
  const [futureLetterOpen, setFutureLetterOpen] = useState(false);

  // Persistence
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.bucket, JSON.stringify(bucketList));
  }, [bucketList]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.dreams, JSON.stringify(dreams));
  }, [dreams]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.goals, JSON.stringify(goals));
  }, [goals]);

  // --- MODULE A: BUCKET LIST HANDLERS ---
  const toggleBucketDone = (id) => {
    playChime();
    setBucketList((prev) => {
      const next = prev.map((item) => {
        if (item.id === id) {
          const updated = { ...item, done: !item.done };
          if (updated.done) {
            playConfettiPop();
            confetti({
              particleCount: 70,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#f8a5c2', '#ffd700', '#ffffff'],
            });
          }
          return updated;
        }
        return item;
      });
      return next;
    });
  };

  const handleOpenBucketModal = (item = null) => {
    setEditItem(item);
    if (item) {
      setBucketForm({ title: item.title, category: item.category, targetDate: item.targetDate || '' });
    } else {
      setBucketForm({ title: '', category: 'Travel', targetDate: '' });
    }
    setActiveModal('bucket');
  };

  const handleSaveBucket = (e) => {
    e.preventDefault();
    if (!bucketForm.title.trim()) return;

    playChime();
    if (editItem) {
      setBucketList((prev) =>
        prev.map((item) => (item.id === editItem.id ? { ...item, ...bucketForm } : item))
      );
    } else {
      const newItem = {
        id: `b-${Date.now()}`,
        title: bucketForm.title.trim(),
        category: bucketForm.category,
        targetDate: bucketForm.targetDate,
        done: false,
      };
      setBucketList([newItem, ...bucketList]);
    }
    setActiveModal(null);
  };

  // --- MODULE B: DREAMS HANDLERS ---
  const handleOpenDreamModal = (item = null) => {
    setEditItem(item);
    if (item) {
      setDreamForm({
        title: item.title,
        description: item.description,
        category: item.category,
        image: item.image || '',
      });
    } else {
      setDreamForm({ title: '', description: '', category: 'Travel Dreams', image: '' });
    }
    setActiveModal('dream');
  };

  const handleSaveDream = (e) => {
    e.preventDefault();
    if (!dreamForm.title.trim()) return;

    playChime();
    if (editItem) {
      setDreams((prev) =>
        prev.map((d) => (d.id === editItem.id ? { ...d, ...dreamForm } : d))
      );
    } else {
      const newDream = {
        id: `d-${Date.now()}`,
        title: dreamForm.title.trim(),
        description: dreamForm.description.trim(),
        category: dreamForm.category,
        image: dreamForm.image.trim() || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
        achieved: false,
      };
      setDreams([newDream, ...dreams]);
    }
    setActiveModal(null);
  };

  const toggleDreamAchieved = (id) => {
    playConfettiPop();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#f8a5c2', '#ffffff'],
    });
    setDreams((prev) =>
      prev.map((d) => (d.id === id ? { ...d, achieved: !d.achieved } : d))
    );
  };

  // --- MODULE C: GOALS HANDLERS ---
  const handleOpenGoalModal = (item = null) => {
    setEditItem(item);
    if (item) {
      setGoalForm({
        title: item.title,
        category: item.category,
        deadline: item.deadline || '',
        progress: item.progress || 0,
        notes: item.notes || '',
        isCareerOrEducation: item.isCareerOrEducation ?? true,
      });
    } else {
      setGoalForm({
        title: '',
        category: 'Career',
        deadline: '',
        progress: 50,
        notes: '',
        isCareerOrEducation: true,
      });
    }
    setActiveModal('goal');
  };

  const handleSaveGoal = (e) => {
    e.preventDefault();
    if (!goalForm.title.trim()) return;

    playChime();
    const isCareer = ['Career', 'Education', 'Skills'].includes(goalForm.category);
    if (editItem) {
      setGoals((prev) =>
        prev.map((g) => (g.id === editItem.id ? { ...g, ...goalForm, isCareerOrEducation: isCareer } : g))
      );
    } else {
      const newGoal = {
        id: `g-${Date.now()}`,
        title: goalForm.title.trim(),
        category: goalForm.category,
        deadline: goalForm.deadline,
        progress: Number(goalForm.progress) || 0,
        notes: goalForm.notes.trim(),
        isCareerOrEducation: isCareer,
      };
      setGoals([newGoal, ...goals]);
    }
    setActiveModal(null);
  };

  const handleUpdateGoalProgress = (id, progress) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, progress: Number(progress) } : g))
    );
  };

  // --- DELETION CONFIRMATION HANDLERS ---
  const confirmDelete = (type, id, title) => {
    setDeleteTarget({ type, id, title });
    setActiveModal('deleteConfirm');
  };

  const executeDelete = () => {
    if (!deleteTarget) return;
    playChime();
    if (deleteTarget.type === 'bucket') {
      setBucketList((prev) => prev.filter((i) => i.id !== deleteTarget.id));
    } else if (deleteTarget.type === 'dream') {
      setDreams((prev) => prev.filter((i) => i.id !== deleteTarget.id));
    } else if (deleteTarget.type === 'goal') {
      setGoals((prev) => prev.filter((i) => i.id !== deleteTarget.id));
    }
    setActiveModal(null);
    setDeleteTarget(null);
  };

  // Calculations
  const completedBucketCount = bucketList.filter((b) => b.done).length;
  const bucketProgress = bucketList.length > 0 ? Math.round((completedBucketCount / bucketList.length) * 100) : 0;
  const filteredBucketList = bucketList.filter((b) => {
    if (bucketFilter === 'Pending') return !b.done;
    if (bucketFilter === 'Completed') return b.done;
    return true;
  });

  const achievedDreamsCount = dreams.filter((d) => d.achieved).length;

  return (
    <div className="section-wrapper" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}
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
          <Sparkles size={14} /> ROOM 06 · YOUR DREAMS & FUTURE SELF
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
          Your Dream Universe
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6, marginBottom: '24px' }}>
          Your personal dashboard to track what inspires you, check off your bucket list, manifest your visual dreams,
          and build your career goals.
        </p>

        {/* Hidden Surprise Button: Letter from Your Future Self */}
        <button
          onClick={() => {
            playSealCrack();
            setFutureLetterOpen(true);
          }}
          className="glass-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 22px',
            fontSize: '0.86rem',
            fontWeight: 700,
            color: '#843b4e',
            border: '1.5px solid #d48296',
            background: 'linear-gradient(135deg, #fff7fa, #ffffff)',
            boxShadow: '0 4px 18px rgba(186, 99, 120, 0.2)',
            cursor: 'pointer',
          }}
        >
          <Mail size={16} color="#ba6378" />
          <span>✨ Tap to Unseal a Message From Your Future Self</span>
        </button>
      </motion.div>

      {/* --- MODULE A: YOUR BUCKET LIST --- */}
      <section style={{ maxWidth: '1050px', margin: '0 auto 64px auto' }}>
        <div
          className="glass-panel"
          style={{
            padding: '32px 28px',
            borderRadius: '24px',
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
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#ba6378',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                MODULE A · CHECKLIST
              </span>
              <h2 className="font-serif" style={{ fontSize: '1.85rem', color: '#472935', fontWeight: 700 }}>
                Your Bucket List
              </h2>
            </div>

            {/* Completion Progress Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ba6378' }}>
                  {completedBucketCount} of {bucketList.length} Completed ({bucketProgress}%)
                </div>
                <div
                  style={{
                    width: '180px',
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

              <button
                onClick={() => handleOpenBucketModal(null)}
                className="btn-primary"
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                <Plus size={15} /> Add Item
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {['All', 'Pending', 'Completed'].map((tab) => {
              const isActive = bucketFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setBucketFilter(tab)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    border: isActive ? '1px solid #ba6378' : '1px solid rgba(220, 180, 195, 0.4)',
                    background: isActive ? '#ba6378' : 'rgba(255, 255, 255, 0.85)',
                    color: isActive ? '#ffffff' : '#67404e',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {tab} ({tab === 'All' ? bucketList.length : tab === 'Pending' ? bucketList.length - completedBucketCount : completedBucketCount})
                </button>
              );
            })}
          </div>

          {/* Bucket List Items */}
          {filteredBucketList.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '36px 16px', color: '#946573' }}>
              <p style={{ fontSize: '0.94rem' }}>No bucket list items in this view. Click "Add Item" to add one!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredBucketList.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '14px',
                    background: item.done ? '#fdf2f5' : '#ffffff',
                    border: item.done ? '1px solid #eec8d5' : '1px solid rgba(220, 180, 195, 0.35)',
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    onClick={() => toggleBucketDone(item.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', flex: 1 }}
                  >
                    {item.done ? (
                      <CheckCircle2 size={20} color="#ba6378" fill="#f8e4eb" />
                    ) : (
                      <Circle size={20} color="#deb3c0" />
                    )}
                    <div>
                      <span
                        style={{
                          fontSize: '0.92rem',
                          color: item.done ? '#8e5d6d' : '#3e242d',
                          textDecoration: item.done ? 'line-through' : 'none',
                          fontWeight: item.done ? 500 : 600,
                        }}
                      >
                        {item.title}
                      </span>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '2px', fontSize: '0.74rem', color: '#ba6378' }}>
                        <span>✦ {item.category}</span>
                        {item.targetDate && <span>• Target: {item.targetDate}</span>}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleOpenBucketModal(item)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#8e5d6d' }}
                      title="Edit Item"
                    >
                      <Edit2 size={15} />
                    </button>
                    <button
                      onClick={() => confirmDelete('bucket', item.id, item.title)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#ba6378' }}
                      title="Delete Item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- MODULE B: YOUR DREAMS BOARD --- */}
      <section style={{ maxWidth: '1050px', margin: '0 auto 64px auto' }}>
        <div
          className="glass-panel"
          style={{
            padding: '32px 28px',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, #ffffff, #faf5fc)',
            border: '1.5px solid rgba(220, 195, 235, 0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#9068b5',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                MODULE B · VISUAL MANIFESTATION
              </span>
              <h2 className="font-serif" style={{ fontSize: '1.85rem', color: '#472935', fontWeight: 700 }}>
                Your Dreams Board
              </h2>
            </div>

            <button
              onClick={() => handleOpenDreamModal(null)}
              className="btn-primary"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                background: 'linear-gradient(135deg, #b08dd6, #9068b5)',
              }}
            >
              <Plus size={15} /> Add Dream
            </button>
          </div>

          {/* Dreams Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {dreams.map((dream) => (
              <div
                key={dream.id}
                className="glass-card"
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: dream.achieved ? '2px solid #b08dd6' : '1px solid rgba(220, 195, 235, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ height: '170px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={dream.image}
                      alt={dream.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#7b4ea4',
                      }}
                    >
                      {dream.category}
                    </div>

                    {dream.achieved && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          background: '#8a58b5',
                          color: '#ffffff',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        ✓ Achieved!
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '16px' }}>
                    <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#3e242d', marginBottom: '6px' }}>
                      {dream.title}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: '#7d5964', lineHeight: 1.5 }}>
                      {dream.description}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px 16px',
                    borderTop: '1px solid rgba(220, 195, 235, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={() => toggleDreamAchieved(dream.id)}
                    style={{
                      border: 'none',
                      background: dream.achieved ? '#f5eefc' : '#ffffff',
                      color: dream.achieved ? '#7b4ea4' : '#67404e',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <CheckCircle2 size={15} color={dream.achieved ? '#8a58b5' : '#aaa'} />
                    {dream.achieved ? 'Achieved' : 'Mark Achieved'}
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleOpenDreamModal(dream)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#8e5d6d' }}
                      title="Edit Dream"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => confirmDelete('dream', dream.id, dream.title)}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#ba6378' }}
                      title="Delete Dream"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODULE C: YOUR GOALS & "YOUR FUTURE SELF" --- */}
      <section style={{ maxWidth: '1050px', margin: '0 auto 64px auto' }}>
        <div
          className="glass-panel"
          style={{
            padding: '32px 28px',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, #ffffff, #fffdfb)',
            border: '1.5px solid rgba(220, 180, 195, 0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#ba6378',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                MODULE C · YOUR FUTURE SELF & CAREER
              </span>
              <h2 className="font-serif" style={{ fontSize: '1.85rem', color: '#472935', fontWeight: 700 }}>
                Your Goals & Career Dashboard
              </h2>
            </div>

            <button
              onClick={() => handleOpenGoalModal(null)}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <Plus size={15} /> Add Goal
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '20px',
            }}
          >
            {goals.map((g) => (
              <div
                key={g.id}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid rgba(220, 180, 195, 0.35)',
                  boxShadow: '0 4px 14px rgba(180, 100, 125, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        background: g.isCareerOrEducation ? '#fcebf0' : '#f4edf9',
                        color: g.isCareerOrEducation ? '#94495c' : '#7b4ea4',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}
                    >
                      {g.category}
                    </span>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ba6378' }}>
                      {g.progress}%
                    </span>
                  </div>

                  <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#3e242d', marginBottom: '6px' }}>
                    {g.title}
                  </h4>

                  {g.notes && (
                    <p style={{ fontSize: '0.82rem', color: '#7d5964', lineHeight: 1.5, marginBottom: '12px' }}>
                      {g.notes}
                    </p>
                  )}

                  {g.deadline && (
                    <div style={{ fontSize: '0.75rem', color: '#946573', marginBottom: '12px' }}>
                      Target Date: {g.deadline}
                    </div>
                  )}

                  {/* Progress Slider */}
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
                      marginBottom: '8px',
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '8px',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  <button
                    onClick={() => handleOpenGoalModal(g)}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#8e5d6d' }}
                    title="Edit Goal"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    onClick={() => confirmDelete('goal', g.id, g.title)}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#ba6378' }}
                    title="Delete Goal"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        <Link to="/finale" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.92rem' }}>
          <span>Next Room: Grand Finale</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* --- MODAL 1: ADD / EDIT BUCKET LIST ITEM --- */}
      {activeModal === 'bucket' && (
        <ModalContainer onClose={() => setActiveModal(null)} title={editItem ? 'Edit Bucket List Item' : 'Add to Your Bucket List'}>
          <form onSubmit={handleSaveBucket} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Item Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Learn scuba diving or visit Kyoto"
                value={bucketForm.title}
                onChange={(e) => setBucketForm({ ...bucketForm, title: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Category
                </label>
                <select
                  value={bucketForm.category}
                  onChange={(e) => setBucketForm({ ...bucketForm, category: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none', background: '#fff' }}
                >
                  <option value="Travel">Travel</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Experiences">Experiences</option>
                  <option value="Learning">Learning</option>
                  <option value="Fun">Fun</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Target Year / Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2027"
                  value={bucketForm.targetDate}
                  onChange={(e) => setBucketForm({ ...bucketForm, targetDate: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
              <button type="button" onClick={() => setActiveModal(null)} className="btn-secondary" style={{ padding: '8px 18px' }}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" style={{ padding: '8px 22px' }}>
                Save Item
              </button>
            </div>
          </form>
        </ModalContainer>
      )}

      {/* --- MODAL 2: ADD / EDIT DREAM --- */}
      {activeModal === 'dream' && (
        <ModalContainer onClose={() => setActiveModal(null)} title={editItem ? 'Edit Dream' : 'Add to Your Dreams Board'}>
          <form onSubmit={handleSaveDream} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Dream Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sunrise Hot Air Balloon Flight"
                value={dreamForm.title}
                onChange={(e) => setDreamForm({ ...dreamForm, title: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Description
              </label>
              <textarea
                rows={2}
                placeholder="Describe this dream and what it feels like..."
                value={dreamForm.description}
                onChange={(e) => setDreamForm({ ...dreamForm, description: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none', fontFamily: 'inherit' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Category
                </label>
                <select
                  value={dreamForm.category}
                  onChange={(e) => setDreamForm({ ...dreamForm, category: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none', background: '#fff' }}
                >
                  <option value="Travel Dreams">Travel Dreams</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Personal Dreams">Personal Dreams</option>
                  <option value="Experiences">Experiences</option>
                  <option value="Future Plans">Future Plans</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Image URL (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={dreamForm.image}
                  onChange={(e) => setDreamForm({ ...dreamForm, image: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
              <button type="button" onClick={() => setActiveModal(null)} className="btn-secondary" style={{ padding: '8px 18px' }}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" style={{ padding: '8px 22px' }}>
                Save Dream
              </button>
            </div>
          </form>
        </ModalContainer>
      )}

      {/* --- MODAL 3: ADD / EDIT GOAL --- */}
      {activeModal === 'goal' && (
        <ModalContainer onClose={() => setActiveModal(null)} title={editItem ? 'Edit Goal' : 'Add to Your Goals Dashboard'}>
          <form onSubmit={handleSaveGoal} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Goal Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Lead a Major Professional Project"
                value={goalForm.title}
                onChange={(e) => setGoalForm({ ...goalForm, title: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Category
                </label>
                <select
                  value={goalForm.category}
                  onChange={(e) => setGoalForm({ ...goalForm, category: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none', background: '#fff' }}
                >
                  <option value="Career">Career</option>
                  <option value="Education">Education</option>
                  <option value="Skills">Skills</option>
                  <option value="Personal Growth">Personal Growth</option>
                  <option value="Health">Health</option>
                  <option value="Financial Goals">Financial Goals</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                  Target Deadline
                </label>
                <input
                  type="date"
                  value={goalForm.deadline}
                  onChange={(e) => setGoalForm({ ...goalForm, deadline: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none', background: '#fff' }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Current Progress ({goalForm.progress}%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={goalForm.progress}
                onChange={(e) => setGoalForm({ ...goalForm, progress: e.target.value })}
                style={{ width: '100%', accentColor: '#ba6378', cursor: 'pointer' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#472935', marginBottom: '4px' }}>
                Personal Notes / Next Action
              </label>
              <input
                type="text"
                placeholder="What is your next quiet step towards this goal?"
                value={goalForm.notes}
                onChange={(e) => setGoalForm({ ...goalForm, notes: e.target.value })}
                style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #deb3c0', outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
              <button type="button" onClick={() => setActiveModal(null)} className="btn-secondary" style={{ padding: '8px 18px' }}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" style={{ padding: '8px 22px' }}>
                Save Goal
              </button>
            </div>
          </form>
        </ModalContainer>
      )}

      {/* --- MODAL 4: DELETE CONFIRMATION --- */}
      {activeModal === 'deleteConfirm' && deleteTarget && (
        <ModalContainer onClose={() => setActiveModal(null)} title="Confirm Deletion">
          <p style={{ fontSize: '0.94rem', color: '#67404e', marginBottom: '20px' }}>
            Are you sure you want to delete <strong>“{deleteTarget.title}”</strong>?
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button onClick={() => setActiveModal(null)} className="btn-secondary" style={{ padding: '8px 18px' }}>
              Keep It
            </button>
            <button
              onClick={executeDelete}
              className="btn-primary"
              style={{ padding: '8px 20px', background: '#a8475e' }}
            >
              Yes, Delete
            </button>
          </div>
        </ModalContainer>
      )}

      {/* --- MODAL 5: LETTER FROM FUTURE SELF SURPRISE --- */}
      {futureLetterOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(35, 18, 25, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setFutureLetterOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="letter-parchment"
            style={{
              width: '100%',
              maxWidth: '620px',
              padding: 'clamp(28px, 5vw, 48px)',
              borderRadius: '24px',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setFutureLetterOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                border: 'none',
                background: 'rgba(235, 200, 215, 0.4)',
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

            <div style={{ borderBottom: '1px solid rgba(210, 175, 185, 0.35)', paddingBottom: '14px', marginBottom: '20px' }}>
              <span className="font-serif" style={{ fontSize: '1rem', fontStyle: 'italic', color: '#843b4e' }}>
                {initialDreamUniverseData.futureSelfLetter.date}
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#472935', fontWeight: 700, marginTop: '4px' }}>
                {initialDreamUniverseData.futureSelfLetter.title}
              </h3>
            </div>

            <p
              className="font-serif"
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#472935',
                marginBottom: '24px',
              }}
            >
              “{initialDreamUniverseData.futureSelfLetter.message}”
            </p>

            <div style={{ textAlign: 'right' }}>
              <div className="font-script" style={{ fontSize: '1.8rem', color: '#ba6378' }}>
                With pride & love, Your Future Self ✨
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// Reusable Modal Container
function ModalContainer({ onClose, title, children }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(35, 18, 25, 0.6)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '540px',
          padding: '28px',
          borderRadius: '24px',
          background: '#ffffff',
          boxShadow: '0 25px 60px -15px rgba(180, 80, 110, 0.3)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            border: 'none',
            background: '#fbe4eb',
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

        <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#472935', marginBottom: '18px' }}>
          {title}
        </h3>

        {children}
      </motion.div>
    </div>
  );
}
