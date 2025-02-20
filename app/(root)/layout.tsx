import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import React from 'react'

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Rootlayout