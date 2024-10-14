import React from 'react'
import Logo from '../../assets/KFC-Logo.png'
import './Header.css'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
      <>
        <div className='wrapper'>
        <div className="logo">
           <Link to='/'> <img  src={Logo} alt="" /></Link>
        </div>
        <div className="auth-lisks">
            <ul>
                <li><a href=""><i class="bi bi-geo-alt"></i> Store Locator</a></li>
                <li><Link to="/login"> <i class="bi bi-person-circle"></i> Register/Login</Link></li>
            </ul>
        </div>
      
    </div>
    <Menu/>
      </>
      
    
  )
}

export default Header
