import React, { useContext } from 'react';
import CartList from '../CartList/CartList';
import { cartContext } from '../../Context/cartContext';
import "./cartcontainer.css";
import ButtonDetalle from "../ButtonDetalle/ButtonDetalle";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../../Datos/firebase';
import CartForm from '../CartForm/CartForm';

function CartContainer() {
  const { cart, getCantItems, getTotalPriceInCart, clearCart } = useContext(cartContext);
  const navigateTo = useNavigate();

  async function handleCheckOut(userData) {
    const newCart = cart.map ((item) => ({id: item.id, titulo: item.titulo, precio: item.precio, cantidad: item.cantidad, }));

    const order = {
      buyer: userData,
      items: newCart,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    let id = await createOrder(order);

    Swal.fire({
      text: "Compra realizada",
      icon: 'success',
      background: '#66A5AD',
      color: '#27292b',
      iconColor: 'green',
      confirmButtonColor: '#27292b',
    })

    navigateTo(`/orders/${id}`);

    clearCart();
  }

  return (
    <>
      {
        (getCantItems() !== 0) ? 
          <div className='cartContainer'>
            <CartList cart={cart} />
            <div className="cartContainer-acciones">
              <p>El total de tu compra es de ${getTotalPriceInCart()}</p>
              <CartForm onSubmit={handleCheckOut}/>
              <div className="cartContainer-acciones__btn">
                <ButtonDetalle nombre="Vaciar carrito" onClick={clearCart} />
              </div>
            </div>
          </div>
        :
          <div className='cartContainer'>
            <h2>No hay items en el carrito.</h2>
            <h3>¡Vuelva al menú para continuar!</h3>
            <Link to="/">
              <ButtonDetalle nombre="Volver al menu" />
            </Link>
          </div>
      }
    </>
  )
}

export default CartContainer;