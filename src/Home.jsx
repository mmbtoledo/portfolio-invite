import { Link } from 'react-router-dom';

function Home() {
  // Placeholder data - replace with your actual names and image links later!
  const members = [
    { id: 1, name: 'Member 1', path: '/member-one', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Member 2', path: '/member-two', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Member 3', path: '/member-three', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Our Portfolio</h1>
      
      {/* Container for the 3 profiles */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '40px 0' }}>
        {members.map((member) => (
          <div key={member.id}>
            <Link to={member.path}>
              <img 
                src={member.img} 
                alt={member.name} 
                style={{ borderRadius: '50%', border: '3px solid white', cursor: 'pointer' }} 
              />
            </Link>
            <h2>{member.name}</h2>
          </div>
        ))}
      </div>

      <hr style={{ borderColor: '#333', margin: '40px 0' }} />

      {/* Wedding Invitation Section */}
      <div>
        <h2>We are getting married!</h2>
        <Link to="/wedding">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            View Wedding Invitation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;