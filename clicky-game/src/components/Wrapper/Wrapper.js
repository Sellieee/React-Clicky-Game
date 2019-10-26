import React from "react";
import "./Wrapper.js";

function Wrapper(props) {
   return <div className="wrapper">{props.children}</div>
}

export default Wrapper;