import { createContext, useState } from "react";

const AuthContext = createContext({});

export const Auth = ({ param }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {param}
        </AuthContext.Provider>
    )
}

export default AuthContext;