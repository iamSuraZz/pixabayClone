import React from "react";
import { menuItems } from "./data";
import "./styles.css";

const Menu = ({ handleMenuItemClicked }) => (
  <nav>
    <ul>
      {menuItems.map(({ label, id }) => (
        <li key={id} id={label} onClick={handleMenuItemClicked}>
          {label}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
