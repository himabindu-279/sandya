export const personalization = {
  friendName: 'Your Bestie',
  nickname: 'Sunshine',
  birthday: '2025-05-14',
  senderName: 'Your Name',
  friendshipStart: '2020-08-16',
  favoriteColors: ['Blush pink', 'Lavender', 'Warm gold'],
  favoriteQuote: 'You are the kind of magic that makes ordinary days feel extraordinary.',
  customLetter: 'A little universe is being made just for you, with laughter, comfort, and lots of love.',
  theme: 'dreamy-pink',
  showAge: false,
  musicUrl: '',
};

export const defaultMemories = [
  {
    id: 'memory-1',
    title: 'Placeholder Memory 1',
    date: '2022-06-14',
    caption: 'A placeholder memory for your favorite little adventure together.',
    category: 'Best Days',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'memory-2',
    title: 'Placeholder Memory 2',
    date: '2023-02-09',
    caption: 'A placeholder caption until you add your real story here.',
    category: 'Funniest Moments',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'memory-3',
    title: 'Placeholder Memory 3',
    date: '2024-09-22',
    caption: 'This is a soft placeholder to remind you to add your favorite real moment.',
    category: 'Little Things',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
];

export const defaultOpenWhenMessages = {
  sad: {
    title: 'Open when you are sad',
    message:
      'You are not a burden, and your feelings are valid. Even on the days you feel dim, remember that you are still a source of light in this world and in my life. You are allowed to rest, breathe, and be cared for.',
  },
  missYou: {
    title: 'Open when you miss me',
    message:
      'If you miss me, I hope this reminder reaches you gently: I am still here, still cheering you on, and still grateful for the way your friendship makes my life warmer. Distance changes the map, not the love.',
  },
  laugh: {
    title: 'Open when you need a laugh',
    message:
      'The world can feel heavy sometimes, so here is your reminder: chaos is funny, silly stories are healing, and even a messy day can still turn into a good memory. Find the absurdity and laugh at it with me.',
  },
  notEnough: {
    title: 'Open when you feel you are not enough',
    message:
      'You are not too much, too late, too difficult, or too complicated. You are human and deeply lovable. You do not need to earn your place in the world by being perfect. You are already enough, exactly as you are.',
  },
  motivation: {
    title: 'Open when you need motivation',
    message:
      'Keep going. You have already survived hard days, learned hard lessons, and grown through things you did not think you could. Your future is not built in one dramatic moment; it is built in the quiet, brave steps you take every day.',
  },
  rememberUs: {
    title: 'Open when you want to remember our friendship',
    message:
      'Remember this: the best friendships do not need constant contact to remain real. They live in the comfort of familiar laughter, the way we understand each other, and the way our presence always feels like home in a strange season.',
  },
  cantSleep: {
    title: 'Open when you cannot sleep',
    message:
      'If your thoughts are spinning, let this be a soft landing. Not every thought needs to be solved tonight. You can let the day loosen its grip. Rest, breathe, and trust that tomorrow can still be gentle.',
  },
  badDay: {
    title: 'Open on a really bad day',
    message:
      'Bad days do not define your worth. They are weather, not identity. You are allowed to rest, ask for support, and take this moment one breath at a time. This too shall pass, and I will still be here for the brighter chapters.',
  },
};

export const defaultTimeline = [
  { id: 'event-1', title: 'The day we met', date: '2020-08-16', description: 'Placeholder event - replace with your real first story together.' },
  { id: 'event-2', title: 'Our funniest moment', date: '2021-03-11', description: 'Placeholder event - add the silly conversation or chaotic adventure that still makes you laugh.' },
  { id: 'event-3', title: 'A day I will never forget', date: '2022-11-05', description: 'Placeholder event - write the day that felt bigger than words.' },
  { id: 'event-4', title: 'A memory that always makes me smile', date: '2024-05-01', description: 'Placeholder event - add the little moment that feels like home.' },
];

export const defaultReasons = [
  'You make everyone around you feel safe and seen.',
  'Your laugh has a way of making heavy days lighter.',
  'You are thoughtful in ways that often go unnoticed, but they matter deeply.',
  'Your kindness is not performative; it is real and comforting.',
  'You bring a softness to the people you love that makes life feel gentler.',
  'You know how to turn ordinary moments into beautiful memories.',
  'You are resilient, and that strength is quietly inspiring.',
  'Your friendship feels like a soft place to land.',
];

export const defaultJokes = [
  { id: 'joke-1', label: 'Nickname', value: 'Tiny tornado of chaos' },
  { id: 'joke-2', label: 'Quote', value: 'We are both dramatically underprepared and somehow still thriving.' },
  { id: 'joke-3', label: 'Inside Joke', value: 'The day the plan changed and so did our entire personality.' },
  { id: 'joke-4', label: 'Argument', value: 'We can both be right, but we still need to see whose side will win in the end.' },
  { id: 'joke-5', label: 'Conversation', value: 'We have approximately 47 very serious chats about totally unserious topics.' },
];

export const defaultQuizBank = [
  {
    id: 'q1',
    question: 'What is our friendship energy most like?',
    choices: ['A warm blanket on a rainy day', 'A chaotic adventure with a happy ending', 'A glittering little secret club'],
    answer: 'A warm blanket on a rainy day',
  },
  {
    id: 'q2',
    question: 'Which thing best describes how you make my days feel?',
    choices: ['Clearer and calmer', 'A little brighter and more fun', 'So full of stories I never want to end'],
    answer: 'A little brighter and more fun',
  },
  {
    id: 'q3',
    question: 'What is our friendship goal?',
    choices: ['More laughter, more comfort, more memories', 'More chaos, more snacks, more late-night chats', 'More wins, more plans, more adventures'],
    answer: 'More laughter, more comfort, more memories',
  },
];

export const defaultGiftBoxes = [
  {
    id: 'gift-1',
    title: 'Secret Message',
    description: 'A little note for the part of you that needs to hear it today.',
    content: 'You are loved in ways both obvious and quiet. That is a beautiful kind of magic.',
  },
  {
    id: 'gift-2',
    title: 'Playlist Link',
    description: 'A soundtrack for your happiest hours and tenderest feelings.',
    content: 'Add your favorite Spotify or YouTube link in the settings panel.',
    type: 'music',
  },
  {
    id: 'gift-3',
    title: 'Favorite Quote',
    description: 'For the part of your heart that needs a gentle reminder.',
    content: '“You are the kind of beautiful that changes the mood of a room without trying.”',
  },
  {
    id: 'gift-4',
    title: 'Photo Memory',
    description: 'A tiny keepsake from the world we have built together.',
    content: 'Add a treasured photo to your memory museum and revisit it whenever you need a smile.',
  },
  {
    id: 'gift-5',
    title: 'Future Adventure',
    description: 'A wish list for the next chapter of us.',
    content: 'A coffee date, a little road trip, a movie night, and a million tiny adventures still waiting for us.',
  },
];

export const defaultBucketList = [
  { id: 'bucket-1', text: 'A photo together', done: false },
  { id: 'bucket-2', text: 'A food date', done: false },
  { id: 'bucket-3', text: 'A spontaneous trip', done: false },
  { id: 'bucket-4', text: 'Movie night and snacks', done: false },
  { id: 'bucket-5', text: 'Learn something new together', done: false },
];

export const defaultNotes = [
  'You are the kind of person who makes a room feel warmer just by being in it.',
  'Your tenderness is a gift, not a flaw.',
  'You turn ordinary moments into something worth remembering.',
  'The world is better because you are in it, and so am I.',
  'You are deeply loved, even on the days you forget to notice it.',
  'Your friendship is a small miracle I never take for granted.',
  'You are a reminder that care can look like laughter, comfort, and showing up.',
  'You deserve a life that feels as gentle and beautiful as you are.',
];
