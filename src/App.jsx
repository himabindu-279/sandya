import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import FloatingEffects from './components/FloatingEffects';
import NavigationHeader from './components/NavigationHeader';
import Page1Entrance from './pages/Page1Entrance';
import PageWorldHub from './pages/PageWorldHub';
import Page2FamilyWorld from './pages/Page2FamilyWorld';
import Page3JustSandya from './pages/Page3JustSandya';
import Page4Memories from './pages/Page4Memories';
import Page5BirthdayRoom from './pages/Page5BirthdayRoom';
import Page5TravelCalendar from './pages/Page5TravelCalendar';
import Page6DreamUniverse from './pages/Page6DreamUniverse';
import Page8GrandFinale from './pages/Page8GrandFinale';

// Helper to scroll to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Ambient floating petals, star sparkles, and soft glows */}
        <FloatingEffects />

        {/* Consistent Top Navigation & Audio Controller */}
        <NavigationHeader />

        {/* Real Multi-Page Route Architecture */}
        <main>
          <Routes>
            {/* Page 1: The Entrance */}
            <Route path="/" element={<Page1Entrance />} />

            {/* Central World Exploration Screen */}
            <Route path="/world" element={<PageWorldHub />} />

            {/* Page 2: The Family World */}
            <Route path="/family" element={<Page2FamilyWorld />} />

            {/* Page 3: Your World (Solo Portraits & Clothesline) */}
            <Route path="/portraits" element={<Page3JustSandya />} />

            {/* Page 4: Your Memories (Friendship Scrapbook) */}
            <Route path="/memories" element={<Page4Memories />} />

            {/* Page 5: The Birthday Room (Interactive Cake & Candles) */}
            <Route path="/celebration" element={<Page5BirthdayRoom />} />

            {/* Room 05: Your Birthday Calendar & Gift Box */}
            <Route path="/calendar" element={<Page5TravelCalendar />} />
            <Route path="/travel-calendar" element={<Page5TravelCalendar />} />

            {/* Room 06: Your Dream Universe (Bucket List, Dreams, Career & Future Self) */}
            <Route path="/dreams" element={<Page6DreamUniverse />} />

            {/* Room 07: Grand Finale (Secret Final Photo & Celebration) */}
            <Route path="/finale" element={<Page8GrandFinale />} />

            {/* Aliases for smooth navigation */}
            <Route path="/gifts" element={<Navigate to="/calendar" replace />} />
            <Route path="/future" element={<Navigate to="/dreams" replace />} />

            {/* Fallback */}
            <Route path="*" element={<PageWorldHub />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
