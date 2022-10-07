import { useState } from "react";

const Child=(props)=>{
    const [childData,setChildData]=useState('hello from child')

    return(
        <>
        {/* <h1>{props.ParentData}</h1> */}
        <button onClick={()=>{
            props.GetDataFromChild(childData)
        }}>send data to parent</button>
        </>
    )
}
export default Child;