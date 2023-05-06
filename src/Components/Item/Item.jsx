import React from "react";
import "./item.css";
import ButtonDetalle from "../ButtonDetalle/ButtonDetalle";
import { Link } from "react-router-dom";

function Item({ id, titulo, imagen, stock, precio }) {
    const urlDetail = `/item/${id}`;
  
    return (
      <div className="producto">
          <img src={imagen} alt={titulo}></img>
          <div className="producto-descripcion">
              <p><b>{titulo}</b></p>
              <p><small>Precio: </small>${precio}</p>
              <p><small>Stock: </small>{stock}</p>
              <Link to={urlDetail}>
                  <ButtonDetalle nombre="Ver Detalle"></ButtonDetalle>
              </Link>
          </div>
      </div>
    );
  }
  
  export default Item;