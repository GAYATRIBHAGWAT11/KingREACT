import React from "react";

const Child=(props)=>{    
    return(
        <>
        <h1>im child of {props.name} {props.age} {props.education}</h1>
        </>
    )
    }
    export default Child;