import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import loginService from '../services/login'

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    async function logClick(username, password) {
        const user = { username, password }
        await loginService.logIn(user)
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
        <div className='login-container'>
            <Logo />
            <div class="block2">
                <div className='login-form'>
                <Link to ="/" class="b2signup">Back to Signup</Link>
                    <div>Login</div>
                    <form>
                        <input class="input"
                        type="text" 
                        placeholder="Username" 
                        value={userName} onChange={(e) => setUserName(e.target.value)}
                        />
                    </form>
                    <form>
                        <input class="input"
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
                </div>
            </div >
        </div>
    )
}