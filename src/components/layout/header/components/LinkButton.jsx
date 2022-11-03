import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LinkButton = ({ icon, whiteIcon, path }) => {
    const location = useLocation()
    const [active, setActive] = useState(false)
    useEffect(() => {
        location.pathname === path ? setActive(true) : setActive(false)
    }, [location])
    return (
        <Link
            to={path}
            className={[
                'p-2  shadow-md cursor-pointer mx-3 hover:scale-105 transition-all ease-in-out',
                active ? 'bg-primary' : 'bg-white',
            ].join(' ')}
        >
            {active ? whiteIcon : icon}
        </Link>
    )
}

export default LinkButton
