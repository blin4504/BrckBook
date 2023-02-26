import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReturnUser(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="returnLoginBox" style={{display:"none"}}>
            <form>
                <div className="loginOption">
                    <label>
                        Username: 
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </label>
                </div>
                <div className="loginOption">
                    <label>
                        Password: 
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </label>
                </div>
                <Link to="/landing">
                    <button className="loginOption" type="button">Login</button>
                </Link>
            </form>
        </div>
    );
}