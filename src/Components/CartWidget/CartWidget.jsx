import React,{useContext}  from "react";
import {cartContext} from "../../Context/cartContext";
import './cartwidget.css';
import { Link } from "react-router-dom";

function CartWidget () {

    const { getCantItems, getTotalPriceInCart } = useContext(cartContext);

    return (
    <Link className="cartWidget-container" to="/cart">
        <div className="cartWidget-cart">
            <i className="carrito-icon bi bi-cart-fill"></i>
            <p className="carrito-cant">{ getCantItems() }</p>
        </div>
        <p className="carrito-total">${ getTotalPriceInCart() }</p>
    </Link>
    );
}

export default CartWidget;