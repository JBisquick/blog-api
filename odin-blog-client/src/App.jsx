import Navigation from './components/Navigation';
import useState from 'react';
import usePostList from './hooks/api'

function App() {
  const { postList, error, loading } = usePostList();

  return (
    <>
      <Navigation></Navigation>
    </>
  )
}

export default App