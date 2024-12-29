import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="Footer-content">
            <div className="Footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis adipisci voluptates voluptatibus vero cumque officiis ad illo est iste commodi neque, placeat aperiam dolorum quos  accusantium.</p>
                <div className="social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="Footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="Footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>84747-4334-4347</li>
                    <li>rondom@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='copy-right'>copyright 2024 @random random</p>
    </div>
  )
}

export default Footer
