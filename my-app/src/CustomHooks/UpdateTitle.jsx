import React,{useEffect} from "react";
export default function  useUpdateTitle(count){
    // const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`count ${count}`
    },[count])

    
}

