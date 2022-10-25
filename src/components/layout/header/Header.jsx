import React from 'react'
import { RiAdminLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Notifications from './components/Notifications'
import CPanel from './components/CPanel'
import { useSelector } from 'react-redux'
import { userData } from '../../../store/slices/authSlice'
const Header = () => {
    const data = useSelector(userData)
    return (
        <div
            className={
                'bg-bgPrimary z-[1000] sticky top-0 pt-4  w-full flex justify-between items-center px-2 pb-4 mt-2 border-b-[1px] border-b-[rgba(0,0,0,0.1)]'
            }
        >
            <div>
                <h1 className={'text-2xl font-bold'}>
                    Good Morning, {data.name?.split(' ')[0]}!{' '}
                </h1>
                <p className={'opacity-60'}>
                    Happiness is nothing more than money
                </p>
            </div>
            <div className={'flex'}>
                <CPanel
                    icon={<RiAdminLine size={24} color={'#000'} />}
                    whiteIcon={<RiAdminLine size={24} color={'#fff'} />}
                />

                <Notifications
                    icon={<IoMdNotificationsOutline size={24} color={'#000'} />}
                />
            </div>
        </div>
    )
}

export default Header
