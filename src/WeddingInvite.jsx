import { useState } from 'react';
import { Link } from 'react-router-dom';

function WeddingInvite() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState('idle'); // 'idle', 'submitted'

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a database or email service here.
    // For now, we will show a success message!
    setRsvpStatus('submitted');
  };

  // --- Design Variables ---
  const gold = '#D4AF37';
  const darkText = '#2C3E50';
  const lightBg = '#FAFAFA';

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      // Elegant subtle floral/marble background
      backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: darkText,
      padding: '40px 20px',
      fontFamily: '"Playfair Display", "Georgia", serif'
    }}>
      <div style={{ 
        maxWidth: '700px', 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        padding: '60px 40px', 
        textAlign: 'center',
        borderRadius: '5px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        border: `2px solid ${gold}`,
        position: 'relative'
      }}>
        {/* Back Button */}
        <div style={{ position: 'absolute', top: '25px', left: '25px' }}>
          <Link to="/" style={{ color: '#888', textDecoration: 'none', fontSize: '12px', fontFamily: 'system-ui, sans-serif', textTransform: 'uppercase', letterSpacing: '2px' }}>
            ← Back to Portfolio
          </Link>
        </div>

        {/* Decorative Floral Accent Top */}
        <div style={{ color: gold, fontSize: '24px', marginBottom: '20px' }}>❦</div>

        <p style={{ 
          textTransform: 'uppercase', 
          letterSpacing: '5px', 
          fontSize: '12px', 
          color: '#777', 
          margin: '20px 0 40px 0',
          fontFamily: 'system-ui, sans-serif'
        }}>
          Together with their families
        </p>

        {/* The Names */}
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'normal', 
          margin: '10px 0', 
          color: darkText,
          lineHeight: '1.2'
        }}>
          Dwyane Jorge Ganados 
          <span style={{ display: 'block', fontSize: '2.5rem', fontStyle: 'italic', color: gold, margin: '15px 0' }}>&</span> 
          Ramiel Jacob Sepe
        </h1>

        <p style={{ margin: '40px 0', fontSize: '1.2rem', lineHeight: '2', color: '#555', fontStyle: 'italic' }}>
          Request the honor of your presence <br/>
          at the celebration of their marriage
        </p>

        {/* The Date & Time */}
        <div style={{ 
          margin: '40px 0', 
          borderTop: `1px solid ${gold}`, 
          borderBottom: `1px solid ${gold}`, 
          padding: '30px 0' 
        }}>
          <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0', fontWeight: 'normal', letterSpacing: '1px' }}>
            Sunday, November 1st, 2026
          </h3>
          <h4 style={{ margin: '5px 0', color: gold, fontFamily: 'system-ui, sans-serif', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px' }}>
            At 12:00 AM (Midnight)
          </h4>
        </div>

        {/* The Location */}
        <div style={{ marginBottom: '50px' }}>
          <h4 style={{ margin: '0 0 15px 0', fontSize: '1.6rem', fontWeight: 'normal' }}>Quiapo Church</h4>
          <p style={{ margin: '0', color: '#666', fontFamily: 'system-ui, sans-serif', lineHeight: '1.8', letterSpacing: '1px' }}>
            910 Plaza Miranda, Quiapo<br/>
            Manila, 1001 Metro Manila<br/>
            Philippines
          </p>
        </div>

        {/* Decorative Floral Accent Bottom */}
        <div style={{ color: gold, fontSize: '24px', marginBottom: '30px' }}>❧</div>

        {/* RSVP Button */}
        <button 
          onClick={() => setIsRsvpOpen(true)}
          style={{
            backgroundColor: lightBg, 
            color: darkText, 
            border: `2px solid ${gold}`, 
            padding: '15px 50px',
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            fontSize: '13px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}
          onMouseOver={(e) => { e.target.style.backgroundColor = gold; e.target.style.color = '#fff'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = lightBg; e.target.style.color = darkText; }}
        >
          RSVP Now
        </button>
      </div>

      {/* --- RSVP Modal Overlay --- */}
      {isRsvpOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff', padding: '40px', borderRadius: '5px', maxWidth: '400px', width: '90%', border: `2px solid ${gold}`, position: 'relative'
          }}>
            <button 
              onClick={() => { setIsRsvpOpen(false); setRsvpStatus('idle'); }}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}
            >
              ✕
            </button>

            {rsvpStatus === 'idle' ? (
              <form onSubmit={handleRsvpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ margin: '0 0 10px 0', color: gold, fontWeight: 'normal', fontSize: '2rem' }}>RSVP</h2>
                <p style={{ margin: '0 0 20px 0', color: '#555', fontFamily: 'system-ui, sans-serif' }}>Please respond by October 1st, 2026.</p>
                
                <input required type="text" placeholder="First & Last Name" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '3px', fontFamily: 'system-ui, sans-serif' }} />
                <input required type="email" placeholder="Email Address" style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '3px', fontFamily: 'system-ui, sans-serif' }} />
                
                <select style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '3px', fontFamily: 'system-ui, sans-serif' }}>
                  <option>Joyfully Accepts</option>
                  <option>Regretfully Declines</option>
                </select>

                <button type="submit" style={{
                  backgroundColor: gold, color: '#fff', border: 'none', padding: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px'
                }}>
                  Send RSVP
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ color: gold, fontSize: '40px', marginBottom: '20px' }}>✓</div>
                <h2 style={{ margin: '0 0 10px 0', color: darkText, fontWeight: 'normal' }}>Thank You!</h2>
                <p style={{ color: '#555', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>Your RSVP has been successfully received. We can't wait to celebrate with you!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeddingInvite;