import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function handleSignUp(password, confirm){
    console.log(password);
    console.log(confirm);
    if (password === confirm){
        document.getElementsByClassName("loginBox")[0].style.display = "none";
    }
}
function handleReturnUser(){
    document.getElementsByClassName("loginBox")[0].style.display = "none";
    document.getElementsByClassName("returnLoginBox")[0].style.display = "block";
}

export default function NewUser(){
    const [firstName, setName] = useState("");
    
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div className="loginBox">
            <form className='form'>
                <h3>Sign Up</h3>
                <div className="loginOption">
                    <label>
                        First Name: 
                        <input type="text" value={firstName} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Last Name: 
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>
                <div className="loginOption">
                    <label>
                        Username: 
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </label>
                </div>
                <div className="loginOption">
                    <label>
                        Email: 
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                </div>
                <div className="loginOption">
                    <label>
                        Password: 
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </label>
                </div>
                <div className="loginOption">
                    <label>
                        Confirm Password: 
                        <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
                    </label>
                </div>
                <Link to="/profile-pick">
                    <button className="loginOption" type="button" onClick={()=>handleSignUp(password, confirmPassword)} >Sign Up</button>
                </Link>
                <button className="loginOption" type="button" onClick={()=>handleReturnUser()}>Login</button>
            </form>
        </div>
    );
}