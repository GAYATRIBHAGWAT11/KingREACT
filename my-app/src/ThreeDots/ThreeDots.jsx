import react, { useState } from 'react';

const UseStateObject=()=>{
    const [myObject,setmyObject]=useState({
        myName:'gayatri',age:22,degree:'Mcs'
    })
    const ChangeObject=()=>{
        setmyObject({...myObject, myName:'Aishwarya'})
    }
    return(
        <>
        <div>
            <h1>name {myObject.myName} & age is {myObject.age} & degree is {myObject.degree}</h1>
            <button onClick={ChangeObject}>Update</button>
        </div>

        </>
    )
}
export default UseStateObject;
// now here in ... dots FIRST WNTIRE MYOBJECT VALUE HAS COME, AND THEN NOW WHATEVER VALUE WE WANN CHANGE WE CAN GIVE 
// (,) AND LATER BY WRITING VALUE WE CAN CHANGE