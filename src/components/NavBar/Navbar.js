import React,{useState} from 'react';
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';

import "./Navbar.css";
import logo from "../../images/logo.png";

export default function Navbar() {
    const [isNavShow,setIsNavShow]=useState(false);
    const [navlinksClass,setNavLinksClass]=useState("nav-links-con navlink-hidden");
    let ScrollLink = Scroll.Link;
    function ToggleNavLink(){
        setIsNavShow(!isNavShow)
        if(isNavShow){
            setNavLinksClass("nav-links-con navlink-hidden")
        }
        else{
            setNavLinksClass("nav-links-con navlink-shown")
        }
    }

    return (
        <header id="nav-header"> 
            {/* navbar mobile */}
            <div id="nav-mobile">
                <figure>
                    <img src={logo} alt="logo"></img>
                </figure>
                <div className="nav-mobile">
                    { 
                    isNavShow ? <i className="fas fa-times " onClick={ToggleNavLink}/>
                                : <i className="fas fa-bars" onClick={ToggleNavLink} ></i>    
                    } 
                </div>
            </div>
            

            {/* nav links */}
            <div id="nav-links-con" className={navlinksClass}>
                <Link className="NB-link" to="/">Home</Link>
                <Link className="NB-link" to="/"> Shop </Link>
                <ScrollLink className="NB-link" to="footer-section" spy={true} smooth={true} duration={500}
                style={{cursor:"pointer"}}
                >Contact</ScrollLink>
                <Link to="/cart" id="nav-cart-con">
                    <span>
                        <i className="fas fa-shopping-cart "></i>
                        <p> Cart</p>
                    </span>
                      
                </Link>
            </div>
            
        </header>
    )
}