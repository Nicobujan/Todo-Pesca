import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";

function ItemList( {productos} ) {
  return (
    <div className="main-productos">
      {productos.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default ItemList;