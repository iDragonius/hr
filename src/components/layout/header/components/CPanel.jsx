import React from 'react'
import { Link } from 'react-router-dom'

const CPanel = ({ icon }) => {
    return (
        <Link
            to={'/admin'}
            className={
                'p-2 bg-white shadow-md cursor-pointer mx-3 hover:scale-105 transition-all ease-in-out'
            }
        >
            {icon}
        </Link>
    )
}

export default CPanel
