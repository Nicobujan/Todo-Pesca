import React from 'react';
import "./buttondetalle.css";

function ButtonDetalle( {nombre, onClick} ) {
  return (
    <button onClick={onClick} className="producto-agregar">{nombre}</button>
  )
}

export default ButtonDetalle;