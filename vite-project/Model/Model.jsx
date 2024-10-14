import React from 'react'
import './Model.css'

function Model({setShow , show}) {
  return (
    <div>

      <div onClick={()=>setShow(false)} className="wrapper-overlay">

</div>
<div  className="wrapper-content">
<div className="box">
  <div className="title-bucket">
    <h3>Your Bucket</h3>
  </div>
  <div>
  <button onClick={()=>setShow(false)} class="btn btn-danger py-8 px-16" >0</button>
  </div>
  <div className="price">
    <h3>PKR:0</h3>
  </div>
</div>

<div class="form-floating mt-3">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Select City</option>
    <option value="1">Peshawar</option>
    <option value="2">Karachi</option>
    <option value="3">lahore</option>
    <option value="3">Islamabad</option>
    <option value="3">Quetta</option>
    <option value="3">Multan</option>
    <option value="3">Sialkot</option>
    <option value="3">Gujranwala</option>
    <option value="3">Faisalabad</option>
  </select>
  <label for="floatingSelect">City</label>
</div>

<div class="form-floating mt-3">
  <textarea class="form-control form-border " placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label for="floatingTextarea2">Area</label>
</div>
<button className='btn btn-danger w-100 border-0 mt-3'>Next</button>
    
    <div className='item-details'>
      <div className='left'>
      <p className='fw-bold'>Some Name</p>
      <p className='fw-bold'>1x PKR 180</p>
      <p className='fw-bold'>Select Drink Pepsi</p>
     <div className="d-flex align-items-center ">
     <div className='p-3  m-3 curser'>+</div>
     <div className='p-3  m-3 curser'>-</div>
     </div>
      </div>
      <div className="right">
        <h3>PKR 500</h3>
      </div>

    </div>
    <div className="total">
      <h3>Your Total</h3>
      <h3>PKR:520</h3>
    </div>
    </div>
    </div>
  )
}

export default Model
