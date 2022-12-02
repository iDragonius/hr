import React from 'react'

const MainInfo = () => {
    return (
        <div>
            <div className={'my-2 w-[40%]'}>
                <p className={'opacity-70'}>Firstname</p>
                <p className={'py-2 px-4 border text-lg bg-white'}>
                    {localStorage.getItem('name')?.split(' ')[0]}
                </p>
            </div>
            <div className={'my-2 w-[40%]'}>
                <p className={'opacity-70'}>Lastname</p>
                <p className={'py-2 px-4 border text-lg bg-white'}>
                    {localStorage.getItem('name')?.split(' ')[1]}
                </p>
            </div>
            <div className={'my-2 w-[40%]'}>
                <p className={'opacity-70'}>Email</p>
                <p className={'py-2 px-4 border text-lg bg-white'}>
                    {localStorage.getItem('email')}
                </p>
            </div>
        </div>
    )
}

export default MainInfo
