import React from "react";
import CartItem from "../CartItem/CartItem";
import "./cartlist.css";

function CartList( {cart} ) {
  return (
    <div className="cart-productos">
      <h2>Tu carrito</h2>
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          {...cartItem}
        />
      ))}
    </div>
  );
}

export default CartList;