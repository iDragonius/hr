import React, { useState } from 'react'
import Sections from './sections/Sections'
import { Outlet } from 'react-router-dom'

const Profile = () => {
    const [active, setActive] = useState('/profile/main-info')

    return (
        <div>
            <Sections active={active} setActive={setActive} />
            <Outlet />
        </div>
    )
}

export default Profile
