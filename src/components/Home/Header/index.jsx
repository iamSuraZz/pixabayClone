import React from "react";
import logo from "../../../logo.png";
import "./styles.css";

const Header = ({
  handleFormSubmit,
  handleInputChange,
  handleHomeClick,
  searchInputValue,
}) => (
  <header>
    <div className="header-logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="header-rights">
      <p>
        7e Edition <br /> surajdev9886@gmail.com
      </p>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div className="header-search">
        <input
          value={searchInputValue}
          type="text"
          required
          onChange={handleInputChange}
        />
        <button className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
    <div className="header-home">
      <i className="fa-solid fa-house" onClick={handleHomeClick}></i>
    </div>
  </header>
);

export default Header;
