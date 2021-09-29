import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailConotainer";
import Cart from "./Pages/Cart"
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer name="Usuario" />
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
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
