import { createBrowserRouter } from 'react-router';
import { Board } from '@/pages/Board';

const routes = [
  {
    path: '/',
    element: <div>Home</div>
  },
  {
    path: '/board',
    element: <Board />
  }
];

export const router = createBrowserRouter(routes);
