import React from 'react'
import logo from '../../assets/footer-logo.png'
import './Footer.css'
import Android from '../../assets/app-store.png'
import Apple from '../../assets/google-play.png'

function Footer() {
  return (
    <div className='wrapper-footer '>
        
            <img className='mb-5' src={logo} alt="" />

           <div className="footer-content">
           <div className="row">
                <div className="col-md-2">
                    <ul>
                        <li><a href="">lorem</a></li>
                        <li><a href="">lorem</a></li>
                        <li><a href="">lorem</a></li>
                        <li><a href="">lorem</a></li>
                        <li><a href="">lorem</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">lorem</a></li>
                      
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">lorem</a></li>
                        
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li><a href="">lorem</a></li>
                        <li><a href="">lorem</a></li>
                        
                    </ul>
                </div>
                <div className="col-md-2">
                   <div className='download-app'>
                   <img src={Apple} alt="" />
                   <img src={Android} alt="" />
                   </div>
                </div>
            </div>
           </div>
           <div className='footer-bottom'>
            <p>© 2024 KFC Pakistan. All rights reserved.</p>
           </div>
      
      
    </div>
  )
}

export default Footer
