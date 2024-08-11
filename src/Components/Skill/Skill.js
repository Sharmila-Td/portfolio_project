import React, {useState} from 'react';
import './Skill.css';
import { FiArrowDown } from 'react-icons/fi';
import { skillsData } from './SkillData';

const Skill = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleSkills = (index) => {
      if(activeIndex === index){
        setActiveIndex(-1);
      }else{
        setActiveIndex(index);
      }
    }

  return ( 
    <section className="skills section" id="skill">
    <h2 className="section_title">Skills</h2>
    <span className="section_subtitle">My Technical level</span>

    <div className="skills_container container grid">
      {skillsData.map((skill,index) => (
        <div
          className={`skills_content ${
            activeIndex === index ? "skills_open" : "skills_close"
          }`}
          key={index}
        >
          <div className="skills_header" onClick={() => toggleSkills(index)}>
            <i className={`${skill.icon} skills_icon`}></i>
            <div>
              <h1 className="skills_title">{skill.title}</h1>
              <span className="skills_subtitle">{skill.subtitle}</span>
            </div>
            <FiArrowDown className='skills_arrow'/>
          </div>
          <div className="skills_list grid">
            {skill.skills.map((skillDetail, i) => (
              <div className="skill_data" key={i}>
                <div className="skill_titles">
                  <h3 className="skills_name">{skillDetail.name}</h3>
                  <span className="skills_number">{skillDetail.level}</span>
                </div>
                <div className="skills_bar">
                  <span
                    className="skills_percentage"
                    style={{ width: skillDetail.level }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
};



export default Skill;