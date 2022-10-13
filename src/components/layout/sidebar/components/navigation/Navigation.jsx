import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = ({ icon, whiteIcon, name, active, path, setActive }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <Link
            to={path}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setActive(path)}
            className={[
                'flex items-center mt-1 cursor-pointer  py-[10px] px-6 hover:bg-primary hover:rounded-r-3xl hover:text-white transition-all ease-in-out',
                active === path && 'bg-primary rounded-r-3xl ',
            ].join(' ')}
        >
            <div className={'flex'}>
                {active === path ? whiteIcon : hovered ? whiteIcon : icon}
                <p
                    className={[
                        ,
                        ' ml-2 text-md  hover:text-white',
                        active === path
                            ? 'text-white font-medium'
                            : hovered
                            ? 'text-white '
                            : 'text-black',
                    ].join(' ')}
                >
                    {name}
                </p>
            </div>
        </Link>
    )
}

export default Navigation
