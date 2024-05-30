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
      <div>Loaded Post</div>
    </>
  )
}

export default App