import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginService from '../services/login'

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function logClick(username, password) {
        const user = { username, password }
        loginService.logIn(user)
        .then(response => {
            window.localStorage.setItem("user", JSON.stringify(response.data))
            setLoggedIn(true)
        }).catch(error => alert('invalid username or password'))
    }

    useEffect(() => {
        if (loggedIn) {
            window.location.href = '/landing'
        }
    }, [loggedIn])

    return (
        <>
            <div>Login</div>
            <form>
                <input 
                type="text" 
                placeholder="Username" 
                value={userName} onChange={(e) => setUserName(e.target.value)}
                />
            </form>
            <form>
                <input 
                type="text" 
                placeholder="Password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            {
                loggedIn ? (
                    <Link to='/landing'></Link>
                ) : (
                    <button onClick={() => logClick(userName, password)}>Login</button>
                )
            }
            {/* <Link to='/landing'><button onClick={() => logClick(userName, password)}>Login</button></Link> */}
        </>
    )

    
}