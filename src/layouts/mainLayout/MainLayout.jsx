import React from 'react'
import Header from '../../components/layout/header/Header'
import Sidebar from '../../components/layout/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className={'flex'}>
            <div className={'fixed  h-screen w-6 bg-primary '} />
            <Sidebar />
            <div className={'flex flex-col w-full px-5'}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
