import React from 'react'
import Product1 from '../assets/product1.png'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './ProductDetails.css'

function ProductDetails() {
  return (
    <>
    <Header/>
    <div className='detail'>
    <div className="row">
        <div className="col-md-5">
            <img className='images' src={Product1} alt="" />
        </div>
        <div className="col-md-7">
            <h1>Product #3</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, necessitatibus!</p>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default ProductDetails
