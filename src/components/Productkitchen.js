import React, { useContext } from "react";
import "./Productmobile.css";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";

function Productmobile() {
  const { counterMoney, setCounterMoney } = useContext(Context);
  const { money, setMoney, moneying } = useContext(Context);

  return (
    <div className="product-mobile">
      <div className="content-holder">
        <div className="product_img">
          <img
            className="bigger"
            src="https://images-eu.ssl-images-amazon.com/images/I/41GhyDfO1RL._AC_SX184_.jpg"
            alt=""
          />
        </div>
        <div className="product_details">
          <h2>SOFTSPUN Microfiber Cloth</h2>
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
              setCounterMoney(counterMoney + 1);
            }}
            onChange={() => {
              setMoney(true);
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
