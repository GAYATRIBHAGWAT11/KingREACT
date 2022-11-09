import React, { useEffect, useRef, useState } from "react";

function Timer() {
    const [Seconds, setSeconds] = useState(0)
    const [Minutes, setMinutes] = useState(5)

    const [Start, setStart] = useState(false)

    let id=useRef(null)


    let timer;
    useEffect(() => {
        if (Start) {
            // timer = setInterval(() => {
               id.current = setInterval(() => {
               
                if (Seconds > 0) {
                    setSeconds(Seconds - 1)
                }
                if (Seconds === 0) {
                    if (Minutes === 0) {

                        setMinutes(5)
                        setStart(false)
                        setSeconds(0)
                        return () => clearInterval(id.current)
                        // return () => clearInterval(timer)
                        //clearInterval=> only stop
                    }
                    else {
                        setMinutes(Minutes - 1)
                        setSeconds(59)
                    }

                }
            }, 1000)
            console.log(`${Minutes}:${Seconds}`)
        }
        // return () => clearInterval(timer)
        return () =>  clearInterval(id.current)
    })

    const handleAdd=()=>{
           if(Seconds<=59){
            setSeconds(Seconds+3)
           }else if(Seconds==0 && Minutes===5){
            setSeconds(0)
            setMinutes(5)
        }
    }

    const handleSub=()=>{
       if(Seconds>=3){
        setSeconds(Seconds-3)
    }else if(Seconds<3||Seconds==0){
        setMinutes(5)
    }
}

    return (
        <>
            <div className="timer">
                <h1>{Minutes < 10 ? "0" + Minutes : Minutes}:{Seconds < 10 ? "0" + Seconds : Seconds}</h1>
                {/* <button onClick={StartFun}>start</button> */}
                <button onClick={() => {
                    setStart(!Start)
                }}>{
                        Start ? 'stop' : 'start'
                    }</button>
                {/* <button onClick={StartFun}>Restart</button> */}
                <button onClick={()=>{
                    clearInterval(id.current)
                    setSeconds(0)
                    setMinutes(5)
                }}>Restart</button>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSub}>Substract</button>
            </div>
        </>
    )
}
export default Timer;