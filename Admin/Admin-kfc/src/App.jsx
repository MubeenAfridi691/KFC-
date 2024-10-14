import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Login from './Login/Login'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Components/Home'
import Products from './Components/Products'
import Orders from './Components/Orders'


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <Home/>
        
      ),
    },
    {
      path: "/",
      element: (
        <Login/>

      )
    },
    {
      path: "/product",
      element: (
        <Products/>

      )
    },
    {
      path: "/order",
      element: (
        <Orders/>
      )}
    
  ]);
  
  

  return (
   <>
  

  <RouterProvider router={router} />



</>
  )
}

export default App
