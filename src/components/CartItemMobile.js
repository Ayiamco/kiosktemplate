import React,{useState} from 'react'
import "../css/CartItemMobile.css"

export default function CartItemMobile({productName,price,imgUrl,deleteFromCart,id,setTotal}) {
    const [_quantity,setQuantity]=useState(0)
    
    function callDeleteFromCart(){
        deleteFromCart(id,price,_quantity)
    }

    function updateQuantity(e){
        if(e.target.className.includes("CQC-reduce")){
            if(_quantity>0){
                setQuantity(prev=>{return prev -1})
                setTotal(prev=> {return prev - price})
            }
        }
        if(e.target.className.includes("CQC-increase")){
            setQuantity(prev=>{return prev +1})
             setTotal(prev=> {return prev + price})
        }
    }
    return (
        <div className="cart-item-mobile-con">
            <figure>
                <img src={imgUrl} alt={productName}/>
            </figure>
            <div>
                <p>{productName}</p>
                <p>${price}</p>
            </div>
            <div>
                <p onClick={updateQuantity}>+</p>
                <p>{_quantity}</p>
                <p onClick={updateQuantity}>-</p>
            </div>
            <div>
                <i class="fas fa-trash-alt" onClick={callDeleteFromCart}></i>
            </div>
        </div>
    )
}
