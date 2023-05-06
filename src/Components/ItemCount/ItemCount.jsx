import {React, useState} from 'react';
import ButtonDetalle from "../ButtonDetalle/ButtonDetalle";
import './itemcount.css';

function ItemCount( {stockDisponible, onAddToCart} ) {
  const [cant, setCant] = useState(1);

  function sumar() {
    if (cant < Number(`${stockDisponible}`)) {
      setCant(cant + 1);
    }
  }

  function restar() {
    if (cant > 1) {
      setCant(cant - 1);
    }
  }

  return (
    <div className="itemCount-container">
      <p>Agregar cantidad de productos al carrito</p>

      <div className="container">
        <button onClick={restar} className="btnRestar">
          -
        </button>
        <span className="numero"> {cant} </span>
        <button onClick={sumar} className="btnSumar">
          +
        </button>
      </div>

      <ButtonDetalle onClick={() => onAddToCart(cant)} nombre="Agregar al Carrito"></ButtonDetalle>
    </div>    
  );
}

export default ItemCount;