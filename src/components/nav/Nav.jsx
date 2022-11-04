import React from 'react'
import { useState } from 'react'

import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {MdMiscellaneousServices} from 'react-icons/md'
import {GoMail} from 'react-icons/go'
import {FaAward} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><MdMiscellaneousServices/></a>
      <a href="#certicications" onClick={() => setActiveNav('#certicications')} className={activeNav === '#certicications' ? 'active' : ''} ><FaAward/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GoMail/></a>
    </nav>
  )
}

export default Nav