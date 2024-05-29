import App from './App';
import Login from './components/Login'
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
  }
];

export default routes;