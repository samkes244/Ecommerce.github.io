import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  // const [state, setState] = useState(false);
  return (
    <div className="header">
      <header>
        <NavLink to="/" className="a">
          <h1>VivKart</h1>
        </NavLink>
        <nav>
          <p>Sign In</p>
          <p>Sign Up</p>
        </nav>
      </header>
      <div className="container">
        <span className="menu"></span>
        <ul>
          <NavLink className="a" to="/">
            <li>Best Sellers</li>
          </NavLink>
          <NavLink className="a" to="/Mobile">
            <li>Mobile</li>
          </NavLink>
          <NavLink className="a" to="/Kitchen">
            <li>Kitchen</li>
          </NavLink>
          <NavLink className="a" to="/Books">
            <li>Books</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
