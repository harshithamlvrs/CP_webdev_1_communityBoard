import React from "react";

const Card = (props) => {
    return (
        <td className = {'Card ' + props.color}> 
            <h5> {props.name} </h5>
            <h6> {props.field} </h6>
        </td>
    )
}
export default Card;