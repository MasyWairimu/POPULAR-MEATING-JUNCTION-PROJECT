import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <section className="footerContainer">
        <div className="contacts">
          <h2>Reach Us On:</h2>

          <div className="contactInfo">
            <FaPhone className='icon' />
            <span>0718327574</span>
          </div>

          <div className="contactInfo">
            <FaFacebookF className='icon' />
            <span>pmj_butchery</span>
          </div>

          <div className="contactInfo">
            <AiOutlineInstagram className='icon'/>
            <span>@pmj_butchery</span>
          </div>
        </div>
    </section>
  )
}

export default Footer
