import Navigation from './Navigation';

function Login() {
  return (
    <>
    <Navigation></Navigation>
    <h2>Login</h2>
    <form method='POST'>
      <div>
        <label htmlFor='username'>Username: </label>
        <input id='username' name='username' type='username' required />
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input id='password' name='password' type='password' required />
      </div>
      <button type='submit'>Login</button>
    </form>
    </>
  );
}

export default Login;