import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

function Comment({ comment }) {
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);

  const deleteComment = (e) => {
    const requestOptions = {
      method: 'delete',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
      fetch(`http://localhost:3000/comments/${comment._id}`, requestOptions)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return <Navigate to="/" />;
      })
      .catch(err => console.log(err));
  }


  return (
    <div>
      <p>{comment.text}</p>
      <h6>{comment.user.username}</h6>
      <h6>{comment.post_date}</h6>
      {decodedToken.user.username === comment.user.username && (
        <button onClick={deleteComment}>Delete</button>
      )}
    </div>
  );
}

export default Comment;