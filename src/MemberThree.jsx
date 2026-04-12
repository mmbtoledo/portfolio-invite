import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import mcleanImg from './assets/2.2.jpg';

function MemberThree() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to Light for Newspaper feel

  // Chronicle Theme
  const lightTheme = {
    bg: '#F5F2EB',          // Newsprint off-white
    panel: '#EBE6DC',       // Darker paper edge
    accent: '#8B0000',      // Crimson Ink Stamp
    text: '#1C1C1C',        // Charcoal Ink
    muted: '#5A5A5A',       // Faded gray ink
    border: '#1C1C1C'       // Solid black lines
  };

  const darkTheme = {
    bg: '#1C1C1C',          // Dark Charcoal Paper
    panel: '#262626',       // Slightly lighter charcoal
    accent: '#D32F2F',      // Bright Crimson Stamp
    text: '#E5E0D8',        // Off-white ink
    muted: '#A0A0A0',       // Faded silver ink
    border: '#4A4A4A'       // Gray lines
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Front Page' },
    { id: 'about', label: 'Editorial' },
    { id: 'journey', label: 'Timeline' },
    { id: 'projects', label: 'Publications' },
    { id: 'connect', label: 'Classifieds' }
  ];

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', minHeight: '100vh', fontFamily: '"Times New Roman", Times, serif', overflow: 'hidden' }}
    >
      
      {/* Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50, background: theme.bg, border: `2px solid ${theme.text}`, color: theme.text, padding: '8px 12px', cursor: 'pointer', fontFamily: '"Courier New", Courier, monospace', fontWeight: 'bold', textTransform: 'uppercase' }}
      >
        {isSidebarOpen ? '[X] FOLD' : '[+] EXPAND'}
      </button>

      {/* Top Right Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: 'transparent', border: `2px solid ${theme.text}`, color: theme.text, padding: '10px', borderRadius: '0', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          title="Toggle Print"
        >
          {isDarkMode ? '☀' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.text, border: `2px solid ${theme.text}`, color: theme.bg, padding: '10px 20px', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            [ RETURN TO FRONT PAGE ]
          </button>
        </Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ width: '280px', backgroundColor: theme.panel, borderRight: `3px solid ${theme.border}`, padding: '90px 30px 30px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, position: 'fixed', height: '100vh', overflowY: 'auto' }}
          >
            <div style={{ marginBottom: '40px', textAlign: 'center', borderBottom: `2px solid ${theme.border}`, paddingBottom: '20px' }}>
              <h2 style={{ margin: '0', fontFamily: '"Playfair Display", serif', fontSize: '2rem', textTransform: 'uppercase', lineHeight: '1' }}>THE <br/>CHRONICLE</h2>
              <p style={{ fontFamily: '"Courier New", monospace', fontSize: '0.8rem', marginTop: '10px', color: theme.accent, fontWeight: 'bold' }}>ISSUE: MCLEAN</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ background: activeTab === tab.id ? theme.text : 'transparent', color: activeTab === tab.id ? theme.bg : theme.text, border: 'none', borderBottom: `1px dotted ${theme.text}`, padding: '15px 10px', textAlign: 'left', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: activeTab === tab.id ? 'bold' : 'normal', transition: 'all 0.2s' }}
                >
                  {activeTab === tab.id ? `> ${tab.label}` : `  ${tab.label}`}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '280px' : '0', transition: 'margin-left 0.4s ease', padding: '100px 60px 60px 60px', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              
              <div style={{ borderBottom: `4px double ${theme.border}`, paddingBottom: '20px', marginBottom: '40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '5rem', margin: '0', fontFamily: '"Playfair Display", serif', textTransform: 'uppercase', lineHeight: '1' }}>John McLean</h1>
                <p style={{ fontSize: '1.5rem', margin: '10px 0 0 0', fontStyle: 'italic' }}>Tech Enthusiast & Dedicated Learner</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
                <div>
                  <img src={mcleanImg} alt="McLean" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%) contrast(1.2)', border: `2px solid ${theme.border}`, padding: '5px', backgroundColor: theme.bg }} />
                  <p style={{ textAlign: 'center', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '10px', color: theme.muted }}>Captured on film, 2026.</p>
                </div>
                
                <div style={{ columnCount: 2, columnGap: '30px', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  <p><strong>[PLACEHOLDER STORY]</strong> I am a simple person who always tries my best in everything I do. I am hardworking and willing to learn new things. I am not perfect, but I keep trying to improve myself little by little.</p>
                  <p>I like learning about technology, especially computers, because it is interesting and helpful for my future. Sometimes I experience challenges in school and in life, but I do not give up easily. I stay positive and continue working hard because I know it will help me grow.</p>
                  <h3 style={{ color: theme.accent, fontFamily: '"Courier New", monospace', marginTop: '20px' }}>// DIRECTIVE:</h3>
                  <p>My goal is to finish my studies, secure a stable job, help my family, and make them proud. I believe that with hard work and determination, I can achieve my dreams.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', borderBottom: `2px solid ${theme.border}`, paddingBottom: '10px' }}>RECENT PUBLICATIONS</h1>
               <div style={{ marginTop: '30px' }}>
                 {[1, 2, 3].map(item => (
                   <div key={item} style={{ borderBottom: `1px dashed ${theme.border}`, paddingBottom: '20px', marginBottom: '20px' }}>
                     <h2 style={{ margin: '0 0 10px 0', fontFamily: '"Playfair Display", serif' }}>[Project Headline Placeholder]</h2>
                     <p style={{ color: theme.accent, fontFamily: '"Courier New", monospace', fontSize: '0.9rem', margin: '0 0 10px 0' }}>FILED UNDER: TECH / DEV</p>
                     <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: theme.text }}>[Detailed project description. You can edit this section later to describe your contributions to the portfolio or other academic tasks.]</p>
                   </div>
                 ))}
               </div>
             </motion.div>
          )}

          {(activeTab !== 'home' && activeTab !== 'projects') && (
            <motion.div key="placeholder" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ textAlign: 'center', marginTop: '100px' }}>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', textTransform: 'uppercase' }}>{tabs.find(t => t.id === activeTab)?.label}</h1>
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: theme.muted, marginTop: '20px' }}>[Placeholder Content. Edit this section later.]</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MemberThree;