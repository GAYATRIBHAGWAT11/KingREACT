import React, { useState } from 'react';
import {UseCounter} from '/Users/admin/React/my-app/src/CustomHooks/UseCounter.jsx'



function CounterOne() {
     const [count,increment,decrement,reset] = UseCounter(0);
    return (
        <>
            <h1>Count- {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </>
    )
}
export default CounterOne;
