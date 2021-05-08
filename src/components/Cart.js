import React, { useContext } from "react";
import "./Cart.css";
import { Context } from "./Context";
function Cart() {
  const {
    coins,
    money,
    price,
    setCoins,
    setMoney,
    setPrice,
    counter,
    setCounter,
    movies,
    books,
    kitchen,
    counterMoney,
    setCounterMoney,
    counterCoins,
    setCounterCoins,
    coining,
    pricing,
    moneying,
  } = useContext(Context);
  return (
    <div className="cart">
      <div className="cart_head_storing">
        <div className="cart_item_length">
          <h3>Items chosen: {counterCoins + counterMoney + counter}</h3>
          <h3>
            <div>
              Subtotal: $
              {coining * counterCoins +
                pricing * counter +
                moneying * counterMoney}
            </div>
            <div className="order">
              <input type="checkbox" name="" id="" />
              <span> This Order contains a gift</span>
            </div>
            <br />
            <button className="butto">Proceed to buy</button>
          </h3>
        </div>
      </div>
      <div className="cart_items">
        {counter ? (
          movies.map((movie) => (
            <div>
              <div className="product_cart">
                <div className=" border_cart">
                  <h2>{movie.name}</h2>
                  <img className="imagess" src={movie.img} alt="" />
                  <strong>
                    <p>Price : ${pricing * counter}</p>
                  </strong>
                  <div className="components">
                    <button
                      className="in"
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                      onChange={() => {
                        setCounter(true);
                      }}
                    >
                      +
                    </button>
                    <strong>
                      <p>{counter}</p>
                    </strong>
                    <button
                      className="in"
                      onClick={() => {
                        setCounter(counter - 1);
                      }}
                      onChange={() => {
                        setCounter(true);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button className="butto">Buy Now!</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1></h1>
        )}
        {counterMoney ? (
          kitchen.map((movie) => (
            <div>
              <div className="product_cart">
                <div className="border_cart">
                  <h2>{movie.name}</h2>
                  <img className="imagess" src={movie.img} alt="" />
                  <strong>
                    <p>
                      {" "}
                      <p>Price : ${moneying * counterMoney}</p>
                    </p>
                  </strong>
                  <div className="components">
                    <button
                      className="in"
                      onClick={() => {
                        setCounterMoney(counterMoney + 1);
                      }}
                      onChange={() => {
                        setMoney(true);
                      }}
                    >
                      +
                    </button>
                    <strong>
                      <p>{counterMoney}</p>
                    </strong>
                    <button
                      className="in"
                      onClick={() => {
                        setCounterMoney(counterMoney - 1);
                      }}
                      onChange={() => {
                        setMoney(true);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button className="butto">Buy Now!</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1></h1>
        )}
        {counterCoins ? (
          books.map((movie) => (
            <div>
              <div className="product_cart">
                <div className=" border_cart">
                  <h2>{movie.name}</h2>
                  <img className="imagess" src={movie.img} alt="" />
                  <strong>
                    <p>Price : ${coining * counterCoins}</p>
                  </strong>
                  <div className="components">
                    <button
                      className="in"
                      onClick={() => {
                        setCounterCoins(counterCoins + 1);
                      }}
                      onChange={() => {
                        setCoins(true);
                      }}
                    >
                      +
                    </button>
                    <strong>
                      <p>{counterCoins}</p>
                    </strong>
                    <button
                      className="in"
                      onClick={() => {
                        setCounterCoins(counterCoins - 1);
                      }}
                      onChange={() => {
                        setCoins(true);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button className="butto">Buy Now!</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
