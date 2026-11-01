import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Circle, Compass, MapPin, Sparkles, Target } from 'lucide-react';
import { nextChapterData } from '../data/sandyaData';
import { playChime } from '../utils/audio';

export default function Page7NextChapter() {
  const [bucketList, setBucketList] = useState(nextChapterData.bucketList);

  const toggleBucket = (id) => {
    playChime();
    setBucketList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const completedCount = bucketList.filter((b) => b.done).length;
  const progressPercent = Math.round((completedCount / bucketList.length) * 100);

  return (
    <div className="section-wrapper" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}
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
          <Sparkles size={14} /> ROOM 06 · HORIZONS & DREAMS
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
          Her Next Chapter
        </h1>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6 }}>
          {nextChapterData.subtitle}
        </p>
      </motion.div>

      {/* 1. Animated Dream Destinations (Visual-led Cards) */}
      <div style={{ maxWidth: '1050px', margin: '0 auto 60px auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <MapPin size={20} color="#ba6378" />
          <h3 className="font-serif" style={{ fontSize: '1.75rem', color: '#472935' }}>
            Dream Destinations to Wander
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {nextChapterData.destinations.map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#ffffff',
                boxShadow: '0 14px 34px -8px rgba(180, 100, 125, 0.16)',
              }}
            >
              <div style={{ height: '200px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(40, 20, 28, 0.65) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '1.4rem',
                    background: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {dest.icon}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '16px',
                    right: '16px',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {dest.name}
                  </h4>
                </div>
              </div>

              <div style={{ padding: '16px' }}>
                <p style={{ fontSize: '0.84rem', color: '#7d5964', lineHeight: 1.5 }}>
                  {dest.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Bucket List & Career Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '1050px',
          margin: '0 auto 60px auto',
        }}
      >
        {/* Bucket List */}
        <div
          className="glass-card"
          style={{
            padding: '30px 24px',
            background: 'linear-gradient(145deg, #ffffff, #fff7fa)',
            border: '1.5px solid rgba(220, 180, 195, 0.45)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '0.74rem', color: '#ba6378', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                CHECKLIST
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#472935' }}>
                Chapter 20 Bucket List
              </h3>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ba6378' }}>
                {completedCount}/{bucketList.length} Done ({progressPercent}%)
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {bucketList.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleBucket(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: item.done ? '#fdf0f4' : '#ffffff',
                  border: item.done ? '1px solid #f2c7d5' : '1px solid rgba(220, 180, 195, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {item.done ? (
                  <CheckCircle2 size={18} color="#ba6378" fill="#fce4eb" />
                ) : (
                  <Circle size={18} color="#deb3c0" />
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

        {/* Career & Skills Cards */}
        <div
          className="glass-card"
          style={{
            padding: '30px 24px',
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(254, 245, 248, 0.95))',
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '0.74rem', color: '#ba6378', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              AMBITIONS
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#472935' }}>
              Career & Personal Growth
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
            {nextChapterData.careerAndSkills.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '14px',
                  borderRadius: '14px',
                  background: '#ffffff',
                  border: '1px solid rgba(220, 180, 195, 0.35)',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{c.icon}</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#3e242d', marginBottom: '2px' }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: '0.76rem', color: '#7d5964', lineHeight: 1.4 }}>
                  {c.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
    </div>
  );
}
