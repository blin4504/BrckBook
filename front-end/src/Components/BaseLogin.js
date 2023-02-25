import ico from "./brckbook.png";
import NewUser from "./NewUser";

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

            
        </div>
    );
}