// Central Configuration File for "SANDYA — A WORLD OF YOUR OWN"
// Pure second-person language: addressing Sandya directly with YOU, YOUR, and YOU ARE.

export const sandyaConfig = {
  name: 'Sandya',
  title: 'SANDYA — A WORLD OF YOUR OWN',
  milestone: 'CHAPTER 20',
  birthDate: '02.11.2006',
  celebrationDate: '02.11.2026',
  dateFormatted: '02 November 2026',
  tagline: 'A little universe created to celebrate you.',
  finaleLine: 'Your next chapter starts now.',
};

// Central Image Map: Sandya's actual photographs and module assets
export const imageMap = {
  // Sandya's Genuine Photographs
  sandyaHero: '/images/sandya-green-pink.jpg',
  sandyaGreenPink: '/images/sandya-green-pink.jpg',
  sandyaWoodenDoors: '/images/sandya-wooden-doors.jpg',
  sandyaLawnPink: '/images/sandya-lawn-pink.jpg',
  sandyaTempleSteps: '/images/sandya-temple-steps.jpg',
  sandyaHeartArch: '/images/sandya-heart-arch.jpg',
  sandyaBlueDress: '/images/sandya-blue-dress.jpg',
  sandyaScarfWrap: '/images/sandya-scarf-wrap.jpg',
  sandyaChildhood: '/images/sandya-childhood.png',

  // All 4 Genuine Family Photographs (Kept exclusively in Family World)
  familyParentsFestive: '/images/family-parents-festive.jpg',
  familyHomeWarmth: '/images/family-home-warmth.jpg',
  familyCelebrationBalloons: '/images/family-celebration-balloons.jpg',
  familyTraditionalSisterhood: '/images/family-traditional-sisterhood.png',

  // Real Friendship Memories Photographs (Uploaded by User)
  memoryPurpleTealDoors: '/images/memory-purple-teal-doors.jpg',
  memoryCampusLawnTrio: '/images/memory-campus-lawn-trio.jpg',
  memoryCollegeScrubsFlowerwall: '/images/memory-college-scrubs-flowerwall.jpg',
  memorySunnyBestieSelfie: '/images/memory-sunny-bestie-selfie.jpg',
  memoryFingerHeartClassroom: '/images/memory-finger-heart-classroom.png',
  memoryBusUniformSelfie: '/images/memory-bus-uniform-selfie.png',

  // Existing assets for remaining modules
  familyMain: '/images/family-parents-festive.jpg',
  familyMemory1: '/images/family-home-warmth.jpg',
  familyMemory2: '/images/family-celebration-balloons.jpg',
  familyMemory3: '/images/family-traditional-sisterhood.png',
  friendship1: '/images/memory-sunny-bestie-selfie.jpg',
  friendship2: '/images/memory-purple-teal-doors.jpg',
  friendship3: '/images/memory-campus-lawn-trio.jpg',
  birthdayPhoto: '/images/sandya-green-pink.jpg',
  giftSurprise: '/images/sandya-temple-steps.jpg',
};

// Room 1: Your Family World (All 4 Family Photographs)
export const familyWorldData = {
  heroTitle: 'Your Roots & Unconditional Warmth',
  heroSubtitle: 'The people who make home feel like home for you.',
  photos: [
    {
      id: 'fam-1',
      src: imageMap.familyParentsFestive,
      title: 'Your Family, First & Always',
      caption: 'Standing proud with your parents, your strongest foundation and deepest love.',
      tag: 'Heart of Home',
      featured: true,
      rotation: '0deg',
      secretNote: 'Your parents’ blessings and unconditional love walk beside you in every single step you take.',
    },
    {
      id: 'fam-2',
      src: imageMap.familyHomeWarmth,
      title: 'Everyday Warmth & Home',
      caption: 'Quiet comfort, cherished smiles, and unconditional love right at home.',
      tag: 'Pure Love',
      rotation: '-2deg',
      secretNote: 'Home is wherever your family is gathered with shared laughter and warmth.',
    },
    {
      id: 'fam-3',
      src: imageMap.familyCelebrationBalloons,
      title: 'Family Celebrations & Big Smiles',
      caption: 'Balloons, gold streamers, and smiles that make every family milestone a celebration.',
      tag: 'Family Bond',
      rotation: '2deg',
      secretNote: 'Celebrating life together with the ones who have cheered for you since day one.',
    },
    {
      id: 'fam-4',
      src: imageMap.familyTraditionalSisterhood,
      title: 'Traditions, Grace & Golden Bonds',
      caption: 'Striking festive poses in vibrant silk, hands on hips, celebrating cherished family roots.',
      tag: 'Shared Roots',
      rotation: '-1.5deg',
      secretNote: 'A beautiful bond filled with shared traditions, laughter, and lifelong support.',
    },
  ],
  quote: '“Being part of a family means smiling for photos, sharing every chapter, and knowing you are forever supported.”',
};

// Room 2: Your World (Solo Portraits & Clothesline)
// Featuring Sandya's actual uploaded photographs with descriptions tailored to each image
export const soloPortraitsData = {
  title: 'Your World',
  subtitle: 'Effortless, radiant, and unapologetically you.',
  clothesline: [
    {
      id: 'solo-c1',
      src: imageMap.sandyaBlueDress,
      caption: 'Fairy-tale grace under palm trees',
      rotation: '-2deg',
    },
    {
      id: 'solo-c2',
      src: imageMap.sandyaGreenPink,
      caption: 'Your festive smile & zari grace',
      rotation: '2.5deg',
    },
    {
      id: 'solo-c3',
      src: imageMap.sandyaTempleSteps,
      caption: 'Playful moments on temple steps',
      rotation: '-2deg',
    },
    {
      id: 'solo-c4',
      src: imageMap.sandyaHeartArch,
      caption: 'Surrounded by leaves & quiet peace',
      rotation: '2deg',
    },
    {
      id: 'solo-c5',
      src: imageMap.sandyaScarfWrap,
      caption: 'Eyes that speak a thousand laughs',
      rotation: '-3deg',
    },
    {
      id: 'solo-c6',
      src: imageMap.sandyaChildhood,
      caption: 'Where your beautiful journey began',
      rotation: '2deg',
    },
    {
      id: 'solo-c7',
      src: imageMap.sandyaLawnPink,
      caption: 'Carefree sunshine across the lawn',
      rotation: '-1.5deg',
    },
    {
      id: 'solo-c8',
      src: imageMap.sandyaWoodenDoors,
      caption: 'Quiet confidence & graceful poise',
      rotation: '1.5deg',
    },
  ],
  surprise: {
    title: 'A Secret Snapshot Just for You',
    caption: '“From childhood sweetness to your radiant 20s grace — you are extraordinary, Sandya!”',
    image: imageMap.sandyaBlueDress,
  },
};

// Room 04: Our Memories & Friendship Scrapbook
export const friendshipMemoriesData = {
  title: 'Our Memories',
  subtitle: 'Years of laughs, college adventures, and friendships worth holding onto forever.',
  memories: [
    {
      id: 'mem-1',
      date: 'Golden Days',
      title: 'Sunlit Smiles & Soul Connections',
      caption: 'A sweet sunlit selfie, shared smiles, and the kind of friendship that feels like warm sunshine.',
      src: imageMap.memorySunnyBestieSelfie,
      objectPosition: 'center 20%',
      tag: 'Bestie Bond',
      secretMessage: 'True friendship is effortless smiles and knowing someone always has your back, through every little moment.',
    },
    {
      id: 'mem-2',
      date: 'Classroom Shenanigans',
      title: 'Classroom Giggles & Finger Hearts',
      caption: 'Half hearts, puffed cheeks, and the silly classroom moments that turn ordinary lectures into lifelong laughter.',
      src: imageMap.memoryFingerHeartClassroom,
      objectPosition: 'center 25%',
      tag: 'Pure Joy',
      secretMessage: 'You cannot buy memories like this — making silly faces in class and knowing you have a best friend who matches your crazy energy!',
    },
    {
      id: 'mem-3',
      date: 'College Event Days',
      title: 'Campus Elegance & Shared Milestones',
      caption: 'Dressed up in rich royal hues, wearing our event badges, and turning campus halls into our personal runway.',
      src: imageMap.memoryPurpleTealDoors,
      objectPosition: 'center 20%',
      tag: 'Dynamic Duo',
      secretMessage: 'From rushing to events together to posing with big smiles, every memory with you is pure gold.',
    },
    {
      id: 'mem-4',
      date: 'Daily Journeys',
      title: 'Everyday Journeys & Shoulder to Shoulder',
      caption: 'Blue uniforms, sweet smiles, and the cozy daily journeys where we talk about everything under the sun.',
      src: imageMap.memoryBusUniformSelfie,
      objectPosition: 'center 20%',
      tag: 'Side by Side',
      secretMessage: 'The best part of everyday routines is sharing them with someone who understands you without even saying a word.',
    },
    {
      id: 'mem-5',
      date: 'Festive Campus Days',
      title: 'Laughter Across the Campus Lawn',
      caption: 'Under the wide open skies, walking across green lawns, surrounded by the friends who make college feel like home.',
      src: imageMap.memoryCampusLawnTrio,
      objectPosition: 'center 40%',
      tag: 'Lawn Stories',
      secretMessage: 'The best days aren’t planned — they are the spontaneous afternoons sitting on the grass talking about life and laughing endlessly.',
    },
    {
      id: 'mem-6',
      date: 'Classroom & Uniform Hustle',
      title: 'The Trio Behind Every Laugh',
      caption: 'Uniforms, ID cards, hands resting on shoulders, and the unbreakable bond formed through shared classes.',
      src: imageMap.memoryCollegeScrubsFlowerwall,
      objectPosition: 'center 20%',
      tag: 'In It Together',
      secretMessage: 'Through busy schedules, early mornings, and shared tests, having you right beside us made every challenge feel easy and fun.',
    },
  ],
  scratchSurprise: {
    headline: 'Scratch to Reveal Your Best Friend Code',
    hiddenText: '✨ CODE: BESTIE-FOR-LIFE ✨ Always in your corner, cheering the loudest for everything you do!',
  },
};

// Room 03: Your Birthday Room
export const birthdayRoomData = {
  title: 'Your Birthday Room',
  subtitle: 'Light your 20 candles, whisper your wish, and blow them out!',
  celebrationWish:
    'May Chapter 20 surround you with pure joy, fearless courage, exciting opportunities, and memories you treasure forever!',
  secretFortune:
    '🌟 Your 20s Fortune: You are stepping into a season of high achievements, deep happiness, and magnetic growth. Trust yourself!',
};

// Room 05: Your Birthday Calendar & Keepsake Gift Box
export const calendarAndGiftData = {
  title: 'Your Birthday Calendar & Gift',
  subtitle: 'Celebrating November 2, 2026 and a special keepsake surprise gift box just for you.',
  birthdayMonth: 'November 2026',
  birthDay: 2,
  milestoneAge: 20,
  milestoneStats: [
    { value: '20', unit: 'Years', label: 'Milestone Journey' },
    { value: '240', unit: 'Months', label: 'Completed Chapters' },
    { value: '1,043', unit: 'Weeks', label: 'Smiles & Resilience' },
    { value: '7,305', unit: 'Days', label: 'Shining Your Light' },
  ],
  giftLetter: {
    title: 'A Birthday Letter Just for You',
    date: '02 November 2026 · Chapter 20',
    salutation: 'Dearest Sandya,',
    milestoneStats: [
      { value: '20', unit: 'Years', label: 'Milestone Journey' },
      { value: '240', unit: 'Months', label: 'Completed Chapters' },
      { value: '1,043', unit: 'Weeks', label: 'Smiles & Resilience' },
      { value: '7,305', unit: 'Days', label: 'Shining Your Light' },
    ],
    paragraphs: [
      'Happy 20th Birthday! ✨ Today marks exactly 20 completed years of your beautiful presence in this world — that is 240 months, 1,043 weeks, and over 7,305 remarkable days of living, growing, and becoming the radiant, inspiring person you are today.',
      'Across all these 7,305 days, you have lived through so many chapters. You have enjoyed countless unforgettable moments — laughing until your stomach hurt with friends, celebrating spontaneous wins, enjoying sweet classroom giggles, and sharing golden afternoons that made life feel magical. And through these same days, there were also quiet challenges and sad moments that tested your heart. Yet through every storm and every tough day, you stood tall with unbelievable strength, silent courage, and grace. You didn’t just survive those days; you grew kinder, braver, and more resilient through every single one of them.',
      'You possess a rare and wonderful soul, Sandya. Your infectious smile, your genuine warmth, your hilarious humor, and your thoughtful loyalty bring endless light to everyone lucky enough to be in your life. Having you as a friend is a true blessing, and watching you enter your twenties with such elegance is an absolute joy.',
      'As Chapter 20 begins today, leave behind any doubt and step boldly toward the dreams waiting for you. May your twenties surround you with boundless peace, exciting new opportunities, deep happiness, and memories you will treasure forever. Always cheering for you in your corner, today and always.',
    ],
    signature: 'With endless admiration & warmest friendship ♡',
  },
  birthdayPasses: [
    { title: 'Emergency Chai/Coffee & Vent Session', code: 'PASS-01', desc: 'Valid anytime. Full validation and zero judgment.' },
    { title: 'Spontaneous Weekend Road Trip', code: 'PASS-02', desc: 'Pick any date. Snacks, playlist, and destination covered.' },
    { title: 'Dessert Feast On Me', code: 'PASS-03', desc: 'Whatever sweet treat you crave, anytime.' },
    { title: 'Ultimate Hype & Pep Talk', code: 'PASS-04', desc: 'Guaranteed instant confidence boost whenever doubt creeps in.' },
  ],
};

// Backward-compatible alias
export const calendarAndTravelData = calendarAndGiftData;

// Room 6: Your Dream Universe (Default Seed for Bucket List, Dreams, Goals)
export const initialDreamUniverseData = {
  bucketList: [
    { id: 'b-1', title: 'Solo trip to an aesthetic dream destination', category: 'Travel', targetDate: '2027', done: false },
    { id: 'b-2', title: 'Attend an unforgettable concert with best friends', category: 'Adventure', targetDate: '2027', done: true },
    { id: 'b-3', title: 'Learn pottery and handmade ceramic sculpting', category: 'Learning', targetDate: '2027', done: false },
    { id: 'b-4', title: 'Catch the sunrise from a mountain peak', category: 'Experiences', targetDate: '2027', done: false },
    { id: 'b-5', title: 'Build a cozy private library reading corner', category: 'Fun', targetDate: '2026', done: false },
  ],
  dreams: [
    {
      id: 'd-1',
      title: 'Sunrise Hot Air Balloon Flight',
      description: 'Gliding peacefully above the fairy chimneys of Cappadocia at dawn.',
      category: 'Travel Dreams',
      image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=600&q=80',
      achieved: false,
    },
    {
      id: 'd-2',
      title: 'Aesthetic Creative Studio Space',
      description: 'A sanctuary with plants, natural light, and space for all creative pursuits.',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      achieved: false,
    },
    {
      id: 'd-3',
      title: 'Mastering Film Photography',
      description: 'Capturing life on 35mm film and developing timeless memory rolls.',
      category: 'Personal Dreams',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
      achieved: true,
    },
  ],
  goals: [
    {
      id: 'g-1',
      title: 'Lead a Major Professional Project',
      category: 'Career',
      deadline: '2027-06-30',
      progress: 65,
      isCareerOrEducation: true,
      notes: 'Developing confidence and spearheading innovative ideas.',
    },
    {
      id: 'g-2',
      title: 'Complete Specialized Professional Certification',
      category: 'Education',
      deadline: '2027-03-15',
      progress: 40,
      isCareerOrEducation: true,
      notes: 'Mastering new skills to expand horizons.',
    },
    {
      id: 'g-3',
      title: 'Daily Mindful Movement & Wellness',
      category: 'Health',
      deadline: '2026-12-31',
      progress: 80,
      isCareerOrEducation: false,
      notes: 'Prioritizing physical and mental energy.',
    },
    {
      id: 'g-4',
      title: 'Build Financial Autonomy & Investment Fund',
      category: 'Financial Goals',
      deadline: '2027-12-31',
      progress: 55,
      isCareerOrEducation: false,
      notes: 'Creating financial freedom for life adventures.',
    },
  ],
  futureSelfLetter: {
    title: 'A Note from Your Future Self',
    date: 'To Sandya at 20',
    message:
      'Look at you stepping into Chapter 20 with such courage and grace. Every goal you set, every quiet step you take today is building a life that feels authentic, peaceful, and exciting. Trust your pace, celebrate small milestones, and never forget that you are capable of extraordinary things.',
  },
};

// Rooms for the Central World Hub Navigation (Second-Person Language)
export const roomsList = [
  { id: 'family', path: '/family', title: 'Your Family World', desc: 'Your roots, warmth & cherished moments', icon: '🏡', badge: 'Room 01', color: '#f7d8df' },
  { id: 'portraits', path: '/portraits', title: 'Your World', desc: 'Solo portraits & hanging clothesline', icon: '✨', badge: 'Room 02', color: '#fae4dc' },
  { id: 'celebration', path: '/celebration', title: 'Your Birthday Room', desc: 'Interactive cake & your 20 candles', icon: '🎂', badge: 'Room 03', color: '#fbe2e9' },
  { id: 'memories', path: '/memories', title: 'Our Memories', desc: 'Friendship scrapbook & laughs through the years', icon: '📸', badge: 'Room 04', color: '#f5e0ea' },
  { id: 'calendar-gift', path: '/calendar', title: 'Your Birthday Calendar & Gift', desc: 'November 2 calendar & surprise keepsake gift box', icon: '🎁', badge: 'Room 05', color: '#fff1e6' },
  { id: 'dreams', path: '/dreams', title: 'Your Dream Universe', desc: 'Your bucket list, dreams board & career goals', icon: '🧭', badge: 'Room 06', color: '#f0e3f8' },
  { id: 'finale', path: '/finale', title: 'Your Grand Finale', desc: 'Full-screen celebration, secret photo & replay', icon: '👑', badge: 'Room 07', color: '#fce4ec' },
];
