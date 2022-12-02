import React, { useEffect, useState } from 'react'
import Sections from './sections/Sections'
import { Outlet, useLocation } from 'react-router-dom'

const Staff = () => {
    const [active, setActive] = useState('/staff/list')
    const location = useLocation()

    useEffect(() => {
        setActive(location.pathname)
    }, [])
    return (
        <div>
            <Sections active={active} setActive={setActive} />
            <Outlet />
        </div>
    )
}

export default Staff
