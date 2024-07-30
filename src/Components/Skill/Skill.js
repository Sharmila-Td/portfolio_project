import React from 'react';
import './Skill.css';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { BiServer } from 'react-icons/bi';
import { FaSwatchbook } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';

const Skill = () => {
  return (
    <section className="skills section" id="skill">
    <h2 className="section_title">Skills</h2>
    <span className="section_subtitle">My Technical level</span>
    <div className="skills_container container grid">
        <div>
            {/* skill 1  */}
             <div className="skills_content skills_open">
                <div className="skills_header">
                    <PiBracketsCurlyBold className='skills_icon'/>
                    <div>
                        <h1 className="skills_title">Frontend Developer</h1>
                        <span className="skills_subtitle">-</span>
                    </div>
                    <FiArrowDown className='skills_arrow'/>
                </div>
                <div className="skills_list grid">
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_number">90%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_html"></span>
                        </div>
                    </div>

                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_number">80%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_css"></span>
                        </div>
                    </div>

                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">JavaScript</h3>
                            <span className="skills_number">60%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_js"></span>
                        </div>
                    </div>

                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">React</h3>
                            <span className="skills_number">85%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_react"></span>
                        </div>
                    </div>
                </div>
             </div>
             {/* <!-- skill 2 --> */}
             <div className="skills_content skills_close">
                <div className="skills_header">
                  <BiServer className="skills_icon"/>
                    <div>
                        <h1 className="skills_title">Backend Developer</h1>
                        <span className="skills_subtitle">-</span>
                    </div>
                    <FiArrowDown className='skills_arrow'/>
                </div>
                <div className="skills_list grid">
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">Node JS</h3>
                            <span className="skills_number">50%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_node"></span>
                        </div>
                    </div>
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">Firebase</h3>
                            <span className="skills_number">90%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_firebase"></span>
                        </div>
                    </div>
                </div>
             </div>
            </div>
             <div>
            {/* <!-- skill 3 --> */}
            <div className="skills_content skills_close">
                <div className="skills_header">
                <FaSwatchbook className='skills_icon'/>
                    <div>
                        <h1 className="skills_title">Designer</h1>
                        <span className="skills_subtitle">-</span>
                    </div>
                    <FiArrowDown className='skills_arrow'/>
                </div>
                <div className="skills_list grid">
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skills_name">Figma</h3>
                            <span className="skills_number">50%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_figma"></span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
    </section>
  )
}

export default Skill;