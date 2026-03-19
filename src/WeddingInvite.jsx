import { Link } from 'react-router-dom';

function WeddingInvite() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', // Light elegant background
      color: '#333',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: '600px', 
        width: '100%', 
        backgroundColor: '#fff', 
        padding: '60px 40px', 
        textAlign: 'center',
        borderRadius: '5px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '1px solid #eaeaea',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <Link to="/" style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>← Back to Portfolio</Link>
        </div>

        <p style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '12px', color: '#888', margin: '40px 0 20px 0' }}>
          Together with their families
        </p>

        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', fontWeight: 'normal', margin: '10px 0', color: '#1a1a1a' }}>
          Partner One 
          <span style={{ display: 'block', fontSize: '2rem', fontStyle: 'italic', color: '#d4af37', margin: '10px 0' }}>&</span> 
          Partner Two
        </h1>

        <p style={{ margin: '30px 0', fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
          Joyfully invite you to share in their happiness<br/>
          as they unite in marriage.
        </p>

        <div style={{ margin: '40px 0', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', padding: '20px 0' }}>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', margin: '0 0 10px 0' }}>Saturday, October 24th, 2026</h3>
          <p style={{ margin: '5px 0', color: '#666' }}>At Four o'clock in the Afternoon</p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>The Grand Venue</h4>
          <p style={{ margin: '0', color: '#666' }}>123 Celebration Avenue<br/>Noveleta, Cavite</p>
        </div>

        <button style={{
          backgroundColor: '#1a1a1a', color: '#fff', border: 'none', padding: '15px 40px',
          letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', cursor: 'pointer'
        }}>
          RSVP Here
        </button>
      </div>
    </div>
  );
}

export default WeddingInvite;