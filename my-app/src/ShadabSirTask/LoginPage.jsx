import React, { useState } from "react";

function LoginPage() {

    const [Email, setEmail] = useState('')
    const [pass, setPassword] = useState('')







    return (
        <>
            <div className="container">
                <input type="text" placeholder="enter email" />
                <input type="password" placeholder="enter password" />
                <button>login</button>
            </div>
        </>
    )
}
export default LoginPage;