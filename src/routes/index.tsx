import Sidebar from '@components/Sidebar';
import Home from '@pages/home';
import Posts from '@pages/posts';
import Create from '@pages/posts/create';
import ViewPost from '@pages/posts/view';
import Register from '@pages/register';
import { Outlet, createBrowserRouter } from 'react-router-dom';

export const routes = [
  {
    path: '',
    name: 'sidebar',
    element: <Sidebar></Sidebar>,
    children: [
      {
        path: '/',
        name: 'main',
        element: <Home></Home>,
        icon: 'fa-regular fa-house-heart',
      },
      {
        path: '/posts',
        name: 'posts',
        icon: 'fa-regular fa-blog',
        element: <Outlet></Outlet>,
        children: [
          {
            path: '/posts',
            name: 'main',
            element: <Posts></Posts>,
          },
          {
            path: '/posts/create',
            name: 'create',
            element: <Create></Create>,
          },
          {
            path: '/posts/view/:id',
            name: 'view',
            element: <ViewPost></ViewPost>,
          },
        ],
      },
    ],
  },
  {
    path: '/register',
    name: 'register',
    element: <Register></Register>,
    children: [],
  },
];
export const router = createBrowserRouter(routes);
