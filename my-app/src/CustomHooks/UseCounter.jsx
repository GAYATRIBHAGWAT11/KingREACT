import React, {createContext, useState} from 'react'

// import React from 'react'

function UseCounter(initialstate=0) {
    const [count,setCount]=useState(initialstate)
    const increment = () => {
        setCount((prev) => prev + 1)
    }
    const decrement = () => {
        setCount((prev) => prev - 1)
    }
    const reset = () => {
        setCount(initialstate)
    }
  return [count,increment,decrement,reset]
}
export default UseCounter;
