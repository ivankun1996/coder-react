import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { UnContext } from "./context/UnContext";
import { useState } from "react";
import { CartScreen } from "./Components/CartScreen/CartScreen";
import { Checkout } from "./Components/Checkout/Checkout";

function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito, prod]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div>
      <>
        <UnContext.Provider
          value={{
            carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            cantidadCarrito,
            vaciarCarrito,
          }}
        >
          <BrowserRouter>
            <NavBar />

            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:catId">
                <ItemListContainer />
              </Route>
              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/nosotros">
                <h1>About us</h1>
              </Route>
              <Route exact path="/cart">
                <CartScreen />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          </BrowserRouter>
        </UnContext.Provider>
      </>
    </div>
  );
}

export default App;
