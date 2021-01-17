import React from "react"
import "../css/HomePage.css"
import ProductList from  "./ProductList"
import Navbar from "./Navbar";
import Footer from "./Footer"


function HomePage() {
 
  return (
      <div >
          <Navbar></Navbar>
           <div >
              <ProductList />
          </div>
          <Footer></Footer>
      </div>
  );
}

export default HomePage;