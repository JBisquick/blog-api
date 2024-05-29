import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to='/'>Home </Link>
      <Link to='/log-in'>Login </Link>
      <Link to='/log-in'>Logout </Link>
    </div>
  );
}

export default Navigation;