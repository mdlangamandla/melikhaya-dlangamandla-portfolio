import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/123360302_3680917011940302_902560685131996327_n.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi there, I am</h5>
        <h1>Melikhaya Dlangamandla,</h1>
        <h5 className="text-light" style={{color: "white"}}>a beginner web developer with love of art and this is my little corner on the internet.</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Melikhaya Dlangamandla" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header