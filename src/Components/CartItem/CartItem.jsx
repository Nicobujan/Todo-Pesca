import React, { useContext } from 'react';
import { cartContext } from "../../Context/cartContext";
import "./cartitem.css";

function CartItem({ id, titulo, imagen, precio, cantidad }) {

  const { removeItem } = useContext(cartContext);

  return (
    <div className="cart-item">
      <img src={imagen} alt={titulo}></img>
      <div>
        <small>Titulo</small>
        <p className="cart-item__titulo" >{titulo}</p>
      </div>
      <div>
        <small>Precio</small>
        <p className="cart-item__precio">${precio}</p>
      </div>
      <div>
        <small>Cantidad</small>
        <p className="cart-item__cantidad">{cantidad}</p>
      </div>
      <div>
        <small>Total</small>
        <p className="cart-item__precio">${cantidad * precio}</p>
      </div>
      <button className="cart-item__borrar" onClick={() => removeItem(id)}>X</button>
    </div>
  );
}

export default CartItem;