import React from "react";
import { StyledNavbar } from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar className="container">
      <div className="logo">EVOS</div>
      <ul>
        <li className="active">main</li>
        <li>branches</li>
        <li>vacancies</li>
        <li>news</li>
        <li>about us</li>
        <li>contacts</li>
      </ul>
      <div className="actions">
        <button className="qr"></button>
        <button className="basket">basket</button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
