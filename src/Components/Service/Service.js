import React from 'react';
import './Service.css';
import { BiPencil, BiDownArrow, BiDesktop, BiServer } from 'react-icons/bi';

const Service = () => {
  return (
    <section className="services section" id="service">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What i offer</span>

    <div className="services_container container grid">
        {/* < Service 1  */}
         <div className="services_content">
            <div>
                <BiPencil className='services_icon'/>
                
                <h3 className="services_title">Ui/Ux <br/> Designer </h3>
            </div>
            <span className="button button-flex button-small button-link service_button">
                view more
                <BiDownArrow className='button_icon'/>
            </span>
            <div className="services_modal">
                <div className="services_modal-content">
                    <h4 className="services_modal-title">Ui/Ux <br/> Designer</h4>
                    <i className="uil uil-times services_modal-close"></i>
                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I develop the uer interface.</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>Web page development</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I create ux element interactions</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I positiion your company brand.</p>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
         {/* <!-- Service 2 --> */}
         <div className="services_content">
            <div>
                <BiDesktop className='services_icon'/>
                <h3 className="services_title">Frontend <br/> Developer </h3>
            </div>
            <span className="button button-flex button-small button-link service_button">
                view more
                <BiDownArrow className='button_icon'/>
            </span>
            <div className="services_modal">
                <div className="services_modal-content">
                    <h4 className="services_modal-title">Frontend <br/> Developer </h4>
                    <i className="uil uil-times services_modal-close"></i>
                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I develop the uer interface.</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>Web page development</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I create ux element interactions</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I positiion your company brand.</p>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
         {/* <!-- Service 3 --> */}
         <div className="services_content">
            <div>
                <BiServer className='services_icon'/>
                <h3 className="services_title">Backend <br/> Developer </h3>
            </div>
            <span className="button button-flex button-small button-link service_button">
                view more
                <BiDownArrow className='button_icon'/>
            </span>
            <div className="services_modal">
                <div className="services_modal-content">
                    <h4 className="services_modal-title"> Backend <br/> Developer</h4>
                    <i className="uil uil-times services_modal-close"></i>
                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I develop the uer interface.</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>Web page development</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I create ux element interactions</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check service_modal-icon"></i>
                            <p>I positiion your company brand.</p>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</section>
  )
}

export default Service