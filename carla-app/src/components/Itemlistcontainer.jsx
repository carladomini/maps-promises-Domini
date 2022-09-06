import React, {useState, useEffect} from "react";

import ItemCount from "./ItemCount/itemCount";
import ItemList from "./ItemList/Item";

const productos = [
    {id: 1, image: "https://www.65ymas.com/uploads/s1/32/15/29/cuales-son-los-beneficios-de-la-ropa-interior-de-algodon.jpeg", title: "conjunto encaje"},
    {id: 2, image: "https://www.clicksport.com.ar/14721-thickbox_default/conjunto-deportivo-adidas-boca-juniors-futbol-hombre-.jpg", title: "conjunto deportivo"},
    {id: 3, image: "https://http2.mlstatic.com/D_NQ_NP_927203-MLA46225987950_052021-O.webp", title: "algodon"},

]

const Itemlistcontainer = (props) => {
    const [data, setData] = useState([]);

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
              resolve(productos);
            }, 1000);
        });
        getData.then(res => setData(res));
        
    }, [])

    const onAdd = (quantity) => {
      console.log (`Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList data={data}/>
        </div>
    )
}

export default Itemlistcontainer;