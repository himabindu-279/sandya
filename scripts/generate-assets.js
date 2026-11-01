import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const templates = [
  {
    name: 'friend-hero.jpg',
    title: 'Her Hero Portrait',
    subtitle: 'The Girl of the Day · Chapter 20',
    color1: '#fce7ec',
    color2: '#f3e8f8',
    accent: '#d8829d',
    icon: '🌸',
  },
  {
    name: 'friend-portrait-1.jpg',
    title: 'Radiant Smile',
    subtitle: 'Lighting up every room',
    color1: '#fff0e8',
    color2: '#fce7ec',
    accent: '#e2847a',
    icon: '✨',
  },
  {
    name: 'friend-portrait-2.jpg',
    title: 'Grace & Warmth',
    subtitle: 'Effortless style & beauty',
    color1: '#f3e8f8',
    color2: '#fdf2f4',
    accent: '#b889d4',
    icon: '💖',
  },
  {
    name: 'friendship-memory-1.jpg',
    title: 'Unforgettable Days',
    subtitle: 'Endless laughter & stories',
    color1: '#fdf2f4',
    color2: '#fff0e8',
    accent: '#c97a8e',
    icon: '☕',
  },
  {
    name: 'friendship-memory-2.jpg',
    title: 'Adventure & Chaos',
    subtitle: 'Our favorite ridiculous moments',
    color1: '#fce7ec',
    color2: '#f5e6fc',
    accent: '#b079c9',
    icon: '📸',
  },
  {
    name: 'birthday-photo.jpg',
    title: 'Turning 20',
    subtitle: '02 November 2026',
    color1: '#fff5f7',
    color2: '#fbe4eb',
    accent: '#d97d98',
    icon: '🎂',
  },
  {
    name: 'surprise-photo.jpg',
    title: 'A Golden Moment',
    subtitle: 'The best is yet to come',
    color1: '#fff2e5',
    color2: '#fce7ec',
    accent: '#dca06c',
    icon: '🎁',
  },
];

for (const t of templates) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${t.color1}"/>
      <stop offset="50%" stop-color="#fff8f9"/>
      <stop offset="100%" stop-color="${t.color2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0.1"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="900" height="1200" fill="url(#bg)" />

  <!-- Soft background circle -->
  <circle cx="450" cy="500" r="320" fill="url(#glow)" />
  <circle cx="450" cy="500" r="280" fill="none" stroke="${t.accent}" stroke-width="2" stroke-dasharray="6,8" opacity="0.4" />
  <circle cx="450" cy="500" r="250" fill="none" stroke="${t.accent}" stroke-width="1" opacity="0.6" />

  <!-- Botanical corner touches -->
  <g fill="${t.accent}" opacity="0.25">
    <circle cx="120" cy="120" r="16" />
    <circle cx="150" cy="100" r="10" />
    <circle cx="100" cy="150" r="10" />
    <path d="M 120 120 Q 200 130 250 200 Q 180 230 120 120 Z" />
    
    <circle cx="780" cy="1080" r="16" />
    <circle cx="750" cy="1100" r="10" />
    <circle cx="800" cy="1050" r="10" />
    <path d="M 780 1080 Q 700 1070 650 1000 Q 720 970 780 1080 Z" />
  </g>

  <!-- Central Silhouette / Aesthetic Icon Portrait Frame -->
  <g transform="translate(450, 480)">
    <!-- Elegant portrait silhouette frame -->
    <ellipse cx="0" cy="0" rx="170" ry="210" fill="#ffffff" opacity="0.75" />
    <ellipse cx="0" cy="0" rx="160" ry="200" fill="none" stroke="${t.accent}" stroke-width="2" opacity="0.8" />
    
    <!-- Central Icon/Symbol -->
    <text x="0" y="-10" font-size="80" text-anchor="middle" dominant-baseline="central">${t.icon}</text>
    
    <!-- Little Sparkles -->
    <text x="-100" y="-110" font-size="28" fill="${t.accent}" text-anchor="middle">✦</text>
    <text x="110" y="-80" font-size="34" fill="${t.accent}" text-anchor="middle">✧</text>
    <text x="-90" y="100" font-size="30" fill="${t.accent}" text-anchor="middle">✧</text>
    <text x="90" y="90" font-size="26" fill="${t.accent}" text-anchor="middle">✦</text>
  </g>

  <!-- Typography Card overlay -->
  <g transform="translate(450, 840)">
    <rect x="-320" y="0" width="640" height="220" rx="28" fill="#ffffff" opacity="0.88" />
    <rect x="-320" y="0" width="640" height="220" rx="28" fill="none" stroke="${t.accent}" stroke-width="1.5" opacity="0.4" />
    
    <text x="0" y="55" font-family="'Playfair Display', Georgia, serif" font-size="36" font-weight="600" fill="#4a2e35" text-anchor="middle">
      ${t.title}
    </text>
    <text x="0" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="400" fill="#8e5d6d" text-anchor="middle">
      ${t.subtitle}
    </text>
    <text x="0" y="145" font-family="'Dancing Script', cursive" font-size="24" fill="${t.accent}" text-anchor="middle">
      photo slot: /assets/images/${t.name}
    </text>
    <text x="0" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" fill="#a07d88" text-anchor="middle">
      (Click &quot;Customize Photos&quot; to upload her real photo directly!)
    </text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(outDir, t.name), svg, 'utf-8');
  // Also write .svg version for versatility
  fs.writeFileSync(path.join(outDir, t.name.replace('.jpg', '.svg')), svg, 'utf-8');
}

console.log('Successfully generated dreamy placeholder image assets in public/assets/images/');
