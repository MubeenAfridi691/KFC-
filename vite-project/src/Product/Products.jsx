import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'
import './Product.css'

function Products() {
  return (
    <div className='Product-wrapper'>
        <Header/>
        <div className='text'>
            <h1>Everyday Value</h1>
        </div>
       <div className="products">
        <div className="row">
            <div className="col-md-4 mb-5">
                <Card/>

            </div>
            <div className="col-md-4 mb-5">
                <Card/>

            </div>
            <div className="col-md-4 mb-5">
                <Card/>

            </div>
            <div className="col-md-4 mb-5">
                <Card/>

            </div> <div className="col-md-4 mb-5">
                <Card/>

            </div> <div className="col-md-4 mb-5">
                <Card/>

            </div> <div className="col-md-4 mb-5">
                <Card/>

            </div> <div className="col-md-4 mb-5">
                <Card/>

            </div> <div className="col-md-4 mb-5">
                <Card/>

            </div> <div className="col-md-4 mb-5">
                <Card/>

            </div>

        </div>
       </div>
        <Footer/>
      
    </div>
  )
}

export default Products
