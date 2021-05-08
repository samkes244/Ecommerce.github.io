import React, { useContext } from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";

const Mobile = () => {
  const { movies } = useContext(Context);
  return (
    <div className="proup">
      {movies.map((movie) => (
        <div>
          <div className="product">
            <div className="border_mobile">
              <h2>{movie.name}</h2>
              <img className="images" src={movie.img} alt="" />
              <strong>
                <p>{movie.price}</p>
              </strong>
              <p>{movie.Rating}</p>
              <NavLink className="button" to="/Mobile-Details">
                See Items
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Mobile;
