import React, { useContext,useState } from "react";
import "./Productmobile.css";
import { Context } from "./Context";

function Productmobile() {
  const { counter, pricing,setCounter,setPrice,price } = useContext(Context);
  const ratings = <p>Ratings: ⭐⭐⭐⭐⭐</p>;
  return (
    <div className="product-mobile">
      <div className="content-holder">
        <img src="https://m.media-amazon.com/images/I/41atHSWSGaL.jpg" alt="" />
        <h2>
          Redmi Note 10 (Shadow Black, 4GB RAM, 64GB Storage)
          {ratings}
          <button
            className="purchase-btn"
            onClick={() => {
              setCounter(counter +1); }}
              
           onChange={() => {
               setPrice(true) ;
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
