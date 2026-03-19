import { Link } from 'react-router-dom';
import michaelImg from './assets/2x2.jpg';

function MemberTwo() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000033 0%, #000000 100%)',
      color: '#ffffff',
      padding: '50px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#4facfe', textDecoration: 'none', display: 'inline-block', marginBottom: '30px', fontSize: '1.1rem' }}>
          ← Back to Portfolio
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <img 
            src={michaelImg} 
            alt="Michael Toledo" 
            style={{ width: '180px', height: '180px', borderRadius: '15px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          />
          <div>
            <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>Michael Benedict F. Toledo</h1>
            <p style={{ color: '#a0aec0', fontSize: '1.2rem', margin: '0 0 10px 0' }}>Computer Engineering Student</p>
            <p style={{ color: '#718096', margin: 0 }}>Based in Noveleta, Cavite • Studying at TIP Manila</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Main Content */}
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
            <h2 style={{ color: '#4facfe', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>About Me</h2>
            <p>I'm a Computer Engineering student who is passionate about technology, cybersecurity, and understanding how systems work. I enjoy exploring both hardware and software, especially when it comes to protecting systems from threats and vulnerabilities. Whether I'm working on a project or learning something new, I like to challenge myself and improve my skills.</p>
            <p>I would describe myself as determined, curious, and adaptable. I take my responsibilities seriously, but I also recognize that I still have a lot to learn. I believe that mistakes are part of growth, and I use them as motivation to become better both academically and personally.</p>
            
            <h2 style={{ color: '#4facfe', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginTop: '40px' }}>Aspiration</h2>
            <p>I aspire to specialize in cybersecurity within the field of Computer Engineering. My goal is to become a cybersecurity professional capable of protecting systems, networks, and data from cyber threats. I plan to continuously improve my technical skills, gain certifications, and build a strong foundation in ethical hacking and network security. In the future, I want to contribute to creating secure and reliable systems that can make a positive impact in the digital world.</p>
          </div>

          {/* Sidebar Info */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#4facfe', marginTop: 0 }}>Skills</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Programming fundamentals in C++, Python, and Java</li>
              <li>Basic web development using HTML, CSS, and JavaScript</li>
              <li>Database management using MySQL</li>
              <li>Basic networking and troubleshooting</li>
              <li>Introduction to cybersecurity concepts</li>
              <li>Problem-solving and critical thinking</li>
              <li>Ability to adapt to new technologies</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Major Experiences</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Participating in Mobile Legends: Bang Bang tournaments (amateur & local).</li>
              <li>Leadership training program in our church.</li>
              <li>Collaborating on system development projects.</li>
              <li>Managing a small business with friends.</li>
              <li>Exploring basic cybersecurity practices.</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Achievements</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>SHS Grade 11 & 12 With Honors</li>
              <li>Smartplay Cavite MLBB Tournament - 1st Runner-Up</li>
              <li>4x Back-to-Back Local Tournament Champion (MLBB)</li>
              <li>Successfully completed programming and database projects</li>
              <li>Gained foundational knowledge in networking and cybersecurity</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Interests</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0' }}>
              <li>Cybersecurity & system protection</li>
              <li>Programming & system development</li>
              <li>Competitive and strategic gaming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberTwo;