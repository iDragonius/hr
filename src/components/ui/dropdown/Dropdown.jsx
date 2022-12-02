import React from 'react'
import cn from 'classnames'
const Dropdown = ({ children, hidden }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={cn(
                'absolute w-[300px] right-2 bg-white rounded-lg shadow-md px-4 py-3 mt-2',
                hidden ? 'hidden' : 'block'
            )}
        >
            {children}
        </div>
    )
}

export default Dropdown
