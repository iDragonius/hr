import React from 'react'
import { RiAdminLine } from 'react-icons/ri'

const Notifications = ({ icon }) => {
    return (
        <div
            className={
                'p-2 bg-white shadow-md cursor-pointer mx-3 hover:scale-105 transition-all ease-in-out'
            }
        >
            {icon}
        </div>
    )
}

export default Notifications
