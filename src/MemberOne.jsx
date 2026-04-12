import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import jeiImg from './assets/1x1.jpg';

function MemberOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark

  // Vintage Blueprint / Cyanotype Theme
  const darkTheme = {
    bg: '#0F172A',          // Deep Blueprint Navy
    panel: '#1E293B',       // Lighter Navy
    accent: '#D4AF37',      // Tarnished Brass
    text: '#F8FAFC',        // Chalk White
    muted: '#94A3B8',       // Faded blueprint ink
    border: '#334155'       // Draft line color
  };

  const lightTheme = {
    bg: '#F0F4F8',          // Faded Sketch Paper
    panel: '#E2E8F0',       // Lighter Paper
    accent: '#0369A1',      // Dark Cyan Ink
    text: '#0F172A',        // Dark Navy text
    muted: '#64748B',       // Slate gray
    border: '#CBD5E1'       // Faded pencil line
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'Biography' },
    { id: 'journey', label: 'Expeditions' },
    { id: 'projects', label: 'Inventions' },
    { id: 'connect', label: 'Telegraph' }
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', minHeight: '100vh', fontFamily: '"Courier New", Courier, monospace', overflow: 'hidden', backgroundImage: `linear-gradient(${theme.border}40 1px, transparent 1px), linear-gradient(90deg, ${theme.border}40 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
    >
      
      {/* Top Left: Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50, background: theme.panel, border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px', borderRadius: '5px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold' }}
      >
        {isSidebarOpen ? 'CLOSE ✖' : 'MENU ☰'}
      </button>

      {/* Top Right: Home & Theme Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: theme.panel, border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          title="Toggle Lighting"
        >
          {isDarkMode ? '☼' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.accent, border: `1px solid ${theme.accent}`, color: isDarkMode ? theme.bg : '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            ↤ Front Page
          </button>
        </Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ width: '280px', backgroundColor: theme.panel, borderRight: `2px dashed ${theme.accent}`, padding: '80px 20px 20px 20px', display: 'flex', flexDirection: 'column', zIndex: 40, position: 'fixed', height: '100vh', overflowY: 'auto', boxShadow: '5px 0 15px rgba(0,0,0,0.1)' }}
          >
            <div style={{ marginBottom: '40px', textAlign: 'center', borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px' }}>
              <p style={{ color: theme.accent, letterSpacing: '2px', fontSize: '0.8rem', margin: 0 }}>PORTFOLIO / VOL. I</p>
              <h2 style={{ margin: '10px 0 0 0', fontFamily: '"Playfair Display", serif' }}>J. ICALABIS</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ background: activeTab === tab.id ? theme.accent : 'transparent', color: activeTab === tab.id ? (isDarkMode ? theme.bg : '#fff') : theme.text, border: `1px solid ${activeTab === tab.id ? theme.accent : theme.border}`, padding: '12px 20px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.3s' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '280px' : '0', transition: 'margin-left 0.4s ease', padding: '100px 40px 40px 40px', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px' }}>
              <p style={{ color: theme.accent, letterSpacing: '3px' }}>→ HARDWARE SPECIALIST</p>
              <h1 style={{ fontSize: '4.5rem', margin: '10px 0 30px 0', fontFamily: '"Playfair Display", serif', lineHeight: '1.1' }}>JEI ERVIN <br/>ICALABIS</h1>
              
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div style={{ flex: '1 1 400px' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: theme.muted }}>Building systems. Writing code. Designing circuits. A dedicated artisan with a profound interest in the mechanical and the electrical. Always eager to unearth the workings of modern machinery.</p>
                  
                  <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                    <div style={{ border: `1px solid ${theme.border}`, padding: '20px', textAlign: 'center', flex: 1, backgroundColor: theme.panel }}>
                      <h3 style={{ color: theme.accent, margin: '0 0 5px 0', fontSize: '2rem' }}>20</h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: theme.muted }}>YEARS OF AGE</p>
                    </div>
                    <div style={{ border: `1px solid ${theme.border}`, padding: '20px', textAlign: 'center', flex: 1, backgroundColor: theme.panel }}>
                      <h3 style={{ color: theme.accent, margin: '0 0 5px 0', fontSize: '2rem' }}>2nd</h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: theme.muted }}>YEAR SCHOLAR</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ flex: '1 1 300px', border: `1px solid ${theme.accent}`, padding: '10px', backgroundColor: theme.panel, transform: 'rotate(2deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  <img src={jeiImg} alt="Jei" style={{ width: '100%', height: 'auto', filter: isDarkMode ? 'sepia(0.5) contrast(1.2)' : 'sepia(0.2) contrast(1.1) brightness(0.9)' }} />
                  <p style={{ textAlign: 'center', margin: '10px 0 0 0', color: theme.accent, fontSize: '0.8rem' }}>Fig 1. Portrait of the Artisan</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
             <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.accent, borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px' }}>BIOGRAPHICAL DATA</h1>
               <div style={{ backgroundColor: theme.panel, border: `1px solid ${theme.border}`, padding: '40px', marginTop: '30px', lineHeight: '2' }}>
                 <p>[Placeholder for Biography... Edit this section later.] I grew up with my grandparents until I reached high school, shaping who I am today. I describe myself as hardworking, somewhat friendly, and a jolly person.</p>
                 <p>[Placeholder Text...] I developed an interest in technology and hands-on activities, especially electronics. I enjoy learning how things work and applying knowledge to projects.</p>
               </div>
             </motion.div>
          )}

          {(activeTab !== 'home' && activeTab !== 'about') && (
            <motion.div key="placeholder" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
              <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.accent, textTransform: 'uppercase' }}>{tabs.find(t => t.id === activeTab)?.label}</h1>
              <div style={{ backgroundColor: theme.panel, padding: '40px', border: `1px dashed ${theme.muted}`, marginTop: '20px' }}>
                <p style={{ color: theme.muted }}>[Content for {activeTab} goes here. You can add your timeline or projects here!]</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MemberOne;