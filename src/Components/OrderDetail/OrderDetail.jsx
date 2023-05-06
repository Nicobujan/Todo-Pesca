import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonDetalle from '../ButtonDetalle/ButtonDetalle';
import { Link } from 'react-router-dom';
import "./orderdetail.css";

function OrderDetail() {
    
    const { orderid } = useParams();

    return (
        <div className="orderDetailContainer">
            <h2>¡Muchas gracias por tu compra!</h2>
            <p>El ID de compra es: <span className="order-id">{orderid}</span></p>
            <Link to="/">
              <ButtonDetalle nombre="Volver al menu" />
            </Link>
        </div>
    );
}

export default OrderDetail;
