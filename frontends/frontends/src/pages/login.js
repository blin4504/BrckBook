import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
        <div class="block2">
            
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
            <button class="butt" onClick={() => logClick(userName, password)}>Login</button>
        </div>
        </>
    )

    function logClick(userName, password)
    {
        
    }
}