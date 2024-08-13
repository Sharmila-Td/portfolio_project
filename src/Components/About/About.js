import React from 'react';
import './About.css';
import profile from '../assests/Image/profile2.webp';
import { FiArrowDown } from 'react-icons/fi';
import resume from '../assests/resume/resume.pdf';


const About = () => {
  return (
    <section className="about section" id="about">
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle"> My Introduction</span>
                <div className="about_container container grid">
                    <img src={profile} alt="" className="about_img"/>
                    <div className="about_data">
                        <p className="about_description">
                            I'm Sharmila Thirupathi, a recent BSc.Computer Science graduate(2023) with a passive for building innovative web applications. As a fresher in the industry, I'm excited to take my first Step as a React Developer and continue growing in the field. 
                            {/* <Link to=''>More about me</Link> */}
                        </p>
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
                            <a download="Resume" href={resume} className="button button-flex">
                                Download CV <FiArrowDown/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default About