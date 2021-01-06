import React,{useState,useContext,useEffect} from 'react'
import * as Scroll from 'react-scroll';


import "../css/ProductDetails.css";
import {cartContext} from "../App";
import {scrollContext} from "./HomePage";


export default function ProductDetails({setDisplayProperty,setIsProductDetailsDisplayed,
    productId,productDetailsStyle,isInCart }) {
    
    let scroller = Scroll.scroller;
    const url = "https://fakestoreapi.com/products/" + productId
    const [productDetail,setProductDetail]=useState({})
    const setCartItems=useContext(cartContext)[1];
    const setCartItemsId=useContext(cartContext)[3];
    const setAllowScroll=useContext(scrollContext)[1];
    
    
    
    function closeDetails(){
        setDisplayProperty("none")
        setIsProductDetailsDisplayed(false)
         setAllowScroll(true)
         console.log("scrolling back to ")
         scroller.scrollTo(`product-${productId}`, {
            duration: 0,
            delay: 5,
            smooth: true,
            offset:-85 
            })
         

        
    }
    async function addToCart(){
        const res=await fetch(url)
        const respJson=await res.json();
        let hasItem=false;
        setCartItemsId(ids=>{
            if( ids.includes(respJson.id)===false){
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

    useEffect(() => {
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            setProductDetail(res)
        })

    })
    

    return (
        <div className={`ProductDetails-con-mn `} style={{display:productDetailsStyle}}>
        <i class="fas fa-times pd-close "  id="ProductDetails-close" onClick={closeDetails}></i>
       
        
        <section className="ProductDetails-container">
            
            <div className="ProductDetails-img-container">
                <img src={productDetail.image} alt=""></img>
            </div>
            <div className="ProductDetails-body">
                <h1>{productDetail.title}</h1>
                <p>{productDetail.description}</p>

                <div className="ProductDetails-price-con">
                    <div className="ProductDetails-price-con-left">
                        <p>${productDetail.price}</p>
                        <div className="ProductDetails-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div className="ProductDetails-price-con-line"></div>
                    <div  className="ProductDetails-price-con-right">
                        <p>Availability: In Stock</p>
                        <p>Category:{productDetail.category}</p>
                    </div>
                    
                </div>
                
                {/* buy product section */}
                <div className="ProductDetails-buy-section">
                    <button className="ProductDetails-btn" onClick={addToCart}>
                        Add to cart
                     </button>
                    <button className="ProductDetails-btn">
                        Buy it now!
                    </button>
                    <p style={{display:isInCart?"block":"none"}}>Already in cart</p>
                </div>
               

                {/* Product specialty section */}
                <div className="ProductDetails-specialty-con">
                    <h2>Speciality of This Product</h2>
                    <div>
                        <i class="fas fa-circle"></i>
                        <p className="ProductDetails-specialty">Very Fresh and Quality Full</p>
                    </div>
                    <div>
                        <i class="fas fa-circle"></i>
                        <p className="ProductDetails-specialty">Collect This From Natural Source</p>
                    </div>
                    <div>
                        <i class="fas fa-circle"></i>
                        <p className="ProductDetails-specialty">Have a Good Range of Validity Date</p>
                    </div>
                    <div>
                        <i class="fas fa-circle"></i>
                        <p className="ProductDetails-specialty">Have a Good Range of Validity Date</p>
                    </div>
                    <div>
                        <i class="fas fa-circle"></i>
                        <p className="ProductDetails-specialty">Have a Good Range of Validity Date</p>
                    </div>
                    <div>
                        <i class="fas fa-circle"></i>
                        <p className="ProductDetails-specialty">Have a Good Range of Validity Date</p>
                    </div>
                </div>
            </div>
            
        
        </section>
    </div>
    )
}
