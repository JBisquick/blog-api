import { jwtDecode } from 'jwt-decode';

const validateToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return false;
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  const isExpired = decodedToken.exp < currentTime;
  if (isExpired || decodedToken.user.author === false){
    return false
  } else return true
};

export default validateToken;