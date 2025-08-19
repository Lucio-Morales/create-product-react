import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../App';
import Home from '../pages/Home';
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
// import ServicesList from '../features/services/pages/ServicesList';
// import ServicesDetail from '../features/services/pages/ServicesDetail';
// import Dashboard from '../features/profile/pages/Dashboard';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);
