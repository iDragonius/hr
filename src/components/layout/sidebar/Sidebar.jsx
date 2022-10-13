import React, { useEffect, useState } from 'react'
import User from './components/user/User'
import Navigation from './components/navigation/Navigation'
import { MdDashboard } from 'react-icons/md'
import { SiGoogletagmanager } from 'react-icons/si'
import { MdOutlineSick } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsHourglassSplit } from 'react-icons/bs'
import { CgFileDocument } from 'react-icons/cg'
import { MdOutlinePermIdentity } from 'react-icons/md'
import { AiFillPicture } from 'react-icons/ai'
import { MdPeopleAlt } from 'react-icons/md'
import Logout from './components/logout/Logout'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const [active, setActive] = useState('Workers')
    const location = useLocation()
    useEffect(() => {
        setActive(location.pathname)
    }, [])
    return (
        <div className={'min-w-[220px] bg-white min-h-screen'}>
            <div
                className={'fixed flex flex-col  top-0 left-6  h-screen  mt-10'}
            >
                <div>
                    <User
                        name={'John Doe'}
                        path={
                            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        }
                    />
                    <Navigation
                        name={'Dashboard'}
                        path={'/'}
                        active={active}
                        setActive={setActive}
                        whiteIcon={<MdDashboard size={24} color={'#fff'} />}
                        icon={<MdDashboard size={24} color={'#000'} />}
                    />
                    <Navigation
                        name={'Workers'}
                        path={'/staff-add'}
                        active={active}
                        setActive={setActive}
                        whiteIcon={<MdPeopleAlt size={24} color={'#fff'} />}
                        icon={<MdPeopleAlt size={24} color={'#000'} />}
                    />
                    <Navigation
                        name={'HR'}
                        path={'/hr/non-working-days'}
                        active={active}
                        setActive={setActive}
                        icon={<SiGoogletagmanager size={24} color={'#000'} />}
                        whiteIcon={
                            <SiGoogletagmanager size={24} color={'#fff'} />
                        }
                    />
                    <Navigation
                        name={'Illness'}
                        path={'/illness'}
                        active={active}
                        setActive={setActive}
                        icon={<MdOutlineSick size={24} color={'#000'} />}
                        whiteIcon={<MdOutlineSick size={24} color={'#fff'} />}
                    />
                    <Navigation
                        name={'Vacation'}
                        path={'/vacation'}
                        active={active}
                        setActive={setActive}
                        icon={<AiFillPicture size={24} color={'#000'} />}
                        whiteIcon={<AiFillPicture size={24} color={'#fff'} />}
                    />
                    <Navigation
                        name={'Permissions'}
                        path={'/permissions'}
                        active={active}
                        setActive={setActive}
                        icon={
                            <MdOutlinePermIdentity size={24} color={'#000'} />
                        }
                        whiteIcon={
                            <MdOutlinePermIdentity size={24} color={'#fff'} />
                        }
                    />
                    <Navigation
                        name={'Working Hours'}
                        path={'/working-hours'}
                        active={active}
                        setActive={setActive}
                        icon={<BsHourglassSplit size={24} color={'#000'} />}
                        whiteIcon={
                            <BsHourglassSplit size={24} color={'#fff'} />
                        }
                    />
                    <Navigation
                        name={'Tabel'}
                        path={'/tabel'}
                        active={active}
                        setActive={setActive}
                        icon={<CgFileDocument size={24} color={'#000'} />}
                        whiteIcon={<CgFileDocument size={24} color={'#fff'} />}
                    />
                    <Navigation
                        name={'Salary'}
                        path={'/salary'}
                        active={active}
                        setActive={setActive}
                        icon={<GiReceiveMoney size={24} color={'#000'} />}
                        whiteIcon={<GiReceiveMoney size={24} color={'#fff'} />}
                    />
                </div>
                <Logout />
            </div>
        </div>
    )
}

export default Sidebar
