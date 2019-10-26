import React from "react";
import "./Card.css";

function Card(props) {
   return (
      <div className="card col-md-3" onClick={() => props.setClicked(props.id)}>
         <div className="img-container">
            <img alt={props.name} src={props.image} />
         </div>
      </div>
   )
}

export default Card;