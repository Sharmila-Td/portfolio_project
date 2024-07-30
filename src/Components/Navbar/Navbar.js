import React from 'react'
import { useRef } from 'react';
import './Navbar.css';
import { BiHome, BiUser, BiFile, BiBriefcase, BiImage, BiPhone } from 'react-icons/bi';
import { FiX, FiMoon } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const menubar = useRef();

    const navOpen = ( ) => {
        menubar.current.style.right = '0'
    }

    const navClose = () => {
        menubar.current.style.right = '-100%'
    }

  return (
    <header class="header">
    <nav class="nav container">
        <a href="#home" class="nav_logo">Sha.</a>
        <div class="nav_menu" ref={menubar}>
            <ul class="nav_list grid">
                <li class="nav_item">
                    <a href="#home" class="nav_link">
                       <BiHome className='nav_icon'/> Home
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#about" class="nav_link">
                        <BiUser className='nav_icon'/> About
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#skill" class="nav_link">
                        <BiFile className='nav_icon'/> Skill
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#service" class="nav_link">
                        <BiBriefcase className='nav_icon'/> Service
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#project" class="nav_link">
                        <BiImage className='nav_icon'/> Project
                    </a>
                </li>
                <li class="nav_item">
                    <a href="#contact" class="nav_link">
                        <BiPhone className='nav_icon'/> Contact 
                    </a>
                </li>
            </ul>
            <FiX className='nav_close' onClick={navClose} />
        </div>
        <div className="nav_btns">
            
            <div className="nav_toggle"  >
               <IoMenu className='nav_open' onClick={navOpen}/>   
            </div>
            {/* Theme change */}
            <FiMoon className='change-theme'/>
        </div>
    </nav>
    </header> 
  )
}

export default Navbar;