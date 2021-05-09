import React from "react";
import "./Product.css";
import Mobile from "./Mobile";
import Books from "./Books";
import Kitchen from "./Kitchen";

function Product() {
  return (
    <div className="product_component_container">
      <Mobile />
      <Kitchen />
      <Books />
      <Mobile />
      <Kitchen />
      <Books />
    </div>
  );
}

export default Product;
