import React from "react";

const Counter=()=>{
return(
    <>
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
        </div>
        <div>
            <label htmlFor="location">location</label>
            <select id="location">
                <option value="us">us</option>
                <option value="uk">uk</option>
                <option value="india">india</option>
                <option value="rsa">russia</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms" />i agree to the above terms
                </label>    
        </div>
        <button>submit</button>
    </form>
    </>
)
}
export default Counter;