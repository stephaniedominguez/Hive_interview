import React from "react";
import "./DropdownElementmultiple.css"

const DropdownElementMultiple = (props) =>{
   const onTrigger= (event) => {
        props.selectorMultiple(props.name)
    }
    return <div>
       <div className="element_selected" onClick={onTrigger}>
        <label> {props.name}</label><br></br>
       </div>
    </div>
}
export default DropdownElementMultiple;