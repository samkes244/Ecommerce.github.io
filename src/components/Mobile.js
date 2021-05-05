import React from "react";
import "./Product.css";

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
      {movies ? (
        movies.map((movie) => (
          <div className="product">
            <div>
              <div className="border">
                <h2>{movie.name}</h2>
                <img className="images" src={movie.img} alt="" />
                <strong>
                  <p>{movie.price}</p>
                </strong>
                <p>{movie.Rating}</p>
                <button>See Items</button>
              </div>
            </div>
            <div>
              <div className="border">
                <h2>{movie.name}</h2>
                <img className="images" src={movie.img} alt="" />
                <strong>
                  <p>{movie.price}</p>
                </strong>
                <p>{movie.Rating}</p>
                <button>See Items</button>
              </div>
            </div>
            <div>
              <div className="border">
                <h2>{movie.name}</h2>
                <img className="images" src={movie.img} alt="" />
                <strong>
                  <p>{movie.price}</p>
                </strong>
                <p>{movie.Rating}</p>
                <button>See Items</button>
              </div>
            </div>
            <div>
              <div className="border">
                <h2>{movie.name}</h2>
                <img className="images" src={movie.img} alt="" />
                <strong>
                  <p>{movie.price}</p>
                </strong>
                <p>{movie.Rating}</p>
                <button>See Items</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
export default Mobile;
