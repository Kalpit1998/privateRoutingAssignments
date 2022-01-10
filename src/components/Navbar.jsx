import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexAPI/userContext"

export const Navbar = () => {
    const {token, setToken} = useContext(UserContext);

    const logout = () => {
        setToken("");
    }

    return (
        <div id="menu-wrapper">
            <div id="logo">Logo</div>
            <div id="menus">
                <Link to={"/"}>Home</Link>
                {!token ? <Link to={"/login"}>Login</Link> : <span onClick={logout} style={{cursor: "pointer"}}>Logout</span>}
                <Link to={"/dashboard"}>Dashboard</Link>
            </div>
        </div>
    )
}