import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const templates = [
  {
    name: 'sandya-hero.jpg',
    title: 'Sandya',
    subtitle: 'Chapter 20 Hero Portrait',
    color1: '#fde2e8',
    color2: '#f6d5e7',
    accent: '#c86f87',
    icon: '🌸',
  },
  {
    name: 'sandya-portrait-1.jpg',
    title: 'Radiance',
    subtitle: 'Sandya Editorial Solo',
    color1: '#fff0e6',
    color2: '#fce3eb',
    accent: '#d97d98',
    icon: '✨',
  },
  {
    name: 'sandya-portrait-2.jpg',
    title: 'Golden Hour',
    subtitle: 'Effortless Poise & Smile',
    color1: '#f4e8fb',
    color2: '#fbe7ed',
    accent: '#b87ec8',
    icon: '📸',
  },
  {
    name: 'sandya-portrait-3.jpg',
    title: 'Grace',
    subtitle: 'Quiet Moments & Joy',
    color1: '#fff4f8',
    color2: '#fae1eb',
    accent: '#cf6d89',
    icon: '🕊️',
  },
  {
    name: 'family-main.jpg',
    title: 'Family World',
    subtitle: 'The Heart of Everything',
    color1: '#f8ece1',
    color2: '#fcebe6',
    accent: '#b3785a',
    icon: '🏡',
  },
  {
    name: 'family-memory-1.jpg',
    title: 'Family Celebration',
    subtitle: 'Together in Love & Joy',
    color1: '#f9eee3',
    color2: '#fbe2e9',
    accent: '#c07b6a',
    icon: '🌿',
  },
  {
    name: 'family-memory-2.jpg',
    title: 'Warmth & Home',
    subtitle: 'Cherished Family Moments',
    color1: '#fbe8ec',
    color2: '#f5e4dc',
    accent: '#a96a57',
    icon: '🌻',
  },
  {
    name: 'family-memory-3.jpg',
    title: 'Generations of Smiles',
    subtitle: 'The Roots That Ground You',
    color1: '#fff3ec',
    color2: '#fde5eb',
    accent: '#bd725d',
    icon: '🌾',
  },
  {
    name: 'friendship-1.jpg',
    title: 'Our Memories',
    subtitle: 'Laughs That Echo For Years',
    color1: '#fce4ed',
    color2: '#f2e6fa',
    accent: '#ba6378',
    icon: '☕',
  },
  {
    name: 'friendship-2.jpg',
    title: 'Adventures Together',
    subtitle: 'The Little Chaos We Love',
    color1: '#fbe8f1',
    color2: '#fff2e8',
    accent: '#a8576d',
    icon: '💫',
  },
  {
    name: 'friendship-3.jpg',
    title: 'Golden Days',
    subtitle: 'True Friends Through The Years',
    color1: '#f7eafc',
    color2: '#fce8f0',
    accent: '#9a5382',
    icon: '🤍',
  },
  {
    name: 'birthday-photo.jpg',
    title: 'Turning 20',
    subtitle: '02.11.2026 Celebration',
    color1: '#fde3ec',
    color2: '#fbf0f5',
    accent: '#d46e8c',
    icon: '🎂',
  },
  {
    name: 'gift-surprise.jpg',
    title: 'A Golden Keepsake',
    subtitle: 'The Mystery Keepsake',
    color1: '#fff5ea',
    color2: '#fde3ed',
    accent: '#d49852',
    icon: '🎁',
  },
];

for (const t of templates) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${t.color1}"/>
      <stop offset="50%" stop-color="#fff8fa"/>
      <stop offset="100%" stop-color="${t.color2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="48%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0.12"/>
    </radialGradient>
  </defs>

  <rect width="900" height="1200" fill="url(#bg)" />

  <!-- Botanical flourishes -->
  <g fill="${t.accent}" opacity="0.18">
    <circle cx="140" cy="140" r="14" />
    <circle cx="165" cy="115" r="9" />
    <path d="M 140 140 Q 220 150 260 220 Q 190 250 140 140 Z" />
    <circle cx="760" cy="1060" r="14" />
    <path d="M 760 1060 Q 680 1050 640 980 Q 710 950 760 1060 Z" />
  </g>

  <!-- Central Silhouette / Aesthetic Icon Frame -->
  <circle cx="450" cy="520" r="280" fill="url(#glow)" />
  <circle cx="450" cy="520" r="240" fill="none" stroke="${t.accent}" stroke-width="1.8" stroke-dasharray="8,8" opacity="0.45" />

  <g transform="translate(450, 500)">
    <ellipse cx="0" cy="0" rx="160" ry="200" fill="#ffffff" opacity="0.88" />
    <ellipse cx="0" cy="0" rx="150" ry="190" fill="none" stroke="${t.accent}" stroke-width="2" opacity="0.75" />
    <text x="0" y="-10" font-size="80" text-anchor="middle" dominant-baseline="central">${t.icon}</text>
    <text x="-90" y="-90" font-size="28" fill="${t.accent}" text-anchor="middle">✦</text>
    <text x="95" y="-70" font-size="32" fill="${t.accent}" text-anchor="middle">✧</text>
    <text x="80" y="80" font-size="26" fill="${t.accent}" text-anchor="middle">✦</text>
  </g>

  <!-- Typography Card -->
  <g transform="translate(450, 860)">
    <rect x="-300" y="0" width="600" height="190" rx="24" fill="#ffffff" opacity="0.92" />
    <rect x="-300" y="0" width="600" height="190" rx="24" fill="none" stroke="${t.accent}" stroke-width="1.5" opacity="0.35" />
    <text x="0" y="55" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="700" fill="#3e242d" text-anchor="middle">
      ${t.title}
    </text>
    <text x="0" y="96" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="500" fill="#7d5964" text-anchor="middle">
      ${t.subtitle}
    </text>
    <text x="0" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" fill="${t.accent}" text-anchor="middle">
      public/images/${t.name}
    </text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(outDir, t.name), svg, 'utf-8');
}

console.log('Successfully generated image assets in public/images/');
