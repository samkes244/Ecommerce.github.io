import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
const Mobile = () => {
  const movies = [
    {
      name: "Names of the women",
      img:
        "https://images-eu.ssl-images-amazon.com/images/I/41Cj46ypfCL._AC_SX184_.jpg",
      price: "$8",
      Rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <div>
      {movies.map((movie) => (
        <div className="flexy">
          <div className="border">
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
          <div className="border">
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
          <div className="border">
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
