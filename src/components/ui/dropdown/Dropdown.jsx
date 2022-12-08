import React from 'react'
import cn from 'classnames'
const Dropdown = ({ children }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={cn(
                'absolute w-[300px] right-2 bg-white rounded-lg shadow-md px-4 py-3 mt-2'
            )}
        >
            {children}
        </div>
    )
}

export default Dropdown
