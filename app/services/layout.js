import React from 'react'

function ServicesLayout({ children }) {
    return (
        <div className="container mx-auto px-4 flex-grow">
            {children}
        </div>
    )
}

export default ServicesLayout;