import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [token, setToken] = useState("");

    const handleToken = (value) => {
        setToken(value);
    }

    return <UserContext.Provider value={{ token, setToken, handleToken }}>{children}</UserContext.Provider>
}