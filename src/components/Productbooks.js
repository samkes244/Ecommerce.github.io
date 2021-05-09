import React, { useContext } from "react";
import "./Productmobile.css";
import { Context } from "./Context";
import { NavLink } from "react-router-dom";
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
        <div className="product_img">
          <img
            className="bigger"
            src="https://images-eu.ssl-images-amazon.com/images/I/41Cj46ypfCL._AC_SX184_.jpg"
            alt=""
          />
        </div>
        <div className="product_details">
          <h2>Names Of The Women</h2>
          <div className="product_details_des">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              saepe iure soluta rem natus veniam? Magnam, numquam libero.
              Maxime, illo.
            </p>
          </div>
          <p>Ratings: ⭐⭐⭐⭐</p>
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
          <button className="purchase-btn">
            <NavLink className="product_info" to="/mobile-content">
              Know more
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productmobile;
