import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Productmobile from "./components/Productmobile";
import Productbooks from "./components/Productbooks";
import Productkitchen from "./components/Productkitchen";
import Kitchen from "./components/Kitchen";
import Books from "./components/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import { Context } from "./components/Context";
import Cart from "./components/Cart";
function App() {
  const movies = [
    {
      name: "Redmi Note 10",
      img: "https://m.media-amazon.com/images/I/41atHSWSGaL.jpg",
      price: "$160",
      Rating: "⭐⭐⭐⭐⭐",
    },
  ];
  const kitchen = [
    {
      name: "SOFTSPUN Microfiber Cloth",
      img:
        "https://images-eu.ssl-images-amazon.com/images/I/41GhyDfO1RL._AC_SX184_.jpg",
      price: "$6",
      Rating: "⭐⭐⭐⭐",
    },
  ];
  const books = [
    {
      name: "Names of the women",
      img:
        "https://images-eu.ssl-images-amazon.com/images/I/41Cj46ypfCL._AC_SX184_.jpg",
      price: "$8",
      Rating: "⭐⭐⭐⭐",
    },
  ];
  const [counter, setCounter] = useState(0);
  const [counterCoins, setCounterCoins] = useState(0);
  const [counterMoney, setCounterMoney] = useState(0);
  const [price, setPrice] = useState(false);
  const [money, setMoney] = useState(false);
  const [coins, setCoins] = useState(false);
  const [name, setName] = useState(false);
  const updateName = (event) => {
    setName(event.target.value);
  };
  let pricing;
  let moneying;
  let coining;
  if (setPrice) {
    pricing = 160;
  } else {
  }
  if (setMoney) {
    moneying = 6;
  } else {
  }
  if (setCoins) {
    coining = 8;
  } else {
  }
  return (
    <div className="App">
      <Context.Provider
        value={{
          setCoins,
          coins,
          money,
          setMoney,
          price,
          setPrice,
          counter,
          setCounter,
          movies,
          kitchen,
          books,
          counterMoney,
          setCounterMoney,
          counterCoins,
          setCounterCoins,
          pricing,
          moneying,
          coining,
        }}
      >
        <Router>
          <Switch>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/Books-Details">
              <Header />
              <Productbooks />
            </Route>
            <Route path="/Kitchen-Details">
              <Header />
              <Productkitchen />
            </Route>
            <Route path="/Mobile-Details">
              <Header />
              <Productmobile />
            </Route>
            <Route path="/Mobile">
              <Header />
              <Mobile />
            </Route>
            <Route path="/Books">
              <Header />
              <Books />
            </Route>
            <Route path="/Kitchen">
              <Header />
              <Kitchen />
            </Route>
            <Route path="/">
              <Header />
              <Product />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
