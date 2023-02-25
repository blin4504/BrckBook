import ico from "./placeholder.ico"
import NewUser from "./NewUser";

function Icon(){
    return (
        <img src={ico}             
            alt = "logo"
            style={{ display:"flex", 'justifyContent': 'start'}}
        ></img>
        );
}

export default function LoginPage(){
    return(
        <div className = "LoginPage">
            <Icon />
            <NewUser />
        </div>
    );
}