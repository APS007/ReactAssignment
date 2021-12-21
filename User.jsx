import React, { useState } from "react";

function User(Login,details) {
    const [user, setUser] = useState({ name: "", password: "" });
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    const Logout = () => {
        localStorage.clear();
        setUser({
            name: "",
            password: ""
        })
        
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="name">Name:{details.name}</label>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                </div>
            </div>
            <div>
                <button>Change password</button><br></br>
                <button onClick={Logout}> Logout</button>
            </div>

        </form>
    )
}

export default User
