import React from "react";


function Radio(props) {
  return(
     <div className="radio">
         <input type="checkbox"></input>
         <label>{props.name}</label>
     </div>
  )
}
export default Radio;