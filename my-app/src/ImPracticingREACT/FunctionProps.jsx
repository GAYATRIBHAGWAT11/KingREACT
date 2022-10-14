import React from "react";
import FunctionProps1 from '/Users/admin/React/my-app/src/ImPracticingREACT/FunctionProps1.jsx'

const FunctionProps=()=>{

    const alertFun=()=>{
        alert('this is function props')
    }

    return(
        <>
        <FunctionProps1 data={alertFun}/>
        </>
    )
}
export default FunctionProps