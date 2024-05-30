import { usePostList } from './hooks/api';
import PostCard from './components/PostCard';

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
      {postList.allPosts.map((post) => (
        <PostCard post={post} key={post._id} ></PostCard>
      ))}
    </>
  )
}

export default App