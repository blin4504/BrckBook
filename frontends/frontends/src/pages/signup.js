import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/user'
import Logo from '../components/Logo';

export default function SignUp() {
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <Logo />
            <div className="block">
                <div>SignUp</div>
                <form>
                    <input className="input"
                    type="text" 
                    placeholder="First Name" 
                    value={firstName} onChange={(e) => setName(e.target.value)}
                    />
                </form>
                <form>
                    <input className="input"
                    type="text" 
                    placeholder="Last Name"
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                    />
                </form>
                <form>
                    <input className="input"
                    type="text" 
                    placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </form>
                <form>
                    <input className="input"
                    type="text" 
                    placeholder="Username"
                    value={userName} onChange={(e) => setUserName(e.target.value)}
                    />
                </form>
                <form>
                    <input className="input"
                    type="text" 
                    placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <form>
                    <input className="input"
                    type="text" 
                    placeholder="Confirm Password"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </form>
                <button className="butt" onClick={() => signClick(firstName, lastName, userName, email, password, confirmPassword)}>Signup</button>
                <div>
                    <Link to ="login" className="login">Already have a account? Login Here</Link>
                </div>
            </div>
        </div>
    )

    function signClick(first, last, username, email, password, confirmPassword) {
        if (password !== confirmPassword) {
            alert('not same password!!!')
            return
        }

        const user = {first, last, email, username, password}
        userService.createUser(user)
        .then((response) => {
            // console.log(response)
            window.location.href = '/login'
        })
    }
}