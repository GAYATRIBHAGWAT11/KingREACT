import React from "react";

import { useParams } from "react-router-dom";


function Content(){
    const {id}=useParams();

    return(
        <>
        <p>this is the page for content {id}</p>
        </>
    )
}
export default Content;