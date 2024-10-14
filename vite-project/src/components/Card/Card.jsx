import React from 'react'
import product1 from '../../assets/product1.png'
import './Card.css'

function Card() {
  return (
    <div class="card">
    <img class="card-img-top" src={product1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Chipes</h5>
      <p class="card-text">Some quick example text to build on the card title.</p>
      <div className='d-flex button-wrapper'>
      <button type="button" class="btn btn-outline-danger">PKR 570</button>
      <button type="button" class="btn btn-danger">Add to Bucket</button>


      </div>
    </div>
  </div>
  )
}

export default Card
