import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../App';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFound />,
  },
]);
