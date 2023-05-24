import React from "react";
import clasess from "./Card.module.css";    // 1. Import the CSS module styles by adding this line of code.

const Card = (props) => {
    return(
        <div className={`${clasess.card} ${props.className}`}>{props.children}</div>
    )
};
export default Card;
