import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import Card from '../components/Card/Card'
import './Home.css'
import Footer from '../components/Footer/Footer'


function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <div className="signature">
        Signature Boxes
      </div>
<div className="row">
  <div className="col-lg-4">
  <Card/>

  </div>
  <div className="col-lg-4">
  <Card/>

  </div>
  <div className="col-lg-4">
  <Card/>

  </div>
</div>
<Footer/>
    </div>
  )
}

export default Home
