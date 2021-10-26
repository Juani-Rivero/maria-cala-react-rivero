import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailConotainer";
import Cart from "./Pages/Cart"
import { CartProvider } from "./context/CartContext";
import Home from "./Pages/Home";
import ThankYou from "./Pages/ThankYou";
import Textiles from "./Pages/Textiles";
import Cocina from "./Pages/Cocina";
import Ceramica from "./Pages/Ceramica";
import Aromatizantes from "./Pages/Aromatizantes";
import Hogar from "./Pages/Hogar";




function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/itemcount">
            <ItemCount />
          </Route>
          <Route exact path="/itemdetailcontainer">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/textiles">
            <Textiles />
          </Route>
          <Route exact path="/cocina">
            <Cocina />
          </Route>
          <Route exact path="/ceramica">
            <Ceramica />
          </Route>
          <Route exact path="/aromatizantes">
            <Aromatizantes />
          </Route>
          <Route exact path="/hogar">
            <Hogar />
          </Route>
          <Route exact path="/thank-you">
            <ThankYou />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
