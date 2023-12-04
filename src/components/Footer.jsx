import React from 'react'
import img from "../../src/assets/images/Kasa.png"
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src={img} alt="logo" width="122" />
        </div>
       <h3 className='footer__text'>© 2020 Kasa. All rights reserved</h3>
    </div>
  )
}

export default Footer