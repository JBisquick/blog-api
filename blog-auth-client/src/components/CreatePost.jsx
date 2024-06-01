import Navigation from './Navigation';
import { useState } from 'react';

function CreatePost() {
  const [ title, setTitle ] = useState(''); 
  const [ content, setContent ] = useState(''); 
  const [ pub, setPub ] = useState(false);
  const [ message, setMessage] = useState([]);

  const onOptionChange = (e) => {
    setPub(e.target.value)
  }

  const handleSubmit = () => {
    const requestOptions = {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title: title,
        content: content,
        public: pub
      }),
    }
    fetch(`http://localhost:3000/posts`, requestOptions)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => {
        if (data.errors) {
          setMessage(data.errors);
        } else {
          setTitle('');
          setContent('');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <Navigation></Navigation>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor='title'>Title: </label>
        <input id='title' 
          name='title' 
          type='text' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required />
      </div>
      <div>
        <label htmlFor='content'>Content: </label>
        <textarea id='content'
          name='content' 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required />
      </div>
      <legend>Public: </legend>
      <div>
        <input type='radio'
          id='true' 
          name='public'
          value='true' 
          onChange={onOptionChange} 
          checked={pub === 'true'} />
        <label htmlFor='true'>True </label>
      </div>
      <div>
        <input type='radio' 
          id='false' 
          name='public' 
          value='false' 
          onChange={onOptionChange} 
          checked={pub === 'false'} />
        <label htmlFor='false'>False </label>
      </div>
      <button type='submit'>Create Post</button>
    </form>
    {message.map((message) => (
      <div>{message}</div>    
    ))}
    </>
  );
}

export default CreatePost;