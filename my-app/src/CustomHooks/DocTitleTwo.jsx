import React,{useState} from 'react';
import {UpdateTitle} from '/Users/admin/React/my-app/src/CustomHooks/UpdateTitle.jsx'


export  default function DocTitleOne(){
    const [count,setCount]=useState(0);
    UpdateTitle(count)
    // useEffect(()=>{
    //     document.title=`count = ${count}`
    // },[[count]])
    // use effect will trigger when count will change=>[count]]



    return(
        <>
        <div>
            <button onClick={()=>{
                setCount((prev)=>prev+1)
            }}>click-{count}</button></div>
        </>
    )
}