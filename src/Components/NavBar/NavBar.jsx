import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";

import NavItem from "../NavItem/NavItem";
import { cartContext } from "../../Context/cartContext";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const { getCantItems } = useContext(cartContext);

  return (
    <nav className="nav-header">
      <Link to="/" id="LOGO">
        <h2 className="pageName">Todo</h2>
        <h3 className="namePage">Pesca</h3>
      </Link>

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
