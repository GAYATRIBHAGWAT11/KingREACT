import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie=()=>{
    const {id}=useParams()
    return(
        <>
        <h1>single movie {id}</h1>
        </>
    )
}
export default SingleMovie;