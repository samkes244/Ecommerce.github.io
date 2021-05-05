import React from "react";
import "./Header.css";

function Header() {
  // const [state, setState] = useState(false);
  return (
    <div className="header">
      <header>
        <h1>VivKart</h1>
        <nav>
          <p>Sign In</p>
          <p>Sign Up</p>
        </nav>
      </header>
      <div className="container">
        <span className="menu"></span>
        <ul>
          <li>Best Sellers</li>
          <li>Mobile</li>
          <li>Appliances</li>
          <li>Kitchen</li>
          <li>Books</li>
          <li>Sell</li>
          <li>Computers</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
