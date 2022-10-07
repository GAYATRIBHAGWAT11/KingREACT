import React, { useState } from "react";
import '/Users/admin/React/my-app/src/TestByAvishSir/Main.css'
import Input from '/Users/admin/React/my-app/src/TestByAvishSir/Input.jsx'


const Counter=()=>{
    const [myCounter,setmyCounter]=useState(0);
 
    const increment=()=>{
        setmyCounter((prev)=>prev+1)
    }
    const decrement=()=>{
        setmyCounter((prev)=>prev-1)
    }
    const reset=()=>{
        setmyCounter(0)
    }




        return(
        <>
        <h1 className={myCounter>0?'green':'red'}>{myCounter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <Input/>
        </>
    )
}
export default Counter;