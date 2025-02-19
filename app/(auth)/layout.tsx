import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import { ChildProps } from '@/types/index'
import React from 'react'

const AuthLayout = ({ children }: ChildProps) => {
    return (
        <div className='relative'>
            <div className='absolute inset-0 z-40 w-screen h-screen bg-black/50 '/>
            <Navbar />
            <Sidebar />
            <main className='flex items-center justify-center w-full z-50 h-[90vh] relative'>
                {children}
            </main>
        </div>
    )
}

export default AuthLayout