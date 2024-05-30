import { useState, useEffect } from 'react';
import validateToken from '../hooks/validateToken';

function CommentForm({ post }) {
  const [text, setText] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(validateToken());
  },[])

  const handleSubmit = (e) => {
    const requestOptions = {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        text: text
      }),
    }
    fetch(`http://localhost:3000/posts/${post}/comments`, requestOptions)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then(() => {
        setText('');
      })
      .catch(err => console.log(err));
  }

  if (valid === false) {
    return <div>You must sign in to post comments</div>
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='text'>Comment: </label>
        <textarea id='text' 
          name='text' 
          type='text' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          required />
      </div>
      <button type='submit'>Post Comment</button>
    </form>
    </>
  );
}

export default CommentForm;