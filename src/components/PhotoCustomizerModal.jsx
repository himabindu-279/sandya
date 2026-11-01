import { useState } from 'react';
import { Camera, Check, RefreshCw, Sparkles, Upload, X } from 'lucide-react';
import { playChime } from '../utils/audio';

export default function PhotoCustomizerModal({
  isOpen,
  onClose,
  friendName,
  onUpdateFriendName,
  customImages,
  onUpdateImage,
  onResetImages,
}) {
  const [tempName, setTempName] = useState(friendName);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const photoSlots = [
    { key: 'hero', label: '1. Hero Portrait', file: 'friend-hero.jpg', desc: 'Main landing page portrait' },
    { key: 'portrait1', label: '2. Her World Portrait 1', file: 'friend-portrait-1.jpg', desc: 'Page 2: Radiant smile & personality' },
    { key: 'portrait2', label: '3. Her World Portrait 2', file: 'friend-portrait-2.jpg', desc: 'Page 2: Aesthetic elegance' },
    { key: 'friendship1', label: '4. Friendship Memory 1', file: 'friendship-memory-1.jpg', desc: 'Page 3: Friendship scrapbook diary' },
    { key: 'friendship2', label: '5. Friendship Memory 2', file: 'friendship-memory-2.jpg', desc: 'Page 3: Chaotic adventure memory' },
    { key: 'birthday', label: '6. Birthday Celebration Photo', file: 'birthday-photo.jpg', desc: 'Page 5 & 11: Milestone 20 photo' },
    { key: 'surprise', label: '7. Secret Surprise Photo', file: 'surprise-photo.jpg', desc: 'Page 10: Revealed keepsake photo' },
  ];

  const handleFileUpload = (key, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      onUpdateImage(key, dataUrl);
      playChime();
      setSuccessMsg(`Updated ${key} photo successfully!`);
      setTimeout(() => setSuccessMsg(''), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdateFriendName(tempName.trim());
      playChime();
      setSuccessMsg("Friend's name updated!");
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(50, 25, 35, 0.55)',
        backdropFilter: 'blur(8px)',
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
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '28px',
          position: 'relative',
          background: 'linear-gradient(145deg, #fffcfd, #fff7fa)',
          border: '1px solid rgba(255, 235, 240, 0.95)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(120, 50, 75, 0.3)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            border: 'none',
            background: 'rgba(235, 200, 215, 0.3)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#6e4752',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(240, 195, 210, 0.3)',
              color: '#ba6378',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            <Sparkles size={14} /> PHOTO & PERSONALIZATION MANAGER
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: '2rem',
              color: '#472935',
              fontWeight: 600,
              marginBottom: '6px',
            }}
          >
            Customize Her Little Universe
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#7d5964', maxWidth: '520px', margin: '0 auto' }}>
            Upload her real photos directly from your computer or drop your JPG files into{' '}
            <code style={{ background: '#f8e4eb', padding: '2px 6px', borderRadius: '4px', color: '#94495c' }}>
              public/assets/images/
            </code>
            .
          </p>
        </div>

        {successMsg && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '12px',
              background: '#eaf8ec',
              border: '1px solid #c2ebc7',
              color: '#267332',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            <Check size={16} /> {successMsg}
          </div>
        )}

        {/* Edit Name Section */}
        <form onSubmit={handleSaveName} style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#472935', marginBottom: '8px' }}>
            Friend's Name:
          </label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="e.g. Sanjana"
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '12px',
                border: '1px solid #deb3c0',
                background: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: '#3e242d',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              Save Name
            </button>
          </div>
        </form>

        {/* Upload Slots Section */}
        <div style={{ marginBottom: '24px' }}>
          <h3
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              color: '#472935',
              fontWeight: 600,
              marginBottom: '14px',
            }}
          >
            Photo Upload Slots ({photoSlots.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {photoSlots.map((slot) => {
              const currentSrc = customImages[slot.key] || `/assets/images/${slot.file}`;
              return (
                <div
                  key={slot.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(220, 180, 195, 0.35)',
                    boxShadow: '0 2px 8px rgba(180, 100, 125, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        border: '1px solid #deb3c0',
                        background: '#fdf2f4',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={currentSrc}
                        alt={slot.label}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#3e242d', marginBottom: '2px' }}>
                        {slot.label}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#8e5d6d' }}>
                        {slot.desc} • <code style={{ fontSize: '0.75rem', color: '#ba6378' }}>{slot.file}</code>
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '9999px',
                        background: '#f8e4eb',
                        color: '#9e4b60',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: '1px solid #eec8d5',
                        transition: 'all 0.2s',
                      }}
                    >
                      <Upload size={14} /> Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(slot.key, e)}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid rgba(220, 180, 195, 0.3)',
          }}
        >
          <button
            onClick={onResetImages}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: '#8e5d6d',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            <RefreshCw size={14} /> Reset photos to default
          </button>

          <button onClick={onClose} className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
