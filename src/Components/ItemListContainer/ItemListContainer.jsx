import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCategory } from "../../Datos/firebase";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import Notification from "../Notification/Notification";
import './itemlistcontainer.css';

function ItemListContainer () {

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [notification, setNotification] = useState({
    type: "default",
    text: "Cargando datos",
  });
  
  let {categoryid} = useParams();

  useEffect(() => {
    if (categoryid) {
      getItemsByCategory(categoryid).then((response) => {
        setProductos(response);
        setIsLoading(false);
      });
    } else {
      getItems()
      .then((response) => {
        setProductos(response);
        setNotification({
          type: "success",
          text: `Se cargaron ${response.length} productos correctamente`,
        });
      })
      .catch((error) => {
        setNotification({
          type: "error",
          text: `Error cargando los productos: ${error}`,
        });
      })
      .finally(()=>{
        setIsLoading(false);
      });
    }
  }, [categoryid]);
  
  return (
    <>
      {notification.type && <Notification notification={notification} />}

      {
        isLoading ?
          <div className="loader-container">
            <Loader />
          </div>
        :
          <ItemList productos={productos} />
      }
    </>
  );
}

export default ItemListContainer;
