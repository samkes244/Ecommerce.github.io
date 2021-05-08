import React, { useContext } from "react";
import { Context } from "./Context";
import "./Product.css";
import { NavLink } from "react-router-dom";
const Mobile = () => {
  const { books } = useContext(Context);

  return (
    <div>
      {books.map((movie) => (
        <div className="product">
          <div className="border_books">
            <h2>{movie.name}</h2>
            <img className="images" src={movie.img} alt="" />
            <strong>
              <p>{movie.price}</p>
            </strong>
            <p>{movie.Rating}</p>
            <NavLink className="button" to="/Books-Details">
              See Items
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Mobile;
