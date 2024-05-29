import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import validateToken from '../hooks/validateToken';

function Navigation() {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(validateToken());
    console.log(valid);
  },[])

  const handleLogout = () => {
    localStorage.removeItem("token");
    setValid(false);
  };


  return (
    <>
    {valid === true ? (
      <div>
        <Link to='/'>Home </Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    ) : (
      <div>
        <Link to='/'>Home </Link>
        <Link to='/log-in'>Login </Link>
        <Link to='/sign-up'>Signup </Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    )}
    </>
  );
}

export default Navigation;