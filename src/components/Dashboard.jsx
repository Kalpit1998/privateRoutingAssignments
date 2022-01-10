import { useContext } from "react"
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../contexAPI/userContext"

export function Dashboard() {
    
    const {token} = useContext(UserContext);

    if(!token){
        return <Navigate to={"/login"}/>
    }
    else{
       return (
            <div id="dashboard">
                <h1>Welcome to React Routing Assignments Dashboard</h1>
                <br />
                <Link to={"/dashboard/settings"}>Click Here For Dashboard Settings</Link>                
            </div>
        ) 
    }
    
}
