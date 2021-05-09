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
      {/* This is for mobile */}
      <div className="cart_head_storing">
        <div className="cart_item_length">
          <h3>Items chosen: {counterCoins + counterMoney + counter}</h3>
          <div>
            <h3>
              Subtotal: $
              {coining * counterCoins +
                pricing * counter +
                moneying * counterMoney}
            </h3>
          </div>
          <div className="order">
            <input type="checkbox" name="" id="" />
            <span>
              <h3> This Order contains a gift</h3>
            </span>
          </div>
          <br />
          <button className="cart_button">Proceed to buy</button>
        </div>
      </div>
      <div className="cart_items">
        {counter ? (
          movies.map((movie) => (
            <div>
              <div className="product_cart">
                <div className=" border_cart">
                  <img className="imagess" src={movie.img} alt="" />
                  <h2>{movie.name}</h2>
                  <strong>
                    <p>Price : ${pricing * counter}</p>
                  </strong>
                  <div className="cart_in_button_container">
                    <button
                      className="cart_in_button"
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
                      <p className="cart_in_counter">{counter}</p>
                    </strong>
                    <button
                      className="cart_in_button"
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
                  <button className="cart_buy_button">Buy Now!</button>
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
                  <img className="imagess" src={movie.img} alt="" />
                  <h2>{movie.name}</h2>
                  <strong>
                    <p>Price : ${moneying * counterMoney}</p>
                  </strong>
                  <div className="cart_in_button_container">
                    <button
                      className="cart_in_button"
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
                      <p className="cart_in_counter">{counterMoney}</p>
                    </strong>
                    <button
                      className="cart_in_button"
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
                  <button className="cart_buy_button">Buy Now!</button>
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
                  <img className="imagess" src={movie.img} alt="" />
                  <h2>{movie.name}</h2>
                  <strong>
                    <p>Price : ${coining * counterCoins}</p>
                  </strong>
                  <div className="cart_in_button_container">
                    <button
                      className="cart_in_button"
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
                      <p className="cart_in_counter">{counterCoins}</p>
                    </strong>
                    <button
                      className="cart_in_button"
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
                  <button className="cart_buy_button">Buy Now!</button>
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
