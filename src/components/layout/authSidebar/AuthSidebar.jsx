import React from 'react'
import { useLocation } from 'react-router-dom'
import AuthSidebarElement from './sidebarElement/AuthSidebarElement'

const AuthSidebar = () => {
    return (
        <div
            className={
                'w-1/4 bg-primary min-h-screen rounded-r-[20px] flex  justify-center items-center'
            }
        >
            <AuthSidebarElement name={'Sign in'} path={'/auth/sign-in'} />
            <div className={'h-16 w-1 bg-white mx-5'} />
            <AuthSidebarElement name={'Sign up'} path={'/auth/sign-up'} />
        </div>
    )
}

export default AuthSidebar
