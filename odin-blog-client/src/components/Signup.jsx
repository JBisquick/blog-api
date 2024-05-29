import Navigation from './Navigation';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [message, setMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        conf_password: confPassword
      }),
    }
    fetch('http://localhost:3000/signup', requestOptions)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => {
        setUsername('');
        setPassword('');
        if (data.errors) {
          setMessage(data.errors);
        } else {
          setNavigate(true)
        }
      });
  }

  if (navigate) {
    return <Navigate to="/log-in" />;
  }

  return (
    <>
    <Navigation></Navigation>
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username: </label>
        <input id='username' 
          name='username' 
          type='username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required />
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input id='password'
          name='password' 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required />
      </div>
      <div>
        <label htmlFor='conf_password'>Confirm Password: </label>
        <input id='conf_password' 
          name='conf_password' 
          type='password' 
          value={confPassword} 
          onChange={(e) => setConfPassword(e.target.value)} 
          required />
      </div>
      <button type='submit'>Signup</button>
    </form>
    {message.map((error) => 
        <p key={error.msg}>{error.msg}</p>)}
    </>
  );
}

export default Login;