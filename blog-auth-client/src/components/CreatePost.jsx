import Navigation from './Navigation';
import { useState } from 'react';

function CreatePost() {
  const [ title, setTitle ] = useState(''); 
  const [ content, setContent ] = useState(''); 
  const [ pub, setPub ] = useState(false);

  const onOptionChange = (e) => {
    setPub(e.target.value)
  }

  return (
    <>
    <Navigation></Navigation>
    <form>
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
    </form>
    </>
  );
}

export default CreatePost;