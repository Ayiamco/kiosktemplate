import React,{useEffect,useState} from "react"
import "../css/HomePage.css"
import ProductList from  "./ProductList"
import Navbar from "./Navbar";
import Footer from "./Footer"
import Loading from "./Loading"


function HomePage() {
 
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
        {isLoading?<Loading></Loading> :
          <div >
              <Navbar></Navbar>
              <div >
                  <ProductList products={products}/>
              </div>
              <Footer></Footer>
          </div>
        }
    </div>
  );
}

export default HomePage;