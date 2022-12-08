import React, { useEffect, useState } from 'react'
import Dropdown from '../../../ui/dropdown/Dropdown'
import cn from 'classnames'
import { getUserNotifications } from '../../../../http/api/notification'
const Notifications = ({ icon }) => {
    const [isActive, setIsActive] = useState(false)

    const dropdownHide = () => {
        setIsActive(false)
    }

    useEffect(() => {
        window.addEventListener('click', dropdownHide)
        return window.removeEventListener('click', dropdownHide)
    }, [])
    return (
        <div className={cn('relative')}>
            <div
                onClick={async (e) => {
                    e.stopPropagation()
                    setIsActive(!isActive)
                }}
                className={
                    'p-2 bg-white shadow-md cursor-pointer mx-3 hover:scale-105 transition-all ease-in-out'
                }
            >
                {icon}
            </div>
            {isActive && <Dropdown>asd</Dropdown>}
        </div>
    )
}

export default Notifications
