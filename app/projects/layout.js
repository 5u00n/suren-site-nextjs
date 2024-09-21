import React from 'react'

function ProjectLayout({children}) {
  return (
    <div className="container mx-auto px-4 flex-grow">
          {children}
        </div>
  )
}

export default ProjectLayout;