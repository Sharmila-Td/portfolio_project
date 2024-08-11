import React, { useState } from 'react';
import './Portfolio.css';
import ProjectData from './ProjectData';
import { BiDownArrow } from 'react-icons/bi';
import { FiX } from 'react-icons/fi'; 

const Portfolio = () => {
  const [items, setItems] = useState(ProjectData);
  const [activeIndex, setActiveIndex] = useState(null);

  const filterItem = (categoryItem) => {
    const updatedItem = ProjectData.filter((curEle) => {
      return curEle.category === categoryItem;
    });
    setItems(updatedItem);
  };

  const toggleModal = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="portfolio section" id="project">
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">Most recent work</span>

      <div className='portfolio_filter'>
        <span className='portfolio_item' onClick={() => setItems(ProjectData)}>All</span>
        <span className='portfolio_item' onClick={() => filterItem("Frontend")}>Frontend</span>
        <span className='portfolio_item' onClick={() => filterItem("Mern")}>Mern</span>
        <span className='portfolio_item' onClick={() => filterItem("Design")}>Design</span>
      </div>

      <div className="portfolio_container container grid">
        {items.map((item, index) => {
          return (
            <div className='portfolio_card' key={index}>
              <div className='portfolio_container-img'>
                <img src={item.image} alt='' className='portfolio_img' />
              </div>
              <h3 className='portfolio_title'>{item.title}</h3>
              <div className='portfolio_button-icons'>
                <a href={item.link} className="button button-flex" target='_blank'>
                  Demo
                </a>
              </div>
              <span
                className="button button-flex button-small button-link portfolio_button"
                onClick={() => toggleModal(index)}
              >
                <BiDownArrow className='button_icon' />
              </span>
              
              {activeIndex === index && (
                <div className='portfolio_modal'>
                  <FiX className="modal_close" onClick={() => toggleModal(index)} />
                  <h3 className='portfolio_modal-title'>{item.title}</h3>
                  <p className='portfolio_modal-desc'>{item.description}</p>
                  <div className='portfolio_links'>
                    <a href='' target='_blank'>Github Link</a>
                    <a href={item.link} target='_blank'>Website Link</a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
