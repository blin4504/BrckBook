import ico from "./brckbook.png";
import NewUser from "./NewUser";
import ReturnUser from "./ReturnUser";
import { Link } from "react-router-dom";

function Icon(){
    return (
        <img className="icon" src={ico} alt = "logo" style={{ display:"flex", 'justifyContent': 'start'}} />
    );
}

export default function BaseLogin(){
    return(
        <div className = "LoginPage">
            <Icon />
            <NewUser />
            <ReturnUser />
        </div>
    );
}