import React, { Fragment } from 'react'
import Navbar from '../navbar/Navbar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className='main'>
            <Navbar />
            <Fragment>{children}</Fragment>
        </main>
    )
}

export default Layout