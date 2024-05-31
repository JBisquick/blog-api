import App from './App';
import ErrorPage from './ErrorPage';
import Login from './components/Login';
import CreatePost from './components/CreatePost';

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
    path: '/create-post',
    element: <CreatePost />,
    errorElement: <ErrorPage />
  }
];

export default routes;