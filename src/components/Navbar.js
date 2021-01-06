import React,{useState} from 'react'
import {Link} from "react-router-dom"
import * as Scroll from 'react-scroll';

import "../css/Navbar.css"
import logo from "../images/logo.png"

export default function Navbar() {
    const [isNavShow,setIsNavShow]=useState(false);
    let ScrollLink      = Scroll.Link;
    function ToggleNavLink(){
        setIsNavShow(!isNavShow)
    }
    return (
        <div  className="NB-container">
             <div className="NB-con-mn"> 
                <div className="NB-logo-con">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="NB-links-con">
                    <Link className="NB-link" to="/">Home</Link>
                    <Link className="NB-link"> Shop</Link>
                   <ScrollLink className="NB-link" to="contact" spy={true} smooth={true} duration={500}
                   style={{cursor:"pointer"}}
                   >Contact</ScrollLink>
                    
                </div>
                <Link to="/cart" className="NB-cart-con">
                    <i class="fas fa-shopping-cart "></i>
                    <p> Cart</p>  
                </Link>
            </div>  

            {/* mobile navbar */}
             <div className="NB-con-mn-mb"> 
                <div className="NB-mb-tp">
                    <div className="NB-logo-con-mb">
                        <img src={logo} alt="logo"></img>
                    </div>
                    {isNavShow?
                        <i class="fas fa-times " onClick={ToggleNavLink}/> :
                        <i class="fas fa-bars" onClick={ToggleNavLink} ></i>
                }  
                </div>
                
                 <div className="NB-links-con-mb" style={{display:isNavShow?"block": "none"}}>
                    <Link className="NB-link-mb" to="/">Home</Link>
                    <Link className="NB-link-mb"> Shop</Link>
                    <Link className="NB-link-mb">Contact</Link>
                    <Link to="/cart" className="NB-cart-con-mb">
                    <i class="fas fa-shopping-cart "></i>
                    <p>Cart</p>  
                </Link> 
                </div>
                
            </div>  
            
            
            
        </div>
    )
}