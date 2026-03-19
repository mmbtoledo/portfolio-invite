import { Link } from 'react-router-dom';
import mcleanImg from './assets/2.2.jpg';

function MemberThree() {
  const accent = '#4facfe'; // Bright Blue
  
  const cardStyle = {
    background: '#ffffff',
    color: '#333333',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    marginBottom: '30px'
  };

  const h2Style = {
    color: accent,
    fontSize: '2.2rem',
    fontWeight: '700',
    marginTop: '0',
    marginBottom: '20px',
    fontFamily: 'system-ui, sans-serif'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: '1.1rem',
    lineHeight: '2'
  };

  const listItemStyle = {
    borderBottom: '1px solid #eee',
    padding: '10px 0'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', // Soft dark navy
      color: '#ffffff',
      padding: '60px 20px',
      fontFamily: '"Inter", "Helvetica Neue", sans-serif'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 20px', borderRadius: '20px' }}>
            Back to Team
          </Link>
        </div>
        
        {/* Clean Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <img 
            src={mcleanImg} 
            alt="McLean" 
            style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: `6px solid ${accent}`, boxShadow: '0 10px 20px rgba(0,0,0,0.3)', marginBottom: '20px' }}
          />
          <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', fontWeight: '800', letterSpacing: '-1px' }}>John Mclean Adornado</h1>
          <p style={{ color: accent, fontSize: '1.3rem', margin: '0', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '2px' }}>Tech Enthusiast & Learner</p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', margin: '10px 0 0 0' }}>Born: March 22, 2005 • Infanta, Quezon</p>
        </div>

        {/* Content - White Cards */}
        <div style={cardStyle}>
          <h2 style={h2Style}>My Story</h2>
          <div style={{ lineHeight: '1.9', fontSize: '1.15rem', color: '#555' }}>
            <p>I am a simple person who always tries my best in everything I do. I am hardworking and willing to learn new things. I am not perfect, but I keep trying to improve myself little by little.</p>
            <p>I like learning about technology, especially computers, because it is interesting and helpful for my future. Sometimes I experience challenges in school and in life, but I do not give up easily. I stay positive and continue working hard because I know it will help me grow.</p>
            <p>I enjoy learning new skills and trying different activities. My goal is to finish my studies, secure a stable job, help my family, and make them proud. I believe that with hard work and determination, I can achieve my dreams.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          <div style={cardStyle}>
            <h2 style={h2Style}>Skills</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}>Basic computer skills</li>
              <li style={listItemStyle}>Basic coding (C++, HTML, CSS)</li>
              <li style={listItemStyle}>Basic troubleshooting</li>
              <li style={listItemStyle}>Hardworking & Responsible</li>
              <li style={listItemStyle}>Time management</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Interests</h2>
            <ul style={listStyle}>
              <li style={listItemStyle}>Exploring new coding skills</li>
              <li style={listItemStyle}>Family & Friends time</li>
              <li style={listItemStyle}>Learning new ideas</li>
              <li style={listItemStyle}>Basketball</li>
              <li style={listItemStyle}>Cycling</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MemberThree;