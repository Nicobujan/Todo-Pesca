import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../Datos/firebase"; 
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../Context/cartContext";
import "./itemdetailcontainer.css";
import Loader from "../Loader/Loader";
import ButtonDetalle from "../ButtonDetalle/ButtonDetalle";

import { Link } from 'react-router-dom';

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let {itemid} = useParams();

  const { cart, addItem, getItem } = useContext(cartContext);

  const itemCart = getItem(producto.id);

  function handleAddToCart(count) {
    addItem(producto, count);
  }

  useEffect(() => {
    getSingleItem(itemid)
      .then((response) => {
        setProducto(response);
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      })
      .finally(()=>{
        setIsLoading(false);
      });
  }, [itemid]);

  return (
    <>
      {
        isLoading ?
          <div className="loader-container">
            <Loader />
          </div>
        :
          <div className="card-detail_main">

            <div className="card-detail_img">
              <img src={producto.imagen} alt={producto.titulo}></img>
            </div>

            <div className="card-right">
              <div className="card-detail_detail">
                <h1>{producto.titulo}</h1>
                <h2 className="priceTag">$ {producto.precio}</h2>
                <h3>Stock disponible: {producto.stock}</h3>
                <small>{producto.detalle}</small>
              </div>

              { /* Retorna true si hay un item en el carrito con el id del producto
                Si el item esta en el carrito y ya no hay mas stock para agregar, se deja de mostrar el itemCount */
                ((cart.some((item) => item.id === producto.id)) && itemCart.cantidad === producto.stock) ?
                  <Link to="/cart">
                    <ButtonDetalle nombre="Ir al carrito"></ButtonDetalle>
                  </Link>
                :
                  <ItemCount onAddToCart={handleAddToCart} stockDisponible={producto.stock} />
              }
            </div>

          </div>
      }
    </>
  );
}

export default ItemDetailContainer