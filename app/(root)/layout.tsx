import Navbar from '@/components/shared/navbar'
import React from 'react'

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
           <Navbar />
           {children}
        </div>
    )
}

export default Rootlayout