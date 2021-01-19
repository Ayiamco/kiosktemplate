import React from "react";
import {useState} from "react"
import "./ContactForm.css";

function ContactForm(){
    const [email,setPassword]=useState("");

    const handleLoginForm =(e)=>{
     e.preventDefault()
    }

    const handleInput=(e)=>{
        if(e.target.name==="email"){
            setPassword(prev => {return  e.target.value})
        }
    }

    return (
        <div className="CF-con">
            
            <form onSubmit={handleLoginForm}>
                <div id="CF-1"></div> <div id="CF-2"></div> <div id="CF-3"></div> <div id="CF-4"></div>
                <div id="CF-5"></div><div id="CF-6"></div>
                  <p className="CF-con-desc">Let's Add You to Our Latest Newsletter </p>
                <div className="CF-form">
                    <input placeholder=" Enter Email Address" name="email" onChange={handleInput} value={email} ></input>
                    <button > Subscribe</button>
                </div>
                
            </form>
        </div>
    )
}


export default ContactForm;