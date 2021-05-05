import React from "react";
import Sidebar from "./Sidebar";
import "./Sidetest.css";

function Sidetest() {
  return (
    <div>
      <div id="App">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap">
          <h1>Cool Restaurant 🍔🍕</h1>
          <h2>Check out our offerings in the sidebar!</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidetest;
