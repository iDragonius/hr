import React from 'react'
import { useRole } from './useRole'

const RoleCheckerUI = ({ routeRole, children }) => {
    const roleCheck = useRole(routeRole)
    return roleCheck && <>{children}</>
}

export default RoleCheckerUI
