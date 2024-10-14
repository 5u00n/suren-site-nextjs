import React from 'react'

function BlogLayout({children}) {
    return (
        <div className="container mx-auto px-4 flex-grow">
          {children}
        </div>
    )
}

export default BlogLayout;