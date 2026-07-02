import React from 'react'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-16 xl:px-12 lg:px-10 md:px-8 sm:px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
