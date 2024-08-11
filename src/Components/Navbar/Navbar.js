import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import { BiHome, BiUser, BiFile, BiBriefcase, BiImage, BiPhone } from 'react-icons/bi';
import { FiX, FiMoon, FiSun } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const menubar = useRef();
    const [theme, setTheme] = useState('light');

    const navOpen = () => {
        menubar.current.style.right = '0';
    };

    const navClose = () => {
        menubar.current.style.right = '-100%';
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            document.body.classList.add('dark-theme');
            setTheme('dark');
        } else {
            document.body.classList.remove('dark-theme');
            setTheme('light');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav_logo">Sha.</a>
                <div className="nav_menu" ref={menubar}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <BiHome className='nav_icon' /> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <BiUser className='nav_icon' /> About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skill" className="nav_link">
                                <BiFile className='nav_icon' /> Skill
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#service" className="nav_link">
                                <BiBriefcase className='nav_icon' /> Service
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#project" className="nav_link">
                                <BiImage className='nav_icon' /> Project
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <BiPhone className='nav_icon' /> Contact
                            </a>
                        </li>
                    </ul>
                    <FiX className='nav_close' onClick={navClose} />
                </div>
                <div className="nav_btns">
                    <div className="nav_toggle">
                        <IoMenu className='nav_open' onClick={navOpen} />
                    </div>
                    {/* Theme change */}
                    {theme === 'light' ? (
                        <FiMoon className='change-theme' onClick={toggleTheme} />
                    ) : (
                        <FiSun className='change-theme' onClick={toggleTheme} />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
