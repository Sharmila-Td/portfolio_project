import React, { useState } from 'react';
import './Service.css';
import { BiDownArrow } from 'react-icons/bi';
import ServiceData from './ServiceData';
import {CgCheckO} from 'react-icons/cg';

import { FiX } from 'react-icons/fi';

const Service = () => {
  const [activeModal, setActiveModal] = useState(-1);

  const openModal = (index) => {
    setActiveModal(index);
  }

  const closeModal = () => {
    setActiveModal(-1)
  }
  return (

    <section className="services section" id="service">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What i offer</span>

    <div className="services_container container grid">
    {ServiceData.map((service, index) => (
          <div className="services_content" key={index}>
            <div>
              <div className="services_icon"> {service.icon} </div>
              <h3 className="services_title">
                {service.title.split(" ").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <span
              className="button button-flex button-small button-link service_button"
              onClick={() => openModal(index)}
            >
              view more
             <BiDownArrow className='button_icon'/>
            </span>

            <div
              className={`services_modal ${
                activeModal === index ? "active-modal" : ""
              }`}
            >
              <div className="services_modal-content">
                <h4 className="services_modal-title">
                  {service.title.split(" ").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h4>
                 <FiX className='services_modal-close' onClick={closeModal}/> 
                <ul className="services_modal-services grid">
                  {service.description.map((desc, i) => (
                    <li className="services_modal-service" key={i}>
                       <CgCheckO className='services_icon'/>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
           
          </div>
        ))}
        
    </div>
</section>
  )
}

export default Service