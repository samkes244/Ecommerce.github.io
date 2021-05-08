import React, { useContext } from "react";
import "./Productmobile.css";
import { Context } from "./Context";

function Productmobile() {
  const ratings = <p>Ratings: ⭐⭐⭐⭐⭐</p>;
  const { counterMoney, setCounterMoney } = useContext(Context);
  const { money, setMoney, moneying } = useContext(Context);

  return (
    <div className="product-mobile">
      <div className="content-holder">
        <img
          className="bigger"
          src="https://images-eu.ssl-images-amazon.com/images/I/41GhyDfO1RL._AC_SX184_.jpg"
          alt=""
        />
        <h2>
          SOFTSPUN Microfiber Cloth
          {ratings}
          <button
            className="purchase-btn"
            onClick={() => {
              setCounterMoney(counterMoney + 1);
            }}
            onChange={() => {
              setMoney(true);
            }}
          >
            Add To cart
          </button>
          <button className="purchase-btn">Buy Now</button>
        </h2>
      </div>
    </div>
  );
}

export default Productmobile;
