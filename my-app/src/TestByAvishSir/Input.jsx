import React, { useState } from "react";

import ToInput from '/Users/admin/React/my-app/src/TestByAvishSir/ToInput.jsx'


const Input=()=>{
     const [data,setData]=useState([])

    const inputData=(input)=>{
        setData([...data,input])
    }
    return(
        <>
        <ToInput inputData={inputData}/>{
            data.map((text)=>{
                return <h1>{text}</h1>
            })
        } 
        </>
    )
}
export default Input;