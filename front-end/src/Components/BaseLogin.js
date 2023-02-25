import ico from "./brckbook.png";
import NewUser from "./NewUser";
import ReturnUser from "./ReturnUser";

function Icon(){
    return (
        <img className="icon" src={ico}             
            alt = "logo"
            style={{ display:"flex", 'justifyContent': 'start'}}
        ></img>
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