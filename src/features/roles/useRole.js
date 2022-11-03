import { roles } from '../../config'
import { useSelector } from 'react-redux'
import { userRole } from '../../store/slices/authSlice'
export const useRole = (routeRole) => {
    const role = useSelector(userRole)
    if (!role) {
        return true
    }
    const roleIndex = roles.find((dataRole) => dataRole.name === role)?.value
    return roleIndex <= routeRole
}
