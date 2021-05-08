import React, { useContext } from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";
const Mobile = () => {
  const { kitchen } = useContext(Context);

  return (
    <div>
      {kitchen.map((movie) => (
        <div className="product">
          <div className="border_kitchen">
            <h2>{movie.name}</h2>
            <img className="images" src={movie.img} alt="" />
            <strong>
              <p>{movie.price}</p>
            </strong>
            <p>{movie.Rating}</p>
            <NavLink className="button" to="/Kitchen-Details">
              See Items
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Mobile;
