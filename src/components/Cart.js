import React,{useContext,useState} from 'react'
import CartItem from "./CartItem";
import NavBar from "./Navbar"
import Footer from "./Footer"
import CartItemMobile from "./CartItemMobile"

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
                <h1 id="cart-hd">Shopping Cart</h1>

                {/* Csrt items table for small sreen */}
                <section id="cart-items-mobile">
                   { 
                        cartItems.map(item =>{
                            return <CartItemMobile key={item.id} productName={item.title} 
                                        quantity={item.quantity} price={item.price} 
                                        setTotal={setCurrentTotal} imgUrl={item.imgUrl}
                                        deleteFromCart={deleteFromCart} id={item.id}
                            />
                        })
                    }
                </section>

                {/*Cart items table section(for large screen)*/}
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
                </div>
            </section>

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
            
            <Footer></Footer>
        </div>
    )
}
