import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Users from './Users.jsx';
import UserDetails from './UserDetails.jsx';
import Posts from './Posts.jsx';
import PostDetails from './PostDetails.jsx';
import ErrorPage from './ErrorPage.jsx';
import Comments from './Comments.jsx';
import CommentsDetails from './CommentsDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
         {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/users/:userId',
       //loader:({params})=>(console.log(params.userId))
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
         {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/posts/:postId',
      // loader:({params})=>(console.log(params.postId)),
       loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
       element:<PostDetails></PostDetails>
      },
      {
        path:'/comments',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:'/comments/:commentId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element:<CommentsDetails></CommentsDetails>
      }
    ]
  }/*,
  {
  path: 'header',
    element: <Header></Header>,
  }
    */

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
