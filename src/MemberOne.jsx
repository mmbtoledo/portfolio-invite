import { Link } from 'react-router-dom';

function MemberOne() {
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
        
        <div style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>Jei Ervin R. Icalabis</h1>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem', margin: 0 }}>Born June 8, 2005 • Santa Maria, Bulacan</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Main Content */}
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
            <h2 style={{ color: '#4facfe', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>About Me</h2>
            <p>I grew up with my grandparents until I reached high school, and they played an important role in shaping who I am today. I also have a sister who is five years older than me, and she has been one of the people I look up to.</p>
            <p>I describe myself as a hardworking, somewhat friendly, and a jolly person. I enjoy spending time with others, but I also value moments where I can focus on improving myself. I believe that being positive and determined helps me overcome challenges in life.</p>
            <p>During my school years, I developed an interest in technology and hands-on activities, especially those related to electronics. I enjoy learning how things work and applying that knowledge to projects. Although I have faced difficulties along the way, I continue to push myself to do better and achieve my goals.</p>
            <p>As I continue my journey, I aim to grow both personally and academically. I hope to build a successful career in the future and make my family proud. I believe that with dedication, perseverance, and the right mindset, I can achieve my dreams.</p>
            
            <h2 style={{ color: '#4facfe', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginTop: '40px' }}>Aspiration</h2>
            <p>I want to be a technology specialist, helping to develop computer systems and preserve digital information. I want to keep learning, obtain hands-on experience, and establish a profession where I can have a positive influence while exploring new technologies and tackling real-world challenges.</p>
          </div>

          {/* Sidebar Info */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#4facfe', marginTop: 0 }}>Skills</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Communication skills</li>
              <li>Basic coding (C++, HTML, CSS, PYTHON)</li>
              <li>Computer literate</li>
              <li>Patient and understanding in different situations</li>
              <li>Always up for challenges</li>
              <li>Basic logic circuit knowledge</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Experiences</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Game development, Programming</li>
              <li>Math and spelling competitions</li>
              <li>Basic logic circuits</li>
              <li>Treasurer role in high school</li>
              <li>Sell foods in school in senior high school</li>
              <li>Building a pc</li>
              <li>Joining competitive games</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Achievements</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Successfully completed school projects related to programming and technology.</li>
              <li>Creating algorithms, flowcharts, and basic programs in Python and C++ (learning as I go).</li>
              <li>Developing fundamental understanding in computer networking and troubleshooting.</li>
              <li>Sharing online safety awareness with peers through presentations.</li>
              <li>Learning new programming languages</li>
              <li>ML Championships</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Interests</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0' }}>
              <li>Hardware configurations, like PCs, TVs</li>
              <li>Games that require both strategy and understanding</li>
              <li>Baking & Drawing</li>
              <li>New learnings about technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberOne;