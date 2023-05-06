import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavItem from "../NavItem/NavItem";
import { cartContext } from "../../Context/cartContext";
import "./navbar.css";

function NavBar() {
  const { getCantItems } = useContext(cartContext);

  return (
    <nav className="nav-header">
      <a href="/" id="LOGO">
        <h2 className="pageName">Todo</h2>
        <h3 className="namePage">Pesca</h3>
      </a>

      <ul className="nav-menu">
        <NavItem nombre="Cañas baitcast" categoria="/category/baitcast" />
        <NavItem nombre="Cañas costa" categoria="/category/costa" />
        <NavItem nombre="Reel rotativo" categoria="/category/rotativo" />
        <NavItem nombre="Reel frontal" categoria="/category/frontal" />
        <NavItem nombre="Reel Huevito" categoria="/category/huevito" />
        <NavItem nombre="OFERTAS" categoria="/category/oferta" />

        {getCantItems() !== 0 && <CartWidget />}
      </ul>
    </nav>
  );
}

export default NavBar;
