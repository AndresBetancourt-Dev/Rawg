import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div>{children}</div>
        </main>
    )
}

export default Layout