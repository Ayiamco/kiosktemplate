import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import "../css/ProductList.css"
import Loading from "./Loading"


export default function ProductList() {
    const [products,setProducts]=useState([])
     const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProducts(json)
                setIsLoading(false)
                console.log("no  more loading")
                return;
            })

    },[setIsLoading])

    
    return (
        <div >
           <h1 className="Product-list-hd">New Items</h1>
           {isLoading?<Loading></Loading> :

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
           }
           
           
        </div>
    )
}

