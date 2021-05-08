import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Context } from "./Context";

function Header() {
  const { counter, counterMoney, counterCoins } = useContext(Context);

  return (
    <div className="header">
      <header>
        <NavLink to="/" className="a">
          <h1 className="logo">VivKart</h1>
        </NavLink>
        <nav>
          <NavLink className="aa" to="/cart">
            <strong>
              <p>
                Cart
                <span className="cart_circle">
                  {counter + counterMoney + counterCoins}
                </span>
              </p>
            </strong>
          </NavLink>
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
