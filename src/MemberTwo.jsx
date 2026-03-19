import { Link } from 'react-router-dom';

function MemberTwo() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Michael Benedict F. Toledo's Profile</h1>
      <p>This page will have a completely unique design.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default MemberTwo; // Remember to change the export name for each file!