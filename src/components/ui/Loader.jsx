import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = ({ loading }) => {
    return (
        <div
            className={
                'h-screen w-screen bg-primary flex justify-center items-center'
            }
        >
            <HashLoader loading={loading} color={'#ffffff'} size={100} />
        </div>
    )
}

export default Loader
