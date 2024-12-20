import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const userData = {
    name: "sandeep",
    email: "sandeep@gmail.com",
    type: "recuter"
}

function AuthProvider({ children }) {

    const [user, setUser] = useState(userData);
    const [loading, isLoading] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);


    const login = () => {
        const user = {
            name: "sandeep",
            email: "sandeep@gmail.com"
        }
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    const openDialog = () => {
        setDialogOpen(true);
    }

    const closeDialog = () => {
        setDialogOpen(false);
    };

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }else{
            setUser(userData);
        }

    }, [])


    return (<AuthContext.Provider value={{ user, login, logout, openDialog, isDialogOpen, closeDialog, setDialogOpen, loading }}>
        {children}
    </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}

export default AuthProvider
