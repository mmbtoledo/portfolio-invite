import { Link } from 'react-router-dom';

function MemberThree() {
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
          <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>John Mclean A. Adornado</h1>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem', margin: 0 }}>Born March 22, 2005 • Infanta, Quezon</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Main Content */}
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
            <h2 style={{ color: '#4facfe', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>About Me</h2>
            <p>I am a simple person who always tries my best in everything I do. I can say that I am hardworking and willing to learn new things. I am not perfect, but I keep trying to improve myself little by little.</p>
            <p>I like learning about technology, especially computers, because it is interesting and helpful for my future. Sometimes I experience challenges in school and in life, but I do not give up easily. I stay positive and continue working hard because I know it will help me grow.</p>
            <p>I also enjoy learning new skills and trying different activities. My goal is to finish my studies and have a stable job someday. I want to help my family and make them proud. I believe that with hard work and determination, I can achieve my dreams.</p>
            
            <h2 style={{ color: '#4facfe', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginTop: '40px' }}>Aspiration</h2>
            <p>My goal is to finish my studies and have a good and stable job in the future. I want to improve my skills in technology and become successful someday.</p>
          </div>

          {/* Sidebar Info */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#4facfe', marginTop: 0 }}>Skills</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Basic computer skills</li>
              <li>Basic coding (C++, HTML, CSS)</li>
              <li>Willing to learn new things</li>
              <li>Hardworking and responsible</li>
              <li>Basic knowledge in troubleshooting computers</li>
              <li>Time management</li>
              <li>Can handle challenges</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Experiences</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Basic programming and coding activities</li>
              <li>Doing school projects related to technology</li>
              <li>Basic computer troubleshooting</li>
              <li>Making simple programs and activities in coding</li>
              <li>Learning how to build or set up a computer (basic)</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Achievements</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0', marginBottom: '30px' }}>
              <li>Completed school projects on time</li>
              <li>Improved skills in using computers</li>
              <li>Finished tasks and assignments with effort</li>
              <li>Learned basic troubleshooting in computers</li>
              <li>Continued studying and improving skills</li>
            </ul>

            <h3 style={{ color: '#4facfe' }}>Interests</h3>
            <ul style={{ paddingLeft: '20px', color: '#cbd5e0' }}>
              <li>Learning about computers and technology</li>
              <li>Exploring new skills in coding</li>
              <li>Spending time with friends and family</li>
              <li>Trying new things and learning new ideas</li>
              <li>Sports basketball and cycling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberThree;