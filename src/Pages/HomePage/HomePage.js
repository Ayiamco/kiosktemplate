import React,{useEffect,useState} from "react"
import "./HomePage.css"
import ProductList from  "../../components/ProductList/ProductList"
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer"
import Loading from "../../components/Loading/Loading"


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