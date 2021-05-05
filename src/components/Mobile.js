import React from "react";
import "./Product.css";

const Mobile = () => {
  const movies =[
     { name: "Redmi Note 10",
      img: "https://m.media-amazon.com/images/I/41atHSWSGaL.jpg",
      price: "$160",
      Rating: "⭐⭐⭐⭐⭐",
    },
    
  ]
  
  return (
    <div>
   { movies ? <h2>{movies.map((movie=>{
    return(
    <h2>{movie.name}</h2>
    )

    }))}
    </h2>: <h2>loading</h2> }
    </div>
  );
};
export default Mobile;
