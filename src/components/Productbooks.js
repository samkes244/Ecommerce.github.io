import React, { useContext } from "react";
import "./Productmobile.css";
import { Context } from "./Context";

function Productmobile() {
  const {
    counterCoins,
    setCounterCoins,
    coining,
    setCoins,
    coins,
  } = useContext(Context);
  const ratings = <p>Ratings: ⭐⭐⭐⭐⭐</p>;
  return (
    <div className="product-mobile">
      <div className="content-holder">
        <img
          className="bigger"
          src="https://images-eu.ssl-images-amazon.com/images/I/41Cj46ypfCL._AC_SX184_.jpg"
          alt=""
        />
        <h2>
          Names Of The Women
          {ratings}
          <button
            className="purchase-btn"
            onClick={() => {
              setCounterCoins(counterCoins + 1);
            }}
            onChange={() => {
              setCoins(true);
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
