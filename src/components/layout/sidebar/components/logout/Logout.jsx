import React, { useState } from 'react'
import { MdOutlineExitToApp } from 'react-icons/md'
const Logout = ({ action }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={
                'absolute bottom-16 flex items-center  hover:bg-primary py-2 pl-6 pr-10 rounded-r-3xl cursor-pointer transition-all ease-in-out'
            }
            onClick={action}
        >
            <MdOutlineExitToApp size={24} color={hovered ? '#fff' : '#000'} />
            <p
                className={[
                    'ml-2 text-md',
                    hovered ? 'text-white' : 'text-black',
                ].join(' ')}
            >
                Logout
            </p>
        </div>
    )
}

export default Logout
