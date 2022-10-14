import React, { useState } from "react";
import '/Users/admin/React/my-app/src/ImPracticingREACT/CounterUseState.jsx'


const CounterUseState=()=>{
    const [count,setCount]=useState(0)
    const [disable,setDisable]=useState(true)

    // const increment=()=>{
    //     setCount((prev)=>prev+1)
    // }

    // const decrement=()=>{
    //     setCount((prev)=>prev-1)
    // }

    // const reset=()=>{
    //     setCount(0)
    // }

    const CounterHandler=(pressedVal)=>{
        if(pressedVal==='inc'){
            if(count>0){
                setCount(20)
                setDisable(false)
            }
        }
    }







    return(
        <>
        <h1 className={count>0? 'green':'red'}>count- {count}</h1>
        <button onClick={CounterHandler}>inc</button>
        <button >reset</button>
        </>
    )
}
export default CounterUseState;