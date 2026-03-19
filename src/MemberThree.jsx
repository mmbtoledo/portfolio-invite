import { Link } from 'react-router-dom';

function MemberThree() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>John Mclean A. Adornado's Profile</h1>
      <p>This page will have a completely unique design.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default MemberThree; // Remember to change the export name for each file!