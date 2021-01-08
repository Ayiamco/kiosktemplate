import React,{useState,useContext}from 'react'
import '../css/ProductCard.css';

import {cartContext} from "../App"
import ProductDetails from "./ProductDetails"
import {scrollContext} from "./HomePage"

export default function ProductCard({id,img,priceNow,priceOld,title,category}) {

    const [isProductDetailsDisplayed,setIsProductDetailsDisplayed]=useState(false)
    const [productDetailsStyle,setProductDetailsStyle]=useState("none")
    const url = "https://fakestoreapi.com/products/" + id
    const [isInCart,setIsInCart]=useState(false);
    const setAllowScroll=useContext(scrollContext)[1];
    const setCartItems=useContext(cartContext)[1];
    const setCartItemsId=useContext(cartContext)[3];
    const cartItemsId=useContext(cartContext)[2];
    
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

    const ToggleDetails =()=>{
        if(isProductDetailsDisplayed){
            setIsProductDetailsDisplayed(false)
            setProductDetailsStyle("none")
            setAllowScroll(true)
            return;
        }

        setIsProductDetailsDisplayed(true)
        setProductDetailsStyle("block")
        setAllowScroll(false);
        
        return;
    }



    return (
        <div className={`ProductCard-container`} name={`product-${id}`} >
            <div className="modal-main"style={{display:productDetailsStyle}}>
            </div>
            <ProductDetails productId={id} setDisplayProperty={setProductDetailsStyle} 
                    setIsProductDetailsDisplayed={setIsProductDetailsDisplayed}
                     productDetailsStyle={productDetailsStyle} setIsInCart={setIsInCart}
                     isInCart={isInCart}
                     
            />
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
                        <i class="far fa-eye " onClick={ToggleDetails}></i>
                        <i class="far fa-heart"></i>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}
