import { Link } from 'react-router-dom';
import michaelImg from './assets/2x2.jpg';

function MemberTwo() {
  const cyanGlow = '0 0 15px rgba(0, 255, 255, 0.7)';
  const panelBg = 'rgba(10, 10, 10, 0.8)';
  
  const panelStyle = {
    background: panelBg,
    border: '1px solid rgba(0, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  };

  const h2Style = {
    color: '#00ffff',
    textShadow: cyanGlow,
    fontSize: '2rem',
    borderBottom: '1px solid rgba(0,255,255,0.2)',
    paddingBottom: '10px',
    marginTop: '0'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      backgroundImage: 'radial-gradient(circle at center, #001122 0%, #000000 100%)',
      color: '#ffffff',
      padding: '50px 20px',
      fontFamily: '"Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#00ffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', textShadow: cyanGlow }}>
          &lt; ESC // HOME
        </Link>
        
        {/* Profile Header */}
        <div style={{ ...panelStyle, display: 'flex', alignItems: 'center', gap: '40px', margin: '40px 0', flexWrap: 'wrap', border: '2px solid #00ffff', boxShadow: `0 0 20px rgba(0, 255, 255, 0.3)` }}>
          <img 
            src={michaelImg} 
            alt="Michael" 
            style={{ width: '180px', height: '180px', borderRadius: '15px', objectFit: 'cover', border: '3px solid #fff' }}
          />
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '3.2rem', margin: '0 0 10px 0', fontWeight: '800', color: '#fff' }}>Michael Toledo</h1>
            <p style={{ color: '#00ffff', fontSize: '1.4rem', margin: '0 0 10px 0', fontWeight: '600', textShadow: cyanGlow }}>Computer Engineering Student</p>
            <p style={{ color: '#a0aec0', margin: 0 }}>Noveleta, Cavite • TIP Manila</p>
          </div>
        </div>

        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '30px', alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={panelStyle}>
              <h2 style={h2Style}>About_System_User</h2>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
                <p>Passionate about technology, cybersecurity, and understanding system architecture. I enjoy exploring hardware/software interfaces, specifically protecting systems from vulnerabilities.</p>
                <p>Determined, curious, and adaptable. I take responsibilities seriously, recognizing I still have much to learn. I view mistakes as growth opportunities, motivating academic and personal improvement.</p>
              </div>
            </div>
            
            <div style={panelStyle}>
              <h2 style={h2Style}>Aspiration_Goal</h2>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>Aspire to specialize in cybersecurity within Computer Engineering. Goal: Become a professional protecting systems, networks, and data. Planning continuous technical skill improvement, certifications, and a foundation in ethical hacking and network security to create secure digital systems.</p>
            </div>
          </div>

          <div style={{ ...panelStyle, backgroundColor: 'rgba(0, 20, 40, 0.5)' }}>
            <h2 style={h2Style}>Skill_Matrix</h2>
            <ul style={{ color: '#cbd5e0', spaceY: '10px', fontSize: '1.05rem' }}>
              <li>C++, Python, Java</li>
              <li>HTML, CSS, JavaScript</li>
              <li>MySQL Database</li>
              <li>Networking & Troubleshooting</li>
              <li>Cybersecurity Concepts</li>
              <li>Problem-solving</li>
            </ul>
            
            <h2 style={{ ...h2Style, marginTop: '30px' }}>Achievements_Log</h2>
            <ul style={{ color: '#cbd5e0', fontSize: '1rem' }}>
              <li>SHS With Honors (Gr 11-12)</li>
              <li>Smartplay Cavite MLBB - 1st Runner-Up</li>
              <li>4x Back-to-Back Local Champion (MLBB)</li>
              <li>Completed programming/database projects</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MemberTwo;