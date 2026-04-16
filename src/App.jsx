import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './CustomCursor';
import Home from './Home';
import MemberOne from './MemberOne';
import MemberTwo from './MemberTwo';
import MemberThree from './MemberThree';
import WeddingInvite from './WeddingInvite';

// Extract routes to use the useLocation hook for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/member-one" element={<MemberOne />} />
        <Route path="/member-two" element={<MemberTwo />} />
        <Route path="/member-three" element={<MemberThree />} />
        <Route path="/wedding" element={<WeddingInvite />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      {/* Custom Cursor is placed here so it overlays every page */}
      <CustomCursor />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;