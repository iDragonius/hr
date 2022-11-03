import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useRole } from './useRole'
const RoleWrapper = ({ routeRole }) => {
    const location = useLocation()

    const roleCheck = useRole(routeRole)

    if (roleCheck) {
        return <Outlet />
    } else {
        return <Navigate to="/" sate={{ from: location }} replace />
    }
}

export default RoleWrapper
