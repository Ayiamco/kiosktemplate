import React,{useState} from 'react'
import "../css/CartItem.css"

// CartQuantityCounter from "./CartQuantityCounter"

export default function CartItem({title,price,imgUrl,setTotal,deleteFromCart,id}) {
    const [_quantity,setQuantity]=useState(0)
    
    function callDeleteFromCart(){
        deleteFromCart(id,price,_quantity)
    }

    function updateQuantity(e){
        if(e.target.className.includes("CQC-reduce")){
            console.log("yes")
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
        <tr className="cart-item">
            <td >
                <div className="cart-item-product">
                    <i class="fas fa-times "  onClick={callDeleteFromCart} name={id}></i>
                    <div className="cart-item-img-con">
                        <img src={imgUrl} alt=""></img>
                    </div>
                    
                </div>
                
                 
            </td>
            <td>
                {title}
            </td>

            <td>
                {price}
            </td>
            <td>
               <div className="CQC-con">
                    <p className="CQC CQC-reduce" onClick={updateQuantity}>-</p>
                    <p className="CQC-num">{_quantity}</p>
                    <p className="CQC CQC-increase" onClick={updateQuantity}>+</p>
                </div>
            </td>
            <td>
                ${(price* _quantity).toFixed(2)}
            </td>
            
        </tr>
    )
}
