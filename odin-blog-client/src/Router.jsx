import App from './App';
import Login from './components/Login'
import Signup from './components/Signup'
import Post from './components/Post'
import ErrorPage from './ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/log-in',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sign-up',
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: '/post/:id',
    element: <Post />,
    errorElement: <ErrorPage />
  }
];

export default routes;