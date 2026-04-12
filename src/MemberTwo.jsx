import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import michaelImg from './assets/2x2.jpg';

function MemberTwo() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // --- The System Architect / Emerald & Gold Theme ---
  const darkTheme = {
    bg: '#0A1C15',          // Deep Emerald / Midnight Green
    panel: '#122A21',       // Dark Forest Green
    accent: '#D4AF37',      // Antique Gold
    text: '#F3EFE0',        // Warm Ivory / Cream
    muted: '#8DA399',       // Faded Sage Green
    border: '#234A3A',      // Rich Green Crease
    shadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
  };

  const lightTheme = {
    bg: '#FDFBF7',          // Warm Ivory Paper
    panel: '#F4F6F0',       // Pale Sage Parchment
    accent: '#1B4332',      // Deep Forest Green
    text: '#2D2A26',        // Dark Espresso Ink
    muted: '#7A8B83',       // Faded Moss Ink
    border: '#DCE0D5',      // Soft paper edge
    shadow: '0 10px 30px rgba(27, 67, 50, 0.08)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Architect\'s Tale' },
    { id: 'journey', label: 'Expeditions' },
    { id: 'projects', label: 'Schematics' },
    { id: 'connect', label: 'Telegrams' }
  ];

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.05, filter: 'blur(4px)', transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.6 }}
      style={{ 
        display: 'flex', minHeight: '100vh', fontFamily: '"Georgia", serif', overflow: 'hidden', 
        backgroundImage: `radial-gradient(circle at top right, ${theme.accent}15 0%, transparent 60%), radial-gradient(circle at bottom left, ${theme.border}20 0%, transparent 50%)` 
      }}
    >
      
      {/* Top Left: Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 50, background: theme.bg, 
          border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px 15px', 
          cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase',
          boxShadow: theme.shadow, transition: 'all 0.3s'
        }}
      >
        {isSidebarOpen ? '✕ CLOSE DIRECTORY' : '☰ OPEN DIRECTORY'}
      </button>

      {/* Top Right Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: theme.panel, border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: theme.shadow }}
          title="Toggle Lighting"
        >
          {isDarkMode ? '☼' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.accent, border: `1px solid ${theme.accent}`, color: isDarkMode ? theme.bg : '#fff', padding: '10px 20px', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', boxShadow: theme.shadow }}>
            ↤ Front Page
          </button>
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ 
              width: '300px', backgroundColor: theme.panel, borderRight: `1px solid ${theme.border}`, 
              padding: '100px 30px 30px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, 
              position: 'fixed', height: '100vh', overflowY: 'auto', boxShadow: '10px 0 30px rgba(0,0,0,0.15)' 
            }}
          >
            <div style={{ marginBottom: '50px', textAlign: 'center', borderBottom: `2px dashed ${theme.border}`, paddingBottom: '30px' }}>
              <div style={{ fontSize: '1.8rem', color: theme.accent, marginBottom: '10px' }}>✧</div>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.8rem', letterSpacing: '3px', color: theme.muted, textTransform: 'uppercase' }}>Volume II</p>
              <h2 style={{ margin: '0', fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: theme.text, lineHeight: '1.4' }}>
                MICHAEL BENEDICT<br/>TOLEDO
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    background: 'transparent', color: activeTab === tab.id ? theme.accent : theme.text, 
                    border: 'none', borderLeft: `3px solid ${activeTab === tab.id ? theme.accent : 'transparent'}`, 
                    padding: '12px 15px', textAlign: 'left', cursor: 'pointer', fontFamily: '"Playfair Display", serif', 
                    fontSize: '1.1rem', fontStyle: activeTab === tab.id ? 'italic' : 'normal', transition: 'all 0.3s',
                    backgroundColor: activeTab === tab.id ? `${theme.accent}10` : 'transparent'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '300px' : '0', transition: 'margin-left 0.4s ease', padding: '120px 60px 60px 60px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
              
              <div style={{ display: 'inline-block', position: 'relative', marginBottom: '50px' }}>
                {/* Antique Compass / Astrolabe Border Design */}
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', right: '-15px', bottom: '-15px', border: `1px dashed ${theme.accent}`, borderRadius: '50%', animation: 'spin 60s linear infinite' }} />
                <div style={{ position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px', border: `2px solid ${theme.accent}`, borderRadius: '50%' }} />
                
                <img src={michaelImg} alt="Michael Benedict Toledo" style={{ width: '240px', height: '240px', borderRadius: '50%', objectFit: 'cover', filter: isDarkMode ? 'sepia(0.3) brightness(0.9) contrast(1.1)' : 'sepia(0.2) contrast(1.1)', position: 'relative', zIndex: 2, padding: '5px', backgroundColor: theme.bg }} />
              </div>

              <h3 style={{ color: theme.muted, textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.9rem', margin: '0 0 15px 0' }}>
                Computer Engineering Student
              </h3>
              <h1 style={{ fontSize: '4.2rem', margin: '0 0 30px 0', fontFamily: '"Playfair Display", serif', color: theme.text, lineHeight: '1.1' }}>
                Michael Benedict <br/><span style={{ fontStyle: 'italic', color: theme.accent }}>Toledo</span>
              </h1>
              
              <p style={{ fontSize: '1.2rem', lineHeight: '2', color: theme.muted, maxWidth: '700px', margin: '0 auto', borderTop: `1px solid ${theme.border}`, paddingTop: '30px' }}>
                A 2nd-year Computer Engineering student at TIP-Manila. I build systems, write code, and design circuits—constantly exploring the dynamic intersection where software meets hardware
              </p>
            </motion.div>
          )}

          {activeTab === 'about' && (
             <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%' }}>
               <div style={{ borderBottom: `2px solid ${theme.accent}`, paddingBottom: '20px', marginBottom: '40px' }}>
                 <p style={{ color: theme.muted, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', margin: '0 0 10px 0' }}>Chapter One</p>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3.5rem', margin: 0 }}>The Architect's Tale</h1>
               </div>

               <div style={{ backgroundColor: theme.panel, padding: '50px', boxShadow: theme.shadow, border: `1px solid ${theme.border}`, lineHeight: '2.2', fontSize: '1.1rem', position: 'relative' }}>
                 {/* Decorative Corner Pins */}
                 <div style={{ position: 'absolute', top: 10, left: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />
                 <div style={{ position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />
                 <div style={{ position: 'absolute', bottom: 10, left: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />
                 <div style={{ position: 'absolute', bottom: 10, right: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />

                 <p><span style={{ fontSize: '3.5rem', float: 'left', lineHeight: '0.8', color: theme.accent, paddingRight: '15px', fontFamily: '"Playfair Display", serif', marginTop: '5px' }}>D</span>etermined, curious, and highly adaptable, Michael takes his responsibilities seriously, recognizing that the world of engineering offers endless opportunities to learn. He views challenges and mistakes not as setbacks, but as essential growth opportunities for both his academic and personal improvement.</p>
                 <p>He aspires to specialize in cybersecurity as his career in Computer Engineering progresses. His ultimate professional goal is to protect complex systems, networks, and sensitive data from modern vulnerabilities.</p>
               </div>
             </motion.div>
          )}

          {/* Placeholders for the remaining tabs */}
          {(activeTab !== 'home' && activeTab !== 'about') && (
            <motion.div key="placeholder" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%', textAlign: 'center', marginTop: '100px' }}>
              <div style={{ fontSize: '3rem', color: theme.accent, marginBottom: '20px' }}>✧</div>
              <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: '0 0 20px 0' }}>
                {tabs.find(t => t.id === activeTab)?.label}
              </h1>
              <div style={{ borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}`, padding: '40px 0' }}>
                <p style={{ color: theme.muted, fontSize: '1.2rem', fontStyle: 'italic', margin: 0 }}>
                  [The blueprints for this chapter are currently being drafted. Michael's detailed records will appear here soon.]
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </motion.div>
  );
}

export default MemberTwo;