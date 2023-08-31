import React, {useState} from 'react'
import './Booking.css'
import {TfiAngleDown} from 'react-icons/tfi'

const Booking = () => {
  
  const [active, setActive] = useState("priceContainer");

  const showActive = () => {
    setActive("priceContainer activeCard");
  }

  const [contact, setContact] = useState("contactContainer");

  const showContact = () => {
    setContact("contactContainer activeContact");
  }


  return (
  <section className="bookingPage">
    <div className="priceCard">
      <div className="head">
        <h1>PMJ Price Card</h1>
        <div className="iconContainer">
          <TfiAngleDown className='icon' onClick={showActive}/>
        </div>
      </div>

      <div className={active}>
        <div className="row">
          <div className="Name">
            <h2 className='name'>PRODUCT</h2>
          </div>
          <h2 className="price">PRICE/KG</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Pork</h2>
          </div>
          <h2 className="price">Ksh. 520</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Chicken</h2>
          </div>
          <h2 className="price">Ksh. 520</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Liver</h2>
          </div>
          <h2 className="price">Ksh. 300</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Gizzards</h2>
          </div>
          <h2 className="price">Ksh. 520</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Chicken Necks</h2>
          </div>
          <h2 className="price">Ksh. 300</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Chicken Hearts</h2>
          </div>
          <h2 className="price">Ksh. 400</h2>
        </div>

        <div className="row">
          <div className="Name">
            <h2 className='name'>Chicken Legs</h2>
          </div>
          <h2 className="price">Ksh. 150</h2>
        </div>

        <div className="row last">
          <div className="Name">
            <h2 className='name'>Chicken Heads</h2>
          </div>
          <h2 className="price">Ksh. 100</h2>
        </div>

      </div>
    </div>

    <div className="delivery">
        <div className="head">
          <h3>PMJ Ordering and Delivery Contact</h3>
          <div className="iconContainer">
            <TfiAngleDown className='icon' onClick={showContact}/>
          </div>

        </div>

        <div className={contact}>
          <p>For delivery of whatever you like, call the number:</p>
          <div className="contact">
            <h4>Stephen Njenga - 0718327574</h4>
        </div>
      </div>
      
    </div>

  </section>
  )
}

export default Booking
