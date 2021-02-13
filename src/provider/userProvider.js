import { createContext, useState, useEffect } from "react";
import { auth, generateDocumentUser } from "../firebase/firebase";


export const UserContext = createContext({ user: null });

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log("UserProvider -> user", user)

    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            const user = await generateDocumentUser(userAuth);
            setUser({ user });
        })
    }, [])

    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )

}

export default UserProvider;