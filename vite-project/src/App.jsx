import React from 'react'
import Home from './Pages/Home'
import Products from './Product/Products'
import ProductDetails from './Productdetails/ProductDetails'
import Register from './Register/Register'
import Login from './Login/Login'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import Home from './Pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home/>
      ),
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "register",
      element: <Register/>,
    },
    {
      path: "products",
      element: <Products/>,
    },
    {
      path: "products/:id",
      element: <ProductDetails/>,
    },
    
  ]);
  return (
    <div className='container'>
    

    <RouterProvider router={router} />
      
{/* <Home/> */}
{/* <Products/> */}
{/* <ProductDetails/> */}
{/* <Register/> */}
{/* <Login/> */}

    </div>
  )
}

export default App
