import Navigation from './components/Navigation';
import PostCard from './components/PostCard';
import { usePostList } from './hooks/api';

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
      {postList.allPosts.map((post) => (
        <PostCard post={post} key={post._id} ></PostCard>
      ))}
    </>
  )
}

export default App