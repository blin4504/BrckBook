import bblogo from "./bblogo.png"
import notif from "./bblogo.png"
import user from "./bblogo.png"
import setting from "./bblogo.png"

import { useState } from "react";
import { Link } from "react-router-dom";

function BBlogo(){
    return(
        <Link to="/">
            <img className="iconBB" src={bblogo} alt = "logo" />
        </Link>
    )
}
function Notiflogo(){
    return(
        <img className="iconBB" src={notif} alt = "logo" />
    )
}
function Userlogo(){
    return(
        <img className="iconBB" src={user} alt = "logo" />
    )
}
function Settinglogo(){
    return(
        <img className="iconBB" src={setting} alt = "logo" />
    )
}
  
function Bar(){
    const [searchInput, setSearchInput] = useState("");

    return(
        <div className="topBar">
            <BBlogo/>
            <input className="searchBar" type="text" placeholder="Search here" onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput} />
            <Notiflogo /> 
            <Userlogo /> 
            <Settinglogo /> 
        </div>
    );
}

function Reccomended(){
    return(
        <div className="rec" >
            <h3> Based on your Library ...</h3>
            <ul>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
            </ul>
        </div>
    );
}

function Popular(){
    return(
        <div className="pop" >
            <h3>Popular</h3>
            <ul>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
            </ul>
        </div>
    );
}


export default function Landing(){
    return(
        <div className="land">
            <Bar /> 
            <Reccomended />
            <Popular />
        </div>
    );
}