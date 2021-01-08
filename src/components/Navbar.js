import React,{useState} from 'react';
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';

import "../css/Navbar.css";
import logo from "../images/logo.png";

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
                    isNavShow ? <i class="fas fa-times " onClick={ToggleNavLink}/>
                                : <i class="fas fa-bars" onClick={ToggleNavLink} ></i>    
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
                    <i class="fas fa-shopping-cart "></i>
                    <p> Cart</p>  
                </Link>
            </div>
            
        </header>
    )
}