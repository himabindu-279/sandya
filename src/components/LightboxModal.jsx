import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !items || items.length === 0 || currentIndex === null) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(25, 12, 18, 0.94)',
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
        onClick={onClose}
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
        aria-label="Close photo"
      >
        <X size={24} />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
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
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
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
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Main Image View */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxHeight: '70vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '16px',
          }}
        >
          <img
            src={currentItem.src || currentItem.image}
            alt={currentItem.title || 'Photograph'}
            style={{
              maxHeight: '70vh',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>

        <div style={{ textAlign: 'center', color: '#ffffff', maxWidth: '640px' }}>
          {currentItem.tag && (
            <div style={{ fontSize: '0.78rem', color: '#f8c7d8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
              {currentItem.tag} • Photo {currentIndex + 1} of {items.length}
            </div>
          )}
          {currentItem.title && (
            <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '6px' }}>
              {currentItem.title}
            </h3>
          )}
          {currentItem.caption && (
            <p className="font-script" style={{ fontSize: '1.35rem', color: '#fed8e2' }}>
              “{currentItem.caption}”
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
