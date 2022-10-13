import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ name, active, setActive, path }) => {
    return (
        <Link
            to={path}
            onClick={() => setActive(path)}
            className={[
                'px-3 py-2 mx-1 cursor-pointer bg-primary shadow-md  font-semibold rounded-md border-b-4 border-b-primary',
                active === path
                    ? 'border-b-primary bg-white text-black '
                    : 'bg-primary text-white',
            ].join(' ')}
        >
            {name}
        </Link>
    )
}

export default Section
