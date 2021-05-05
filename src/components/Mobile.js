import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
const Mobile = () => {
  const movies = [
    {
      name: "Redmi Note 10",
      img: "https://m.media-amazon.com/images/I/41atHSWSGaL.jpg",
      price: "$160",
      Rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div>
      {movies.map((movie) => (
        <div>
          <div className="product">
            <div className="border">
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
            <div className="border">
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
            <div className="border">
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
