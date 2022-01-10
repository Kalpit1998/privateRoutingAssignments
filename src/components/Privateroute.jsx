import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexAPI/userContext";

export function Privateroute({children}) {

    const {token} = useContext(UserContext)

    if(!token){
        return <Navigate to={"/login"}/>
    }
    else{
        return children;
    }
}
