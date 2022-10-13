import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sections from './components/sections/Sections'

const HR = () => {
    const [active, setActive] = useState('Non Working Days')
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

export default HR
