import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sections from './pages/sections/Sections'

const Admin = () => {
    const [active, setActive] = useState('/admin/users-list')
    const location = useLocation()
    useEffect(() => {
        setActive(location.pathname)
    }, [location])
    return (
        <div>
            <Sections active={active} setActive={setActive} />
            <Outlet />
        </div>
    )
}

export default Admin
