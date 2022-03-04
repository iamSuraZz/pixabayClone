import React from "react";
import { menuItems } from "./data";
import "./styles.css";

const Menu = () => (
  <nav>
    <ul>
      {menuItems.map(({ label, id }) => (
        <li key={id}>{label}</li>
      ))}
    </ul>
  </nav>
);

export default Menu;
