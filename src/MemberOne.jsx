import { Link } from 'react-router-dom';
import jeiImg from './assets/1x1.jpg';

function MemberOne() {
  const accent = '#00ffff'; // Teal/Cyan
  
  const sectionStyle = {
    backgroundColor: 'rgba(0, 20, 40, 0.8)',
    border: `2px solid ${accent}`,
    padding: '30px',
    marginBottom: '30px',
    position: 'relative',
    fontFamily: 'sans-serif'
  };

  const labelStyle = {
    fontFamily: 'monospace',
    color: accent,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    display: 'block',
    marginBottom: '5px'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000510',
      // Blueprint grid background
      backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      color: '#ffffff',
      padding: '50px 20px',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" style={{ color: accent, textDecoration: 'none', fontFamily: 'monospace', fontSize: '1.1rem', display: 'block', marginBottom: '40px' }}>
          &lt; RETURN_TO_BASE /&gt;
        </Link>
        
        {/* Header Section */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', borderBottom: `4px double ${accent}`, paddingBottom: '30px' }}>
          <div style={{
            width: '200px', height: '200px', border: `4px solid ${accent}`, padding: '10px', background: '#000'
          }}>
            <img src={jeiImg} alt="Jei" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span style={labelStyle}>IDENTIFICATION</span>
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>J. ICALABIS</h1>
            <p style={{ color: '#a0aec0', fontSize: '1.2rem', margin: 0, fontFamily: 'monospace' }}>HARDWARE & TECH SPECIALIST</p>
            <p style={{ color: '#666', fontSize: '1rem', margin: '5px 0 0 0', fontFamily: 'monospace' }}>DOB: 06.08.2005 | ORIGIN: BULACAN</p>
          </div>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={sectionStyle}>
            <span style={labelStyle}>// BIOGRAPHY_DATA</span>
            <div style={{ lineHeight: '1.8', color: '#e2e8f0', fontSize: '1.05rem' }}>
              <p>I grew up with my grandparents until I reached high school, shaping who I am today. I have a sister five years older who I look up to.</p>
              <p>I describe myself as hardworking, somewhat friendly, and a jolly person. I enjoy spending time with others but value moments to focus on self-improvement. I believe positivity and determination help overcome challenges.</p>
              <p>I developed an interest in technology and hands-on activities, especially electronics. I enjoy learning how things work and applying knowledge to projects. Facing difficulties, I continue to push myself to achieve my goals.</p>
              <p>I aim to grow personally and academically, building a successful career in the future to make my family proud.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={sectionStyle}>
              <span style={labelStyle}>// CORE_SKILLS</span>
              <ul style={{ paddingLeft: '20px', color: '#cbd5e0', columns: 2, fontFamily: 'monospace' }}>
                <li>Communication</li>
                <li>C++, HTML, CSS</li>
                <li>PYTHON</li>
                <li>Computer Literate</li>
                <li>Basic Logic Circuits</li>
                <li>Troubleshooting</li>
              </ul>
            </div>
            
            <div style={sectionStyle}>
              <span style={labelStyle}>// INTEREST_LOG</span>
              <ul style={{ paddingLeft: '20px', color: '#cbd5e0', fontFamily: 'monospace' }}>
                <li>Hardware: PCs, TVs</li>
                <li>Strategy Games</li>
                <li>Baking & Drawing</li>
                <li>Emerging Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberOne;