import React from 'react';
import './About.css';
import profile from '../assests/Image/profile2.webp';
import { FiArrowDown } from 'react-icons/fi';

const About = () => {
  return (
    <section className="about section" id="about">
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle"> My Introduction</span>
                <div className="about_container container grid">
                    <img src={profile} alt="" className="about_img"/>
                    <div className="about_data">
                        <p className="about_description">Web developer Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, eveniet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="about_info">
                            <div>
                                <span className="about_info-title">0+</span>
                                <span className="about_info-name">Years <br/> Fresher</span>
                            </div>
                            <div>
                                <span className="about_info-title">0+</span>
                                <span className="about_info-name">Completed <br/> project</span>
                            </div>
                            <div>
                                <span className="about_info-title">0+</span>
                                <span className="about_info-name">Companies <br/> worked</span>
                            </div>
                        </div>
                        <div className="about_buttons">
                            <a download="" href="./pdf/Sharmi Resume - 2024.pdf" className="button button-flex">
                                Download CV <FiArrowDown/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  )
};

export default About