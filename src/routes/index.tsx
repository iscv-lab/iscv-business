import Sidebar from '@components/Sidebar'
import Apply from '@pages/apply'
import Appointment from '@pages/appointment'
import Home from '@pages/home'
import IIG from '@pages/iig'
import Messages from '@pages/messages'
import Posts from '@pages/posts'
import Create from '@pages/posts/create'
import ViewPost from '@pages/posts/view'
import Register from '@pages/register'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import App from 'src/App'

export const routes = [
  {
    name: 'app',
    path: '',
    element: <App></App>,
    children: [
      {
        path: '',
        name: 'sidebar',
        element: <Sidebar></Sidebar>,
        children: [
          {
            path: '/',
            name: 'main',
            element: <Home></Home>,
            icon: 'fa-regular fa-house-heart'
          },
          {
            path: '/messages',
            name: 'messages',
            element: <Messages></Messages>,
            icon: 'fa-regular fa-message',
            children: []
          },
          {
            path: '/posts',
            name: 'posts',
            icon: 'fa-regular fa-blog',
            element: <Outlet></Outlet>,
            children: [
              {
                path: '/posts',
                name: 'posts',
                element: <Posts></Posts>
              },
              {
                path: '/posts/create',
                name: 'create',
                element: <Create></Create>
              },
              {
                path: '/posts/view/:id',
                name: 'view',
                element: <ViewPost></ViewPost>
              }
            ]
          },

          {
            path: '/iig',
            name: 'iig',
            element: <IIG></IIG>,
            icon: 'fa-regular fa-certificate'
          },
          // {
          //   path: '/appointment',
          //   name: 'appointment',
          //   element: <Appointment></Appointment>,
          //   icon: 'fa-regular fa-calendar'
          // },
          {
            path: '/apply',
            name: 'apply',
            element: <Apply></Apply>,
            icon: 'fa-regular fa-business-time'
          }
        ]
      },

      {
        path: '/register',
        name: 'register',
        element: <Register></Register>,
        children: []
      }
    ]
  }
]
export const router = createBrowserRouter(routes)
