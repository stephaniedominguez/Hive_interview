import React from "react";
import "./DropdownElementSingle.css"

const DropdownElementSingle = (props) =>{
    const onTrigger= (event) => {
        props.selectorSingle(props.name)
    }
    return <div  className="element_selected">
        <div onClick={onTrigger}> {props.name}</div><br></br>
    </div>
}
export default DropdownElementSingle;