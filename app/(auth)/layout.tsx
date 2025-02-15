import Navbar from '@/components/shared/navbar'
import { ChildProps } from '@/types/index'
import React from 'react'

const AuthLayout = ({ children }: ChildProps) => {
    return (
        <div>
            <Navbar />
            <div>Sidebar</div>
            {children}
        </div>
    )
}

export default AuthLayout