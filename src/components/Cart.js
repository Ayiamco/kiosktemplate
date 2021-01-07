import React,{useContext,useState} from 'react'
import CartItem from "./CartItem";
import NavBar from "./Navbar"
import Footer from "./Footer"

import "../css/Cart.css"
import {cartContext} from "../App"

export default function Cart() {
    const [cartItems,setCartItems]=useContext(cartContext)
    const [currentTotal,setCurrentTotal]=useState(0)

    const deleteFromCart =(id,price,quantity)=>{
        console.log("tried to delete")
        setCartItems(prev=>{
            return prev.filter(item=> item.id !== id)
        })
        setCurrentTotal(prev=>{
            return prev -(price*quantity)
        })
        
    }

    return (
        <div className="cart-items-con-mn">
            <NavBar></NavBar>
            <section id="cart-section">
                <h1 id="cart-hd">Cart {cartItems.length===0 ? "is Empty": ""}</h1>

                {/*Cart items table section*/}
                <div className="cart-items-con">
                    {
                        cartItems.length===0 ? "":
                            <table className="cart-items-table">
                                <thead>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Unit Price</th>
                                    <th>Quatity</th>
                                    <th>Total</th>
                                </thead>
                            <tbody>
                                { 
                                    cartItems.map(item =>{
                                        return <CartItem key={item.id} title={item.title} imgUrl={item.imgUrl}
                                                    quantity={item.quantity} price={item.price} 
                                                    setTotal={setCurrentTotal}
                                                    deleteFromCart={deleteFromCart} id={item.id}
                                        />
                                    })
                                }
                        </tbody>
                        
                    </table>
                    }
                    
                    {/*Cart summary section*/}
                    <section className="cart-summary">
                        <div className="cart-summary-hd">Cart Summary</div>
                        <div className="cart-summary-bd">
                            <p>SubTotals</p>
                            <p>${currentTotal.toFixed(2)}</p>
                        </div>
                        
                        <div className="cart-summary-bd">
                            <p>Delivery</p>
                            <p>${ (currentTotal* 0.05).toFixed(2)}</p>
                        </div>
                        <div className="cart-summary-bd">
                            <p>Total</p>
                            <p>${ (currentTotal * 1.05).toFixed(2)}</p>
                        </div>
                        <div className="cart-summary-ft">
                            <p>Checkout</p>
                        </div>
                    </section>
                </div>
            </section>
            
            <Footer></Footer>
        </div>
    )
}
