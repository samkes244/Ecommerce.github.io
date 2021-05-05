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
        <img
          className="bigger"
          src="https://images-eu.ssl-images-amazon.com/images/I/41Cj46ypfCL._AC_SX184_.jpg"
          alt=""
        />
        <h2>
          Names Of The Women
          {ratings}
          {purchase}
        </h2>
      </div>
    </div>
  );
}

export default Productmobile;
