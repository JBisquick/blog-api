import { usePostList } from './hooks/api';
import PostCard from './components/PostCard';
import Navigation from './components/Navigation';
import { Link } from 'react-router-dom';

function App() {
  const { postList, error, loading } = usePostList();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Could not find posts!</div>;
  }

  return (
    <>
      <Navigation></Navigation>
      <Link to='/create-post'>Create Post</Link>
      {postList.allPosts.map((post) => (
        <PostCard post={post} key={post._id} ></PostCard>
      ))}
    </>
  )
}

export default App