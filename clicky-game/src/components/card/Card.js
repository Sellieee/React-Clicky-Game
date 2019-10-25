import React from "react";
import "./Card.css";

function Card(props) {
   return (
      <div onClick={() => props.setclicked(props.id)} className="card col-md-3">
         <div className="img-container">
            <img alt={props.name} src={props.image} />
         </div>
      </div>
   )
}

export default Card;