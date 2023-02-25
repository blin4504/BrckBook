import bblogo from "./bblogo.png"
import { useState } from "react";

function BBlogo(){
    return(
        <img className="iconBB" src={bblogo} alt = "logo" />
    )
    }
  
function Bar(){
    const [searchInput, setSearchInput] = useState("");

    return(
        <div className="topBar">
            <BBlogo/>
            <input className="searchBar" type="text" placeholder="Search here" onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput} />
            <BBlogo/> 
            <BBlogo/> 
            <BBlogo/> 
        </div>
    );
}

function Reccomended(){
    return(
        <div className="reccomendations">
            <h1> BAM</h1>
        </div>
    );
}


export default function Landing(){
    return(
        <div>
            <Bar /> 
            <Reccomended />
        </div>
    );
}