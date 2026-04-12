import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import jeiImg from './assets/1x1.jpg';

function MemberOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Modern Cyber/Tech Theme (Glassmorphism & Neon)
  const darkTheme = {
    bg: '#050505',               
    panel: 'rgba(20, 25, 35, 0.6)', 
    accent: '#00f0ff',           
    text: '#e2e8f0',             
    muted: '#64748b',            
    border: 'rgba(0, 240, 255, 0.2)', 
    glow: '0 0 15px rgba(0, 240, 255, 0.4)'
  };

  const lightTheme = {
    bg: '#f8fafc',               
    panel: 'rgba(255, 255, 255, 0.6)', 
    accent: '#0ea5e9',           
    text: '#0f172a',             
    muted: '#64748b',            
    border: 'rgba(14, 165, 233, 0.2)', 
    glow: '0 0 15px rgba(14, 165, 233, 0.3)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'OVERVIEW' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'journey', label: 'MY JOURNEY' },
    { id: 'projects', label: 'PROJECTS & ACHIEVEMENTS' },
    { id: 'connect', label: 'CONTACT' }
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.5 }}
      style={{ 
        display: 'flex', 
        minHeight: '100vh', 
        fontFamily: '"Inter", "Segoe UI", sans-serif', 
        overflow: 'hidden', 
        backgroundImage: `radial-gradient(${theme.border} 1px, transparent 1px)`, 
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0'
      }}
    >
      
      {/* Top Left: Sidebar Toggle */}
      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: theme.glow }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50, background: theme.panel, backdropFilter: 'blur(10px)', border: `1px solid ${theme.border}`, color: theme.accent, padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontWeight: 'bold', letterSpacing: '1px' }}
      >
        {isSidebarOpen ? '[X] CLOSE MENU' : '[_] OPEN MENU'}
      </motion.button>

      {/* Top Right: Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <motion.button 
          whileHover={{ scale: 1.1, boxShadow: theme.glow }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: theme.panel, backdropFilter: 'blur(10px)', border: `1px solid ${theme.border}`, color: theme.accent, padding: '10px', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {isDarkMode ? '⚡' : '🔋'}
        </motion.button>
        <Link to="/">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: theme.glow }}
            style={{ background: theme.accent, border: 'none', color: isDarkMode ? '#050505' : '#fff', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}
          >
            &lt; RETURN HOME
          </motion.button>
        </Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -320, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: -320, opacity: 0 }} 
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{ width: '280px', backgroundColor: theme.panel, backdropFilter: 'blur(15px)', borderRight: `1px solid ${theme.border}`, padding: '90px 20px 20px 20px', display: 'flex', flexDirection: 'column', zIndex: 40, position: 'fixed', height: '100vh', overflowY: 'auto', boxShadow: '10px 0 30px rgba(0,0,0,0.2)' }}
          >
            <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: `1px solid ${theme.border}` }}>
              <div style={{ display: 'inline-block', padding: '4px 8px', backgroundColor: theme.border, color: theme.accent, fontSize: '0.7rem', fontFamily: '"Courier New", monospace', borderRadius: '4px', marginBottom: '10px' }}>
                STATUS: ONLINE
              </div>
              <h2 style={{ margin: '0', fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-1px' }}>J. ICALABIS</h2>
              <p style={{ color: theme.muted, fontSize: '0.85rem', marginTop: '5px', fontFamily: '"Courier New", monospace' }}>Location: Manila, PH</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tabs.map(tab => (
                <motion.button
                  whileHover={{ x: 5, backgroundColor: theme.border }}
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    background: activeTab === tab.id ? theme.border : 'transparent', 
                    color: activeTab === tab.id ? theme.accent : theme.text, 
                    border: `1px solid ${activeTab === tab.id ? theme.accent : 'transparent'}`, 
                    borderLeft: activeTab === tab.id ? `4px solid ${theme.accent}` : `4px solid transparent`,
                    padding: '12px 15px', 
                    textAlign: 'left', 
                    borderRadius: '6px',
                    cursor: 'pointer', 
                    fontFamily: '"Courier New", monospace', 
                    fontSize: '0.9rem',
                    letterSpacing: '1px', 
                    transition: 'all 0.2s' 
                  }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '280px' : '0', transition: 'margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)', padding: '100px 5% 40px 5%', position: 'relative', overflowY: 'auto' }}>
        <AnimatePresence mode="wait">
          
          {/* TAB: OVERVIEW */}
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <motion.div 
                initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: '100%' }} transition={{ delay: 0.2, duration: 0.8 }}
                style={{ height: '2px', background: `linear-gradient(90deg, ${theme.accent}, transparent)`, marginBottom: '20px' }}
              />
              <p style={{ color: theme.accent, fontFamily: '"Courier New", monospace', letterSpacing: '2px', marginBottom: '10px' }}>&gt; Discipline: Computer Engineering</p>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', margin: '0 0 30px 0', fontWeight: '900', letterSpacing: '-2px', lineHeight: '1' }}>
                JEI ERVIN <br/><span style={{ color: 'transparent', WebkitTextStroke: `2px ${theme.text}` }}>ICALABIS</span>
              </h1>
              
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ flex: '1 1 450px' }}>
                  <div style={{ background: theme.panel, backdropFilter: 'blur(12px)', border: `1px solid ${theme.border}`, padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: theme.muted, margin: 0 }}>
                      <strong style={{ color: theme.accent }}>{`{ Building systems. Writing code. Designing circuits. }`}</strong><br/><br/>
                      I want to be a technology specialist, helping to develop computer systems and preserve digital information. I want to keep learning, obtain hands-on experience, and establish a profession where I can have a positive influence.
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                    <motion.div whileHover={{ y: -5 }} style={{ border: `1px solid ${theme.border}`, padding: '20px', borderRadius: '12px', flex: 1, backgroundColor: theme.panel, backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: theme.accent }}></div>
                      <h3 style={{ color: theme.accent, margin: '0 0 5px 0', fontSize: '2.5rem', fontWeight: '800' }}>20</h3>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: theme.muted, fontFamily: '"Courier New", monospace' }}>&gt; Age (Years)</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} style={{ border: `1px solid ${theme.border}`, padding: '20px', borderRadius: '12px', flex: 1, backgroundColor: theme.panel, backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: theme.accent }}></div>
                      <h3 style={{ color: theme.accent, margin: '0 0 5px 0', fontSize: '2.5rem', fontWeight: '800' }}>2nd</h3>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: theme.muted, fontFamily: '"Courier New", monospace' }}>&gt; Year Level</p>
                    </motion.div>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ flex: '1 1 300px', position: 'relative' }}
                >
                  <div style={{ position: 'absolute', inset: '-10px', background: `linear-gradient(45deg, ${theme.accent}, transparent)`, borderRadius: '24px', filter: 'blur(20px)', opacity: 0.4 }}></div>
                  <div style={{ position: 'relative', border: `1px solid ${theme.border}`, borderRadius: '16px', overflow: 'hidden', backgroundColor: theme.panel, backdropFilter: 'blur(10px)', padding: '10px' }}>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: theme.accent, boxShadow: theme.glow }}></div>
                    <img src={jeiImg} alt="Jei" style={{ width: '100%', height: 'auto', borderRadius: '8px', filter: isDarkMode ? 'grayscale(0.3) contrast(1.2)' : 'none' }} />
                    <div style={{ padding: '15px 10px 5px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ margin: 0, color: theme.accent, fontSize: '0.75rem', fontFamily: '"Courier New", monospace' }}>Fig. 1 / Profile Image</p>
                      <p style={{ margin: 0, color: theme.muted, fontSize: '0.75rem', fontFamily: '"Courier New", monospace' }}>Loaded</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* TAB: ABOUT ME */}
          {activeTab === 'about' && (
             <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: theme.border, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.accent }}>
                    {'</>'}
                 </div>
                 <h1 style={{ margin: 0, fontWeight: '800', letterSpacing: '-1px' }}>ABOUT ME</h1>
               </div>

               <div style={{ backgroundColor: theme.panel, backdropFilter: 'blur(15px)', border: `1px solid ${theme.border}`, borderRadius: '16px', padding: '40px', marginTop: '30px', lineHeight: '2', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                 <p style={{ fontSize: '1.05rem' }}>
                    <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; Introduction: </span>
                    I was born on June 8, 2005, in Santa Maria, Bulacan. I grew up with my grandparents until I reached high school, and they played an important role in shaping who I am today. I also have an older sister whom I look up to. I describe myself as a hardworking, somewhat friendly, and a jolly person.
                 </p>
                 <p style={{ fontSize: '1.05rem', marginTop: '20px' }}>
                    <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; Core Skills: </span>
                    Communication skills • Basic coding (C++, HTML, CSS, PYTHON) • Computer literate • Patient and understanding • Always up for challenges • Basic logic circuit knowledge
                 </p>
                 <p style={{ fontSize: '1.05rem', marginTop: '20px' }}>
                    <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; Interests: </span>
                    Hardware configurations (PCs, TVs) • Games requiring strategy • Baking • Drawing • Learning about new technologies
                 </p>
               </div>
             </motion.div>
          )}

          {/* TAB: MY JOURNEY */}
          {activeTab === 'journey' && (
             <motion.div key="journey" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ margin: '0 0 30px 0', fontWeight: '800', letterSpacing: '-1px' }}>MY JOURNEY & EXPERIENCES</h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  
                  {/* Experience Cards */}
                  {[
                    "Game development & Programming",
                    "Math and spelling competitions",
                    "Basic logic circuits assembly",
                    "Treasurer role in high school",
                    "Selling foods in school during senior high",
                    "Building a custom PC from scratch",
                    "Joining competitive gaming tournaments"
                  ].map((exp, idx) => (
                    <motion.div whileHover={{ y: -5 }} key={idx} style={{ backgroundColor: theme.panel, backdropFilter: 'blur(10px)', border: `1px solid ${theme.border}`, padding: '20px', borderRadius: '12px' }}>
                      <div style={{ color: theme.accent, marginBottom: '10px' }}>★</div>
                      <p style={{ margin: 0, fontSize: '1.05rem' }}>{exp}</p>
                    </motion.div>
                  ))}
                  
                </div>

                {/* Optional Image Section for Journey */}
                <div style={{ marginTop: '40px', borderTop: `1px dashed ${theme.border}`, paddingTop: '30px' }}>
                  <h3 style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; VISUAL_LOGS:</h3>
                  <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
                    
                    {/* REPLACE 'src' WITH YOUR OWN IMPORTED IMAGES */}
                    <img src="https://via.placeholder.com/300x200/141923/00f0ff?text=Journey+Photo+1" alt="Journey 1" style={{ borderRadius: '8px', border: `1px solid ${theme.border}` }} />
                    <img src="https://via.placeholder.com/300x200/141923/00f0ff?text=Journey+Photo+2" alt="Journey 2" style={{ borderRadius: '8px', border: `1px solid ${theme.border}` }} />
                  
                  </div>
                </div>
             </motion.div>
          )}

          {/* TAB: PROJECTS */}
          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ margin: '0 0 30px 0', fontWeight: '800', letterSpacing: '-1px' }}>PROJECTS & ACHIEVEMENTS</h1>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  
                  {[
                    { title: "Algorithms & Flowcharts", desc: "Created algorithms, flowcharts, and basic programs in Python and C++." },
                    { title: "Networking & Troubleshooting", desc: "Developed fundamental understanding in computer networking and troubleshooting techniques." },
                    { title: "Safety Awareness Presentations", desc: "Shared online safety awareness with peers through organized presentations." },
                    { title: "ML Championships", desc: "Participated and achieved recognition in Mobile Legends Championships." }
                  ].map((proj, idx) => (
                    <div key={idx} style={{ backgroundColor: theme.panel, backdropFilter: 'blur(10px)', border: `1px solid ${theme.border}`, padding: '25px', borderRadius: '12px', display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: theme.accent }}>{proj.title}</h3>
                        <p style={{ margin: 0, color: theme.muted, lineHeight: '1.6' }}>{proj.desc}</p>
                      </div>
                      
                      {/* REPLACE 'src' WITH YOUR ACTUAL PROJECT IMAGE */}
                      <div style={{ flex: '1 1 200px', maxWidth: '250px' }}>
                        <img src={`https://via.placeholder.com/400x250/141923/00f0ff?text=Project+${idx+1}`} alt={proj.title} style={{ width: '100%', borderRadius: '6px', border: `1px solid ${theme.border}` }} />
                      </div>
                    </div>
                  ))}

                </div>
             </motion.div>
          )}

          {/* TAB: CONTACT */}
          {activeTab === 'connect' && (
             <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ margin: '0 0 30px 0', fontWeight: '800', letterSpacing: '-1px' }}>ESTABLISH UPLINK</h1>
                
                <div style={{ backgroundColor: theme.panel, backdropFilter: 'blur(15px)', padding: '40px', borderRadius: '16px', border: `1px solid ${theme.border}` }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>If you are looking to collaborate on a hardware project, write some code, or just discuss technology, feel free to reach out.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; EMAIL:</span>
                      <a href="mailto:jei.icalabis@example.com" style={{ color: theme.text, textDecoration: 'none', borderBottom: `1px dashed ${theme.muted}` }}>[ Insert Your Email Here ]</a>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; LINKEDIN:</span>
                      <a href="#" style={{ color: theme.text, textDecoration: 'none', borderBottom: `1px dashed ${theme.muted}` }}>[ Insert LinkedIn Profile ]</a>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace' }}>&gt; GITHUB:</span>
                      <a href="#" style={{ color: theme.text, textDecoration: 'none', borderBottom: `1px dashed ${theme.muted}` }}>[ Insert Github Profile ]</a>
                    </div>
                  </div>
                </div>
             </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MemberOne;