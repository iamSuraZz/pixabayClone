import React from "react";
import logo from "../../../logo.png";
import "./styles.css";

const Header = () => (
  <header>
    <div className="header-logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="header-rights">
      <p>
        7e Edition <br /> surajdev9886@gmail.com
      </p>
    </div>
    <form>
      <div className="header-search">
        <input type="text" required />
        <button className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
    <div className="header-home">
      <i className="fa-solid fa-house"></i>
    </div>
  </header>
);

export default Header;
