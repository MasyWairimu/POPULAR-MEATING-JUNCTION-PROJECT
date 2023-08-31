import React, {useState} from 'react';
import './Navbar.css';
import icon from '../../assets/pmj-icon.png'
import {TbGridDots} from 'react-icons/tb';
import {AiFillCloseCircle} from 'react-icons/ai';

const Navbar = () => {
  
  const [active, setActive] = useState('navMenu');

  const showActive = () => {
    setActive('navMenu activeNavbar');
  }

  const removeNavbar = () => {
    setActive('navMenu');
  }
 
  return (
    <section className="navBar">
      <div className="navContainer">
        <div className="title">
          <h2>Popular Meating Junction</h2>
          <img src={icon} alt='iconLogo' className="navLogo" />
        </div>

        <div className="iconLogo">
          <TbGridDots onClick={showActive} className='icon' />
        </div>

        <div className={active}>
          <ul className="navList">
            <li className="navLink">
              <a href="#">Products</a>
            </li>
            <li className="navLink">
              <a href="#">Recipes</a>
            </li>
            <li className="navLink">
              <a href="#">Cart</a>
            </li>
            <li className="navLink">
              <a href="#">NewsLetter</a>
            </li>
            <li className="navLink">
              <a href="#">Contacts</a>
            </li>

            <AiFillCloseCircle onClick={removeNavbar}  className='icon'/>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
