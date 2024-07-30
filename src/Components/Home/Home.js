import React from 'react';
import './Home.css';
import Profile from '../assests/Image/profile2.webp';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="home section" id="home">
    <div className="home_container container grid">
        <div className="home_content grid">
            <div className="home_social">
                <a href="#" className="home_social-icon" target="_blank">
                    <FiLinkedin/>
                </a>
                <a href="https://github.com/Sharmila-Td" className="home_social-icon" target="_blank">
                    <FiGithub/>
                </a>
                <a href="#" className="home_social-icon" target="_blank">
                    <FiInstagram/>
                </a>
            </div>

            <div className="home_img">
                <img src={Profile} className="home_img"/>
            </div>
            <div className="home_data">
                <h1 className="home_title">Hi, I'm Sharmila</h1>
                <h3 className="home_subtitle">Fronted developer</h3>
                <p className="home_description">Lorem ipsum dolor sit amet, consectetur adipsantium repudiandae deleniti doloribus fugit consequatur temporibus dolores tempore, ab obcaecati odio cum pariatur dolorem sapiente modi? Quaerat?</p>
                <a href="#contact" className="button button-flex">
                    Contact Me
                </a>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Home