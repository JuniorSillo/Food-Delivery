import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, nulla praesentium! Rem, accusantium nulla dolore fuga labore architecto illo iure quidem veritatis nesciunt. Explicabo dolore saepe itaque sed dolores delectus?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+2771-799-9930</li>
                <li>contact@sillojunior.com</li>
            </ul>
        </div>   
      </div>
      <hr />
      <p className="footer-copyright">© 2022 Sillo Junior - All Rights Reserved</p>
    </div>
  )
}

export default Footer
