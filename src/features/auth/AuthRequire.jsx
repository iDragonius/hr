import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthRequire = () => {
    const location = useLocation()

    const token = localStorage.getItem('token')
    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/sign-in" sate={{ from: location }} replace />
    )
}

export default AuthRequire
