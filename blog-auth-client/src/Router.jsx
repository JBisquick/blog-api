import App from './App';
import ErrorPage from './ErrorPage';
import Login from './components/Login';

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
  }
];

export default routes;