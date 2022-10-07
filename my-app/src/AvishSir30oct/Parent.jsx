import React,{useState} from 'react';
import Child from '/Users/admin/React/my-app/src/AvishSir30oct/Child.jsx'

const Parent=()=>{
    const [parentData, setParentData]=useState('hello from parent')
    const [dataFromChild,setDataFromChild]=useState('')
    const getDataFromChild=(data)=>{
        setDataFromChild(data);
    }
    return(
        <>
        {/* <Child ParentData={parentData}/> */}
        <Child GetDataFromChild={getDataFromChild}/>
        <h1>{dataFromChild}</h1>
        </>
    )

}
export default Parent;
// GetDataFromChild(childData)=getDataFromChild=(data)
// bcz=GetDataFromChild={getDataFromChild}