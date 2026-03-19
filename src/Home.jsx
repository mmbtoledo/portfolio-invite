import { Link } from 'react-router-dom';
// Ensure these images exist in src/assets
import jeiImg from './assets/1x1.jpg'; 
import michaelImg from './assets/2x2.jpg';
import mcleanImg from './assets/2.2.jpg';

function Home() {
  const members = [
    { 
      id: 1, 
      name: 'Jei Ervin R. Icalabis', 
      path: '/member-one', 
      img: jeiImg,
      role: 'Hardware & Tech Specialist'
    },
    { 
      id: 2, 
      name: 'Michael Benedict F. Toledo', 
      path: '/member-two', 
      img: michaelImg, 
      role: 'Computer Engineering Student'
    },
    { 
      id: 3, 
      name: 'John Mclean A. Adornado', 
      path: '/member-three', 
      img: mcleanImg, 
      role: 'Tech Enthusiast & Learner'
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '10px', letterSpacing: '2px', fontWeight: '800' }}>Our Team Portfolio</h1>
      <p style={{ color: '#a0aec0', marginBottom: '60px', fontSize: '1.2rem' }}>Click a profile to explore individual portfolios.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', margin: '40px 0' }}>
        {members.map((member) => (
          <div key={member.id} className="profile-card" style={{ transition: 'all 0.3s ease' }}>
            <Link to={member.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', 
                margin: '0 auto', border: '5px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s ease'
              }} className="image-container">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <h2 style={{ marginTop: '25px', fontSize: '1.6rem', fontWeight: '700' }}>{member.name}</h2>
              <p style={{ color: '#4facfe', margin: '5px 0', fontSize: '1.1rem', fontWeight: '500' }}>{member.role}</p>
            </Link>
          </div>
        ))}
      </div>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '80px 0' }} />

      <div style={{ padding: '50px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '2.8rem', marginBottom: '15px' }}>
          We are getting married!
        </h2>
        <p style={{ marginBottom: '35px', color: '#cbd5e0', fontSize: '1.1rem' }}>Join us in celebrating our special day.</p>
        <Link to="/wedding">
          <button style={{ 
            padding: '15px 40px', fontSize: '18px', cursor: 'pointer', 
            backgroundColor: '#ffffff', color: '#000033', border: 'none', 
            borderRadius: '30px', fontWeight: 'bold', transition: '0.3s',
            boxShadow: '0 5px 15px rgba(255,255,255,0.2)'
          }}>
            View Wedding Invitation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;