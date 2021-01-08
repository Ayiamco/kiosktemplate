import React from 'react'
import ContactForm from './ContactForm'
import * as Scroll from 'react-scroll';

import "../css/Footer.css"
import logo from "../images/logo.png"

export default function Footer() {
    let ScrollLink  = Scroll.Link;
    return (
        <div  className="Footer-container" id="footer-section" >
            {/* Contact info section */}
            <ContactForm></ContactForm>
            <div className="Footer-con-mn">
                <section className="Footer-contact" id="contact">
                    <p className="Ft-contact-img-con">
                        <img src={logo} alt="company logo"></img>
                    </p>
                    <p className="contact-form-desc">
                        We are one of the best company into the world and you can easily knock us.
                    </p>
                    <div className="contact-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>2873 Yorkshire Circle, NC, Carolina</p>
                    </div>
                    <div className="contact-info ">
                        <i class="fas fa-envelope "></i>
                        <p className="">hello@template.com</p>
                    </div>
                    <div className="contact-info"> 
                    <i class="fas fa-phone-volume "></i>
                        <p>(+234)700-000-0000</p>
                    </div>
                </section>

                {/* Serices section */}
                <section className="Footer-services">
                    <p className="Footer-title">Services</p>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >My Account</ScrollLink>
                    <ScrollLink className="Footer-services-link " to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Tracking Order</ScrollLink>
                    <ScrollLink className="Footer-services-link " to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Customer Services</ScrollLink>
                    <ScrollLink className="Footer-services-link " to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Compare</ScrollLink>
                    <ScrollLink className="Footer-services-link " to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Wishlist</ScrollLink>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Privacy Policy</ScrollLink>
                </section>

                {/* Useful links sectiion */}
                <section className="Footer-usefull-links">
                    <p className="Footer-title">Useful Links</p>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    > Home</ScrollLink>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >About Us</ScrollLink>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Blog Details</ScrollLink>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Shop Details</ScrollLink>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Testimonials</ScrollLink>
                    <ScrollLink className="Footer-services-link" to="" spy={true} smooth={true} duration={500}
                    style={{cursor:"pointer"}}
                    >Team</ScrollLink>
                

                </section>

                <div className="Footer-working-hours ">
                    <p id="Footer-working-hours-title">Working Hours</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat pretium volutpat. Quisque id</p>
                    <p>Monday-Friday: 8:30 AM - 5:30 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            
            
        </div>
    )
}
