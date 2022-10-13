import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const CPanel = ({ icon, whiteIcon }) => {
    const location = useLocation()
    const [active, setActive] = useState(false)
    useEffect(() => {
        location.pathname.split('/')[1] === 'admin'
            ? setActive(true)
            : setActive(false)
    }, [location])
    return (
        <Link
            to={'/admin/users-list'}
            className={[
                'p-2  shadow-md cursor-pointer mx-3 hover:scale-105 transition-all ease-in-out',
                active ? 'bg-primary' : 'bg-white',
            ].join(' ')}
        >
            {active ? whiteIcon : icon}
        </Link>
    )
}

export default CPanel
