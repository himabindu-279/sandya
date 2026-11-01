// Web Audio API Ambient Synthesizer & Sound Effects Engine
// Plays a dreamy, magical Music Box acoustic bell rendition of the Happy Birthday Song!

let audioCtx = null;
let isPlaying = false;
let birthdayTimer = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play a single soft bell / music-box note
function playNote(freq, startTime, duration = 1.6, volume = 0.08) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const overtone = ctx.createOscillator();
  const gain = ctx.createGain();

  // Fundamental crystal chime tone (sine)
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, startTime);

  // Subtle sparkle harmonic an octave higher
  overtone.type = 'sine';
  overtone.frequency.setValueAtTime(freq * 2, startTime);

  // Music-box bell envelope (delicate attack, natural warm exponential decay)
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  overtone.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  overtone.start(startTime);
  osc.stop(startTime + duration + 0.05);
  overtone.stop(startTime + duration + 0.05);
}

// Complete Happy Birthday Song melody in C Major with gentle harmony chimes
const happyBirthdayMelody = [
  // Phrase 1: "Happy Birthday to you"
  { note: 392.00, time: 0.0, dur: 0.35, chord: [130.81, 196.00] }, // G4, C3+G3
  { note: 392.00, time: 0.45, dur: 0.35 },                         // G4
  { note: 440.00, time: 0.9, dur: 0.7 },                           // A4
  { note: 392.00, time: 1.7, dur: 0.7 },                           // G4
  { note: 523.25, time: 2.5, dur: 0.7 },                           // C5
  { note: 493.88, time: 3.3, dur: 1.4, chord: [98.00, 146.83] },   // B4, G2+D3

  // Phrase 2: "Happy Birthday to you"
  { note: 392.00, time: 5.0, dur: 0.35, chord: [98.00, 146.83] },  // G4
  { note: 392.00, time: 5.45, dur: 0.35 },                         // G4
  { note: 440.00, time: 5.9, dur: 0.7 },                           // A4
  { note: 392.00, time: 6.7, dur: 0.7 },                           // G4
  { note: 587.33, time: 7.5, dur: 0.7 },                           // D5
  { note: 523.25, time: 8.3, dur: 1.4, chord: [130.81, 196.00] }, // C5, C3+G3

  // Phrase 3: "Happy Birthday dear Sandya"
  { note: 392.00, time: 10.0, dur: 0.35, chord: [130.81, 261.63] }, // G4
  { note: 392.00, time: 10.45, dur: 0.35 },                          // G4
  { note: 783.99, time: 10.9, dur: 0.7 },                            // G5
  { note: 659.25, time: 11.7, dur: 0.7 },                            // E5
  { note: 523.25, time: 12.5, dur: 0.7, chord: [87.31, 174.61] },    // C5, F2+F3
  { note: 493.88, time: 13.3, dur: 0.7 },                            // B4
  { note: 440.00, time: 14.1, dur: 1.4, chord: [87.31, 174.61] },   // A4

  // Phrase 4: "Happy Birthday to you!"
  { note: 698.46, time: 15.8, dur: 0.35, chord: [87.31, 130.81] },   // F5, F2+C3
  { note: 698.46, time: 16.25, dur: 0.35 },                          // F5
  { note: 659.25, time: 16.7, dur: 0.7, chord: [130.81, 196.00] },  // E5, C3+G3
  { note: 523.25, time: 17.5, dur: 0.7 },                            // C5
  { note: 587.33, time: 18.3, dur: 0.7, chord: [98.00, 146.83] },   // D5, G2+D3
  { note: 523.25, time: 19.1, dur: 2.3, chord: [130.81, 261.63] },  // C5 (celebratory ring), C3+C4
];

const loopDurationMs = 22000;

function stepBirthdaySong() {
  if (!isPlaying) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime + 0.05;

  happyBirthdayMelody.forEach((item) => {
    // Lead music box note
    playNote(item.note, now + item.time, item.dur + 0.6, 0.075);

    // Warm bass harmony chime if present
    if (item.chord) {
      item.chord.forEach((bassFreq, bIdx) => {
        playNote(bassFreq, now + item.time + bIdx * 0.04, 2.0, 0.045);
      });
    }
  });

  birthdayTimer = setTimeout(stepBirthdaySong, loopDurationMs);
}

export function startAmbientMusic() {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (isPlaying) return;
  isPlaying = true;
  stepBirthdaySong();
}

export function stopAmbientMusic() {
  isPlaying = false;
  if (birthdayTimer) {
    clearTimeout(birthdayTimer);
    birthdayTimer = null;
  }
}

export function toggleAmbientMusic() {
  if (isPlaying) {
    stopAmbientMusic();
    return false;
  } else {
    startAmbientMusic();
    return true;
  }
}

export function isMusicPlaying() {
  return isPlaying;
}

// Sound Effect: Soft Chime / Sparkle
export function playChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, i) => {
    playNote(freq, now + i * 0.08, 1.2, 0.08);
  });
}

// Sound Effect: Candle Blow / Air Puff
export function playCandleBlow() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const bufferSize = ctx.sampleRate * 0.35;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(600, now);
  filter.frequency.exponentialRampToValueAtTime(150, now + 0.35);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);

  setTimeout(() => {
    playNote(880, ctx.currentTime, 1.5, 0.05);
    playNote(1174.66, ctx.currentTime + 0.1, 1.5, 0.05);
  }, 200);
}

// Sound Effect: Magical Confetti Pop / Celebration Flourish
export function playConfettiPop() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const notes = [392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51];
  notes.forEach((freq, i) => {
    playNote(freq, now + i * 0.06, 1.8, 0.09);
  });
}

// Sound Effect: Gift Box Reveal
export function playGiftReveal() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];
  notes.forEach((freq, i) => {
    playNote(freq, now + i * 0.07, 2.2, 0.08);
  });
}

// Sound Effect: Wax Seal Crack / Envelope Open
export function playSealCrack() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playNote(659.25, now, 0.4, 0.06);
  playNote(880, now + 0.06, 0.8, 0.08);
  playNote(1318.51, now + 0.14, 1.4, 0.09);
}
