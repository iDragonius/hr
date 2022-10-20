import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const AuthSidebarElement = ({ name, path }) => {
    const location = useLocation()

    return (
        <Link
            to={path}
            className={[
                'text-[24px] py-3 px-5  text-white font-semibold rounded-md ',
                location.pathname === path && 'bg-white text-primary',
            ].join(' ')}
        >
            {name}
        </Link>
    )
}

export default AuthSidebarElement
