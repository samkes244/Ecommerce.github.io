import React, {useState} from "react"
import Mobile from "./Mobile"

const Itemprovider =()=>{
  const [movies, setMovies] = useState([
    {
      name: "Redmi Note 10",
      img: "https://m.media-amazon.com/images/I/41atHSWSGaL.jpg",
      price: "$160",
      Rating: "⭐⭐⭐⭐⭐",
    },
  ])
  return(
    <div>
    {/* <Mobile {...movies} /> */}
    </div>
  )
}
export default Itemprovider;
