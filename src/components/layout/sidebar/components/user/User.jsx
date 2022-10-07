import React from 'react'

const User = ({ path, name }) => {
    return (
        <div>
            <img src={path} alt={name} />
            <h1>{name}</h1>
        </div>
    )
}

export default User
