import React, { useState } from "react";
import '/Users/admin/React/my-app/src/LoginForm.css'

const LoginForm = () => {
    const [emialId, setemailId] = useState('')
    const [password, setPassword] = useState('')
    const [updateText, setUpdateText] = useState([])

    const submit = (e) => {
        e.preventDefault();

        if (emialId && password) {
            const newData = { email: emialId, password: password }
            setUpdateText([...updateText, newData])
            // console.log(updateText);
            setemailId('')
            setPassword('')
        }else{
            alert('invalid login')
        }

    }


    return (
        <>
        <h1>this is login page</h1>
            <form className="form" action="" onSubmit={submit}>
                <div className="email">
                    <label htmlFor="email">Email ID</label>
                    <input type="text" name="email" id="email" value={emialId} onChange={(e) => {
                        setemailId(e.target.value)
                    }} />
                </div>
                <div className="pass">
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div className="loginBtn">
                    <button className="login" type="submit">Login</button>
                </div>
            </form>

            <div>
                {
                    updateText.map((MyElem) => {
                        return (
                            <>
                                <h1 className="head">Welcome {MyElem.email}  !</h1>
                            </>
                        )
                    })
                }

            </div>

        </>
    )
}
export default LoginForm;