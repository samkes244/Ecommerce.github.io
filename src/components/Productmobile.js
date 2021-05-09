import React, { useContext, useState } from "react";
import "./Productmobile.css";
import { Context } from "./Context";
import { NavLink } from "react-router-dom";
function Productmobile() {
  const { counter, pricing, setCounter, setPrice, price } = useContext(Context);
  return (
    <div className="product-mobile">
      <div className="content-holder">
        <div className="product_img">
          <img
            src="https://m.media-amazon.com/images/I/41atHSWSGaL.jpg"
            alt=""
          />
        </div>
        <div className="product_details">
          <h2>Redmi Note 10 (Shadow Black, 4GB RAM, 64GB Storage)</h2>
          <div className="product_details_des">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              saepe iure soluta rem natus veniam? Magnam, numquam libero.
              Maxime, illo.
            </p>
          </div>
          <p>Ratings: ⭐⭐⭐⭐⭐</p>

          <button
            className="purchase-btn"
            onClick={() => {
              setCounter(counter + 1);
            }}
            onChange={() => {
              setPrice(true);
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
