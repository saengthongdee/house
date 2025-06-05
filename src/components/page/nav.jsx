import React from "react";
import "../style/nav.css";

function nav() {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src="/image/logo.webp" alt="" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">product</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default nav;
