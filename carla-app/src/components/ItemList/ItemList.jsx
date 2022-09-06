import React from "react";
import Item from "..ItemList/Item";

const ItemList = () => {
   return(
    data.map(productos => <Item key={productos.id} info={productos} />)
   );
}

export default ItemList;