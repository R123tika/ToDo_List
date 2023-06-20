import React from "react";

function List(prop){
    return(
        <li>
        <button onClick={()=>{

        prop.change(prop.id)

        }}>-</button>
        <pre> {prop.value}</pre></li>
    )
}
export default List;