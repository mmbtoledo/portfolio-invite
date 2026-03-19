import { Link } from 'react-router-dom';

function MemberOne() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Jei Ervin R. Icalabis's Profile</h1>
      <p>This page will have a completely unique design.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default MemberOne; // Remember to change the export name for each file!