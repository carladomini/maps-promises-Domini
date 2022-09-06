import React from "react";
import logocarrito from "../components/images/carro.png"

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
           <a href="!#"><img src={logocarrito} alt="carro" width="50px" /></a>
           <span className="position-absolute badge rounded-pill bg-black">0</span>
        </button>
    )
}

export default CartWidget;