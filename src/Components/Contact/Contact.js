// import React from 'react';
import './Contact.css';
import { BiMobile, BiEnvelope, BiLocationPlus } from 'react-icons/bi';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
    <h2 className="section_title">Contact Me</h2>
    <span className="section_subtitle">Get in touch</span>
    <div className="contact_container container grid">
        <div>
            <div className="contact_information">
               <BiMobile className='contact_icon' />
                <div>
                    <h3 className="contact_title">Call Me</h3>
                    <span className="contact_subtitle">8807689230</span>
                </div>
            </div>
            <div className="contact_information">
                <BiEnvelope className='contact_icon'/>
                <div>
                    <h3 className="contact_title">Email</h3>
                    <span className="contact_subtitle">sharmilathirupathi28@gmail.com</span>
                </div>
            </div>
            <div className="contact_information">
                <BiLocationPlus className='contact_icon'/>
                <div>
                    <h3 className="contact_title">Location</h3>
                    <span className="contact_subtitle">Thanjavur, Tamil Nadu</span>
                </div>
            </div>
        </div>
        <form action="" className="contact_form grid">
            <div className="contact_input grid">
                <div className="contact_content">
                    <label for="" className="contact_label">Name</label>
                    <input type="text" className="contact_input"/>
                </div>
                <div className="contact_content">
                    <label for="" className="contact_label">Email</label>
                    <input type="email" className="contact_input"/>
                </div>
            </div>
            <div className="contact_content">
                <label for="" className="contact_label">Message</label>
                <textarea name="" id="" col="0" rows="7" className="contact_input"></textarea>
            </div>
            <div>
                <a href="#" className="button button-flex">
                    Send Message
                </a>
            </div>
        </form>
    </div>
  </section>
  )
}

export default Contact