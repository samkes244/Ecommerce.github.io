import React from "react";
import "./Productmobile.css";

function Productmobile() {
  const purchase = (
    <div className="purchase">
      <button className="purchase-btn">Buy Now</button>
      <button className="purchase-btn">Add To cart</button>
    </div>
  );
  const ratings = <p>Ratings: ⭐⭐⭐⭐⭐</p>;
  return (
    <div className="product-mobile">
      <div className="content-holder">
        <img src="https://m.media-amazon.com/images/I/41atHSWSGaL.jpg" alt="" />
        <h2>
          Redmi Note 10 (Shadow Black, 4GB RAM, 64GB Storage)
          {ratings}
          {purchase}
        </h2>
      </div>
    </div>
  );
}

export default Productmobile;