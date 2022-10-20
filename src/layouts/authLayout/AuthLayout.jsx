import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthSidebar from '../../components/layout/authSidebar/AuthSidebar'

const AuthLayout = () => {
    return (
        <div className={'flex'}>
            <AuthSidebar />
            <div className={'mx-16 mt-12 flex items-center'}>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout
