import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Maximize2, Plus, Sparkles, Upload, X } from 'lucide-react';
import { photoScrapbookData as defaultPhotos } from '../data/universeData';
import { playChime } from '../utils/audio';

const STORAGE_KEY = 'her-universe-photo-scrapbook';

export default function Page9PhotoScrapbook({ friendName, customImages, onOpenCustomizer }) {
  const [photos, setPhotos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultPhotos;
    } catch {
      return defaultPhotos;
    }
  });

  const [activeFilter, setActiveFilter] = useState('ALL PHOTOS');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [likesMap, setLikesMap] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.error(e);
    }
  }, [photos]);

  const filters = [
    'ALL PHOTOS',
    'HER BEAUTIFUL MOMENTS',
    'FRIENDSHIP MEMORIES',
    'CELEBRATIONS',
    'CANDID MOMENTS',
  ];

  // Resolve image: if customImages has override, use it
  const resolvePhotoSrc = (item) => {
    if (item.image && !item.image.includes('/assets/images/')) return item.image;
    if (item.id === 'p1' && customImages.portrait1) return customImages.portrait1;
    if (item.id === 'p2' && customImages.friendship1) return customImages.friendship1;
    if (item.id === 'p3' && customImages.portrait2) return customImages.portrait2;
    if (item.id === 'p4' && customImages.birthday) return customImages.birthday;
    if (item.id === 'p5' && customImages.hero) return customImages.hero;
    if (item.id === 'p6' && customImages.friendship2) return customImages.friendship2;
    if (item.id === 'p7' && customImages.surprise) return customImages.surprise;
    return item.image;
  };

  const filteredPhotos = photos.filter((p) => {
    if (activeFilter === 'ALL PHOTOS') return true;
    return p.category === activeFilter;
  });

  const handleLike = (id, e) => {
    e.stopPropagation();
    playChime();
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const openLightbox = (index) => {
    playChime();
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section id="page-9" className="section-wrapper" style={{ position: 'relative' }}>
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
          <Sparkles size={14} /> CHAPTER 20 · PHOTO SCRAPBOOK
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
          Our Little World — A Scrapbook of Us
        </h2>

        <p style={{ fontSize: '1.05rem', color: '#7d5964', lineHeight: 1.6, marginBottom: '24px' }}>
          Every picture holds a piece of laughter, honest conversation, and genuine friendship. Click any polaroid to
          view it in full-screen lightbox.
        </p>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => {
                  playChime();
                  setActiveFilter(f);
                }}
                className="glass-pill"
                style={{
                  padding: '7px 16px',
                  fontSize: '0.82rem',
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
                {f}
              </button>
            );
          })}
        </div>

        {/* Quick Photo Upload Drawer Trigger */}
        <button
          onClick={onOpenCustomizer}
          className="btn-secondary"
          style={{ padding: '8px 20px', fontSize: '0.85rem' }}
        >
          <Upload size={14} /> Upload & Replace Scrapbook Photos
        </button>
      </div>

      {/* Polaroid Masonry / Responsive Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        {filteredPhotos.map((item, index) => {
          const imgSrc = resolvePhotoSrc(item);
          const currentLikes = item.likes + (likesMap[item.id] || 0);

          return (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="polaroid-frame"
              style={{
                transform: `rotate(${item.rotation || '0deg'})`,
                cursor: 'pointer',
              }}
            >
              {/* Washi Tape Accent */}
              <div className="washi-tape" />

              {/* Photo Image */}
              <div
                style={{
                  width: '100%',
                  height: '320px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: '#fcf0f3',
                  marginBottom: '16px',
                  position: 'relative',
                }}
              >
                <img
                  src={imgSrc}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6e4752',
                  }}
                  title="Click to view full screen"
                >
                  <Maximize2 size={15} />
                </div>
              </div>

              {/* Polaroid Footer */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#ba6378',
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: '#8e5d6d' }}>{item.date}</span>
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#3e242d',
                    marginBottom: '4px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="font-script"
                  style={{
                    fontSize: '1.15rem',
                    color: '#67404e',
                    lineHeight: 1.4,
                    marginBottom: '12px',
                  }}
                >
                  “{item.caption}”
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  <button
                    onClick={(e) => handleLike(item.id, e)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#ba6378',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                    }}
                  >
                    <Heart size={15} fill="#ba6378" /> {currentLikes} Loves
                  </button>
                  <span style={{ fontSize: '0.75rem', color: '#a07d88' }}>Tap to expand</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(25, 12, 18, 0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={24} />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevLightbox}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextLightbox}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Central Image & Caption Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                maxHeight: '68vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <img
                src={resolvePhotoSrc(filteredPhotos[lightboxIndex])}
                alt={filteredPhotos[lightboxIndex].title}
                style={{
                  maxHeight: '68vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                }}
              />
            </div>

            <div
              style={{
                textAlign: 'center',
                color: '#ffffff',
                maxWidth: '600px',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: '#deb3c0', letterSpacing: '0.08em', marginBottom: '4px' }}>
                {filteredPhotos[lightboxIndex].category} • {filteredPhotos[lightboxIndex].date} (Photo{' '}
                {lightboxIndex + 1} of {filteredPhotos.length})
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p
                className="font-script"
                style={{
                  fontSize: '1.35rem',
                  color: '#fed8e2',
                }}
              >
                “{filteredPhotos[lightboxIndex].caption}”
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
