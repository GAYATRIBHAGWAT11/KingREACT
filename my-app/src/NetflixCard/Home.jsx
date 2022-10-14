import React, { useContext } from "react";
import Context from "/Users/admin/React/my-app/src/NetflixCard/Context.jsx";

const Home=()=>{
    const name=useContext(AppContext)
    return(
        <>
        <div>my home page</div>
        <p>{name}</p>
        </>
    )
}
export default Home;