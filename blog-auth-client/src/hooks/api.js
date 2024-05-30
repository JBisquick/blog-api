import { useState, useEffect } from 'react';

export const usePostList = () => {
  const [postList, setPostList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/posts', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setPostList(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { postList, error, loading };
};