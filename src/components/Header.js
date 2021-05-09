import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Context } from "./Context";

function Header() {
  const { counter, counterMoney, counterCoins, login, setLogin } = useContext(
    Context
  );
  const [open, setopen] = useState(false);
  let menu;
  if (open) {
    menu = (
      <div className="login">
        <div className="login_border">
          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="enter your name"
            minLength="4"
            maxLength="10"
          />
          <button
            onClick={() => {
              setopen(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  } else {
  }
  return (
    <div className="header">
      <div className="headers">
        <NavLink to="/" className="header_logo_links">
          <h1 className="header_logo">VivKart</h1>
        </NavLink>
        <input type="search" className="header_search" />
        <button className="header_search_btn">Search</button>
        <div className="header_user">
          <h3 className="header_greetings">Hey,</h3>
          <div>
            <h3 className="header_name">
              {setLogin == "" ? <div>name</div> : <div>{login}</div>}
            </h3>
          </div>
        </div>
        <div className="header_user">
          <h3 className="header_login">
            {open ? (
              <button
                onClick={() => {
                  setopen(false);
                }}
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  setopen(true);
                }}
              >
                Logout
              </button>
            )}
          </h3>
        </div>
        <div className="header_cart_links">
          <NavLink className="header_cart_links header_links" to="/cart">
            <strong>
              <p>
                <ShoppingCartIcon className="header_cart_icon"></ShoppingCartIcon>
                <span className="cart_circle">
                  {counter + counterMoney + counterCoins}
                </span>
              </p>
            </strong>
          </NavLink>
        </div>
      </div>
      <div className="header_container">
        <span className="menu"></span>
        <ul className="unorder">
          <NavLink className="header_links" to="/">
            <li>Best Sellers</li>
          </NavLink>
          <NavLink className="header_links" to="/Mobile">
            <li>Mobile</li>
          </NavLink>
          <NavLink className="header_links" to="/Kitchen">
            <li>Kitchen</li>
          </NavLink>
          <NavLink className="header_links" to="/Books">
            <li>Books</li>
          </NavLink>
        </ul>
      </div>
      {menu}
    </div>
  );
}

export default Header;
