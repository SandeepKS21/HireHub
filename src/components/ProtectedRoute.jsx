import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {

    const { pathname } = useLocation();

    const { user, openDialog } = useAuth();


    if (!user) {
        openDialog();
        return <Navigate to={'/'} />
    }


    if (user.type === null && pathname !== "/onboarding") {
        return <Navigate to={'/onboarding'} />
    }



    return children

}

export default ProtectedRoute
