import React,{useState} from "react"
import "../css/HomePage.css"
import ProductList from  "./ProductList"
import Navbar from "./Navbar";
import Footer from "./Footer"


export const scrollContext=React.createContext()

function HomePage() {
  const [allowScroll,setAllowScroll]=useState(true)
 
  return (
    <scrollContext.Provider value={[allowScroll,setAllowScroll]} className="HP-container" >
      <div  className={allowScroll? "HP-auto":"HP-hidden"} >
          <Navbar></Navbar>
           <div >
              <ProductList />
          </div>
          <Footer></Footer>
      </div>
      
    </scrollContext.Provider>
  );
}

export default HomePage;