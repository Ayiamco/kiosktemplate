import React,{useState} from 'react'
import "../css/CartItemMobile.css"

export default function CartItemMobile({productName,price,imgUrl,deleteFromCart,id,setTotal}) {
    const [_quantity,setQuantity]=useState(0)
    
    function callDeleteFromCart(){
        deleteFromCart(id,price,_quantity)
    }

    function updateQuantity(e){
        if(e.target.className.includes("cart-item-mobile-QC-decrease")){
            if(_quantity>0){
                setQuantity(prev=>{return prev -1})
                setTotal(prev=> {return prev - price})
            }
        }
        if(e.target.className.includes("cart-item-mobile-QC-increase")){
            setQuantity(prev=>{return prev +1})
             setTotal(prev=> {return prev + price})
        }
    }
    return (
        <div className="cart-item-mobile-con">
            <figure>
                <img src={imgUrl} alt={productName}/>
            </figure>
            <div className="cart-item-mobile-desc">
                <p>{productName}</p>
                <p>${price}</p>
            </div>
            <div className="cart-item-mobile-QC-con">
                <p onClick={updateQuantity} className="cart-item-mobile-QC cart-item-mobile-QC-increase">+</p>
                <p id="order-quantity">&#215; {_quantity}</p>
                <p onClick={updateQuantity} className="cart-item-mobile-QC cart-item-mobile-QC-decrease">-</p>
            </div>
            <div className="cart-item-mobile-del-con">
                <i class="fas fa-trash-alt" onClick={callDeleteFromCart}></i>
            </div>
        </div>
    )
}
