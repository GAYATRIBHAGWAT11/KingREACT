// it lets us perform side effects perform
// side effect=>any work that we have to do outside of the current function
// no there are: data fetch, subscription netflix bases, manually dom change 

// jab bhi hum yuse effect ko first time load krte hai woh bhi call ho jata hai
// useEffect rrerender our component

import React, {useState,useEffect } from "react";

const UseEffects1=()=>{
    const [count,setCount]=useState(0)
    console.log(count);
    useEffect(()=>{
        // console.log('hey useEffect');
        document.title=`chats(${count})`
    })
    console.log('out side of useEffect');
    // it will print first then  console.log('hey useEffect');

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>click</button>
        </>
    )
}
export default UseEffects1;