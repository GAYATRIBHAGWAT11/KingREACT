import React, { useState } from "react";

const ToInput=({inputData})=>{
    const [textData,setTextData]=useState([])
    return(
        <>
        <div>
            <input onChange={(e)=>{
                setTextData(e.target.value)
            }} type="text" placeholder="enter name of the film" />
            <input onChange={(e)=>{
                setTextData(e.target.value)
            }} type="text" placeholder="enter rating" />
            <input onChange={(e)=>{
                setTextData(e.target.value)
            }} type="text" placeholder="movie link"/>
            <button onClick={()=>{
                inputData(textData)
            }}>Add me</button>
        </div>

        </>
    )
}
export default ToInput;