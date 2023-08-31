import React from 'react'
import './Home.css'

import Main from '../MainComponent/Main'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import chicken from '../../assets/chicken.jpg'
import gizzards from '../../assets/gizzards2.jpeg'
import chicken3 from '../../assets/chicken3.webp'
import liver from '../../assets/LIVER2.jpg'
import pork from '../../assets/pork4.jpeg'
import pork2 from '../../assets/pork3.jpeg'
import necks from '../../assets/necks2.jpg'
import hearts from '../../assets/hearts.webp'


const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1
  }

const Home = () => {
  return (
    <>
        <section className="mainPage">
            <div className="mainContainer">
                <Slider {...Settings} className ="imageContainer" >
                    <div className="productImages">
                        <img src={chicken} alt="chicken" className='productPics' />
                    </div>

                    <div className="productImages">
                        <img src={chicken3} alt="chicken Image" className='productPics' />
                    </div>

                    <div className="productImages">
                        <img src={gizzards} alt="chicken Image" className='productPics' />
                    </div>

                    <div className="productImages">
                        <img src={liver} alt="chicken Image" className='productPics' />
                    </div>

                    <div className="productImages">
                        <img src={pork} alt="chicken Image" className='productPics' />
                    </div>

                    <div className="productImages">
                        <img src={pork2} alt="chicken Image" className='productPics' />
                    </div>
                </Slider>

                <div className="imageContainer2">
                    <img src={chicken} alt="chicken" />
                    <img src={chicken3} alt="chicken" />
                    <img src={gizzards} alt="gizzards" />
                </div>

                <div className="tagLine">
                <p>Your favorite Kuku and Pork Butchery</p>
                </div>

                <div className="productDescription">
                    <div className="content">
                        <h2>The Popular Meating Junction Butchery</h2>
                        <p>PMJ butchery is your one stop Kuku and Pork butchery where we sell different chichen products and pork meat at a cray offer.</p>
                        <p>We know how times could be challenging with the sky-rocketing price of food, that is why at PMJ we sell you your nyama at an incredibly cheap price.</p>
                        <p>These are some of the best products we offer:</p>
                    </div>

                <div className="products">

                    <ul className="productFlex">
                    <div className="product">
                        <li className='Name'>BEST SELLING NYAMA</li>
                    </div>
                    <li className="price">PRICE PER KILO</li>
                    </ul>

                    <ul className="productFlex">
                    <div className="product">
                        <li className='prodImage'><img src= {chicken} alt="Liver" className='image'/></li>
                        <li className="Name">Chicken</li>
                    </div>
                    <li className="price">Ksh. 520</li>
                    </ul>

                    <ul className="productFlex">
                    <div className="product">
                        <li className='prodImage'><img src= {liver} alt="Liver" className='image'/></li>
                        <li className="Name">Liver</li>
                    </div>
                    <li className="price">Ksh. 300</li>
                    </ul>

                    <ul className="productFlex">
                    <div className="product">
                        <li className='prodImage'><img src= {gizzards} alt="Liver" className='image'/></li>
                        <li className="Name">Gizzards</li>
                    </div>
                    <li className="price">Ksh. 520</li>
                    </ul>

                    <ul className="productFlex border">
                    <div className="product">
                        <li className='prodImage'><img src= {pork} alt="Liver" className='image'/></li>
                        <li className="Name">Pork</li>
                    </div>
                    <li className="price">Ksh. 520</li>
                    </ul>

                </div>
                </div>
            </div>
        </section>
        <Main />
    </>
  )
}

export default Home
