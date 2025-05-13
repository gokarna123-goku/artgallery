import React from 'react'

const RootLayout = ({ children, className }) => {
    return (
        <div className={`w-full lg:px-20 md:px-14 sm:px-10 px-4 ${className}`}>
            {children}
        </div>
    )
}

export default RootLayout