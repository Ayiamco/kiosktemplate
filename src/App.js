import React ,{useState}from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Cart from "./components/Cart";
import  "./css/general.css"
import HomePage from "./components/HomePage"

export const cartContext= React.createContext();

function App() {
  const [cartItems,setCartItems]=useState([])
  const [cartItemsId,setCartItemsId]=useState([])
  
 
  return (
    <cartContext.Provider value={[cartItems,setCartItems,cartItemsId,setCartItemsId]}>
      <Router>
          <Switch>
              <Route exact path="/"> <HomePage ></HomePage></Route>
              <Route exact path="/cart"> <Cart></Cart></Route>
              <Route exact path="/*">
                <h1>Eroor Page</h1>
              </Route>
          </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
