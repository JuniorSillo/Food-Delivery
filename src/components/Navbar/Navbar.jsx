import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home")
  return ( 
    <div className='Navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /> </Link>
        <ul className='Navbar-menu'>
            <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
            <a href='#Explore-Menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
            <a href='#AppDownload' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
            <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="" /> </Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      
    </div>
  )
}

export default Navbar
