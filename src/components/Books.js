import React, { useContext } from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";

const Books = () => {
  const { books } = useContext(Context);
  return (
    <div className="product">
      {books.map((movie) => (
        <div className="product_container">
          <div className="product_image">
            <img src={movie.img} alt="" />
          </div>
          {/* <div className="product_head">
            <h2 className="heading">{movie.name}</h2>
          </div> */}
          <div className="product_desc">
            <p>
              <strong>{movie.name}</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Explicabo
            </p>
          </div>
          <div className="product_ratings">
            <p>{movie.Rating}</p>
          </div>
          <div className="product_price">
            <strong>
              <p>{movie.price}</p>
            </strong>
          </div>
          <div className="product_btn">
            <button>
              <NavLink className="btn-product" to="/books-details">
                {" "}
                See Item
              </NavLink>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Books;
