import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Navigation from './Navigation';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    }
    fetch('http://localhost:3000/login', requestOptions)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => {
        setUsername('');
        setPassword('');
        if (data.message) {
          setMessage(data.message);
        } else if (jwtDecode(data.token).user.author === false) {
          setMessage('You do not have admin permission');
        } else {
          localStorage.setItem('token', data.token);
          setNavigate(true)
        }
      });
  }

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <Navigation></Navigation>
    <h2>Login</h2>
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
      <button type='submit'>Login</button>
    </form>
    <p>{message}</p>
    </>
  );
}

export default Login;