import React,{useContext,useState} from 'react'
import CartItem from "../../components/CartItem/CartItem";
import NavBar from "../../components/NavBar/Navbar"
import Footer from "../../components/Footer/Footer"
import CartItemMobile from "../../components/CartItemMoblile/CartItemMobile"

import "./Cart.css"
import {cartContext} from "../../App"

export default function Cart() {
    const [cartItems,setCartItems]=useContext(cartContext)
    const [currentTotal,setCurrentTotal]=useState(0)
    const setCartItemsId=useContext(cartContext)[3];
    // const cartItemsId=useContext(cartContext)[2];

    const deleteFromCart =(id,price,quantity)=>{
        //remove item from cartitems
        setCartItems(prev=>{
            return prev.filter(item=> item.id !== id)
        })
        //subtract item from total cart amount
        setCurrentTotal(prev=>{
            return prev -(price*quantity)
        })
        //remove itemId from cartItems Id list
        setCartItemsId(itemsId=>{
            return itemsId.filter(itemId=> itemId !== id)
        })


    }

    return (
        <div className="cart-items-con-mn">
            <NavBar></NavBar>
            <h1 id="cart-hd">Shopping Cart</h1>
            <section id="cart-section">

                {/* Cart items table for small sreen */}
                <section id="cart-items-mobile">
                   {
                       cartItems.length>0?
                            cartItems.map(item =>{
                            return <CartItemMobile key={item.id} productName={item.title}
                                        quantity={item.quantity} price={item.price}
                                        setTotal={setCurrentTotal} imgUrl={item.imgUrl}
                                        deleteFromCart={deleteFromCart} id={item.id}
                            />
                        })
                      :""
                    }
                </section>

                {/*Cart items table section(for large screen)*/}
                {cartItems.length===0 ? <div style={{display:"none"}}></div>:
                    <div className="cart-large-screen">
                            <table>
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
                    </div>
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
            </section>

           

            <Footer></Footer>
        </div>
    )
}
