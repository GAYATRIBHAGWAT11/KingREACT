import React, { useMemo, useState } from "react";

function MemoCounter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne((prev) => prev + 1)
    }
    const incrementTwo = () => {
        setCounterTwo((prev) => prev + 1)
    }
    const isEven=useMemo(()=>{
        let i=0;
        while(i<30) i++;
        return counterOne%2==0
    },[counterOne])
       
    
    return (
        <>

            <div>
                <button onClick={incrementOne}>counterTwo-{counterOne}</button>
                -{isEven()?'even':'odd'}
            </div>
            <div>
                <button onClick={incrementTwo}>counter Two- {counterTwo}</button>
            </div>

        </>
    )
}
export default MemoCounter;