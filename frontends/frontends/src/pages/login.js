import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
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
            <button onClick={() => logClick(userName, password)}>Login</button>
        </>
    )

    function logClick(userName, password)
    {
        
    }
}