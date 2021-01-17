import React from 'react'
import ProductCard from './ProductCard'
import "../css/ProductList.css"


export default function ProductList({products}) {
    return (
        <div >
           <h1 className="Product-list-hd">New Items</h1>
                <section id="AvailableProducts">
                {
               products.map( (prod,index)=>{
                   let title=prod.title;
                   let price=String(prod.price);
                   if(prod.title.length>20){
                       title=title.slice(0,40) + " ..."
                   }
                    return(
                            <ProductCard key={prod.id} img={prod.image} title={title}
                                         category={prod.category} priceNow={prod.price}
                                         priceOld={ price} id={prod.id}
                            />
                    )
                     ;
                   
               })
               
           }
           </section>     
           
        </div>
    )
}

