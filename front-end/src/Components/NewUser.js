import React, { useState } from 'react';

export default function NewUser(){
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return(
        <div className="Login Box" style={{
            // display:"flex", 
            // justifyContent:"start", 
            background:"gray", 
            padding:"10px",
            width: "500px",
            alignContent:"right"

        }}>
            <form>
                <div style={{ 
                    padding:"10px",
                }}>
                    <label>
                        First Name: 
                        <input type="text" value={firstName} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Last Name: 
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>
                <div style={{padding: "10px"}}>
                    <label>
                        Username: 
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </label>
                </div>
                <div style={{padding: "10px"}}>
                    <label>
                        Email: 
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                </div>
                <div style={{padding: "10px"}}>
                    <label>
                        Password: 
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </label>
                </div>
                <div style={{padding: "10px"}}>
                    <label>
                        Confirm Password: 
                        <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
                    </label>
                </div>
                <button>Sign Up</button>
                <button>Login</button>
            </form>
        </div>
    );
}