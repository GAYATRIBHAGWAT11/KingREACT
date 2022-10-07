import React, { useState } from "react";

const ArrayuseState=()=>{
    const bioData=[
        {
            id:0,maName:'gayatri',age:22
        },
        {
            id:1,maName:'asihwarya',age:21 
        },
        {
            id:3,maName:'ekta',age:20 
        }

    ]
    // console.log(bioData);
    const [myArray,setmyArray]=useState(bioData)
    const clearArray=()=>{
        setmyArray([])
    }
    return(
        <>
        {/* <h1></h1> */}
        {
            myArray.map((curElm)=>{
                console.log(curElm);
                return <h1 key={curElm.id}>name:{curElm.maName} & age {curElm.age}</h1>
            })
        }
        <button onClick={clearArray}>clear</button>
        </>
    )

}
export default ArrayuseState;