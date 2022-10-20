import React from 'react'

const CommonModal = ({ children, open, setOpen, canClose }) => {
    return (
        <div
            onClick={() => {
                canClose && setOpen(false)
            }}
            className={
                open
                    ? 'fixed z-[9998] w-full h-full top-0 left-0 bg-black bg-opacity-50 transition-opacity ease-in-out flex justify-center items-center'
                    : 'hidden'
            }
        >
            <div
                className={'px-10 py-5 bg-white rounded-md'}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={' min-w-[400px]'}>{children}</div>
            </div>
        </div>
    )
}

export default CommonModal
