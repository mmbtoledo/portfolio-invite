import { Link } from 'react-router-dom';
import michaelImg from './assets/2x2.jpg'; // Make sure 2x2.jpg is inside src/assets/

function Home() {
  const members = [
    { 
      id: 1, 
      name: 'Jei Ervin R. Icalabis', 
      path: '/member-one', 
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jei', // Placeholder until you have Jei's photo
      role: 'Technology Specialist & Hardware'
    },
    { 
      id: 2, 
      name: 'Michael Benedict F. Toledo', 
      path: '/member-two', 
      img: michaelImg, 
      role: 'Computer Engineering & Cybersecurity'
    },
    { 
      id: 3, 
      name: 'John Mclean A. Adornado', 
      path: '/member-three', 
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', // Placeholder until you have John's photo
      role: 'Basic Programming & Tech Support'
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px', letterSpacing: '2px' }}>Our Team Portfolio</h1>
      <p style={{ color: '#a0aec0', marginBottom: '60px' }}>Select a profile to view our individual backgrounds and projects.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', margin: '40px 0' }}>
        {members.map((member) => (
          <div key={member.id} style={{ transition: 'transform 0.3s', cursor: 'pointer' }} className="profile-card">
            <Link to={member.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', 
                margin: '0 auto', border: '4px solid #61dafb', boxShadow: '0 10px 25px rgba(97, 218, 251, 0.3)'
              }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#fff' }} 
                />
              </div>
              <h2 style={{ marginTop: '20px', fontSize: '1.5rem' }}>{member.name}</h2>
              <p style={{ color: '#61dafb', margin: '5px 0' }}>{member.role}</p>
            </Link>
          </div>
        ))}
      </div>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '80px 0' }} />

      <div style={{ padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '15px' }}>
        <h2 style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '2.5rem', marginBottom: '20px' }}>
          We are getting married!
        </h2>
        <p style={{ marginBottom: '30px', color: '#cbd5e0' }}>Join us in celebrating our special day.</p>
        <Link to="/wedding">
          <button style={{ 
            padding: '15px 35px', fontSize: '18px', cursor: 'pointer', 
            backgroundColor: '#ffffff', color: '#001f3f', border: 'none', 
            borderRadius: '30px', fontWeight: 'bold', transition: '0.3s'
          }}>
            View Wedding Invitation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;