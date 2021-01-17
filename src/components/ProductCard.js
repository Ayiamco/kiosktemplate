import React,{useState,useContext}from 'react'
import Modal from "react-modal"

import '../css/ProductCard.css';
import {cartContext} from "../App"
import ProductDetails from "./ProductDetails"
Modal.setAppElement("#root")

export default function ProductCard({id,img,priceNow,priceOld,title,category}) {

    const url = "https://fakestoreapi.com/products/" + id
    const [isInCart,setIsInCart]=useState(false);
    const setCartItems=useContext(cartContext)[1];
    const setCartItemsId=useContext(cartContext)[3];
    const cartItemsId=useContext(cartContext)[2];
    const [modalIsOpen,setIsModalOpen]=useState(false);
    
    async function addToCart(){
        const res=await fetch(url)
        const respJson=await res.json();
        let hasItem=false;
        setCartItemsId(ids=>{
            if( ids.includes(respJson.id)===false){
                console.log("item is not in  cart")
                return [...ids,respJson.id]
            }
            else{
               hasItem=true
                return [...ids]
            }
        })
        
        if( hasItem===false){
            setCartItems(cart=>{
                    return [...cart,{
                    "price":respJson.price,
                    "imgUrl":respJson.image,
                    "id":respJson.id,
                    "title":respJson.title
                    }]
                })
        }
        setCartItems(prev=>{
          
            return [...prev]
        })
        setCartItemsId(prev=>{
            return [...prev]
        })
       
        return;
}

    const ToggleDetails =(e)=>{
        if(e.target.className==="far fa-eye"){
            console.log("eye clicked")
            setIsModalOpen(true)
        }
        else{
            setIsModalOpen(false);
        }
        
        return;
    }



    return (
        <div className={`ProductCard-container`} name={`product-${id}`} >
            <Modal isOpen={modalIsOpen} onRequestClose={()=>{return setIsModalOpen(false)}}
             shouldCloseOnOverlayClick={false} style={{
                 content:{
                     padding:"0px",
                     boxShadow: " 5px 5px 5px  rgb(216, 211, 211)",
                     top:"7em"
                 }
             }}>
                <ProductDetails productId={id}  setIsInCart={setIsInCart} isInCart={isInCart} closeDetails={ToggleDetails} >
                </ProductDetails>
            </Modal>
               
           
             <div className="ProductCard-container-hd">
                
                <div className="ProductCard-img-container">
                    <img src={img} alt="new product"></img>
                </div>

                <div className="ProductCard-newProduct-tag">
                    <div className="ProductCard-newProduct-tag-top">
                        <p>New</p>
                    </div>
                    <div className="ProductCard-newProduct-tag-bottom">
                        
                    </div>
                </div>
                
            </div>

            
            <div className="ProductCard-container-ft">
                <div className="ProductCard-title-container">
                    <h3>{title}</h3>
                </div>
                
                <p>Category: {category}</p>
                <span className="ProductCard-container-price">
                     <p className="ProductCard-container-price-now">${priceNow}</p>
                     <p className="ProductCard-container-price-slash">${priceOld}</p>
                </span>
                <div>
                    <button onClick={addToCart}
                     className={cartItemsId.includes(id)?"ProductCard-container-ft-btn disabled"
                                                        :"ProductCard-container-ft-btn"}>
                        { cartItemsId.includes(id)? "Already In Cart" :"Add to Cart"}</button>
                    <div className="ProductCard-icons">
                        <i class="far fa-eye " onClick={()=>{setIsModalOpen(true)}}></i>
                        <i class="far fa-heart"></i>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}
