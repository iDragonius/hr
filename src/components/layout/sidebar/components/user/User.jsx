import React from 'react'

const User = ({ path, name }) => {
    return (
        <div className={'flex flex-col items-center mb-7  '}>
            <img
                src={path}
                alt={name}
                width={120}
                height={120}
                className={'rounded-full mb-2'}
            />
            <h1 className={'text-2xl opacity-70 w-min text-center  '}>
                {name}
            </h1>
        </div>
    )
}

export default User
