import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/LayOut/Main';
import Home from './Component/Home/Home';
import Orders from './Component/Orders/Orders'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('data.json')
      },
      {
        path:'/orders',
        element:<Orders></Orders>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
