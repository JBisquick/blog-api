import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/log-in'>Log In</Link>
      <Link to='/log-in'>Log Out</Link>
    </div>
  );
}

export default Navigation;