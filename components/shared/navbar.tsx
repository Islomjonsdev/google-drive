"use client"

import React from 'react'
import { useAuth } from '@clerk/nextjs'

const Navbar = () => {
    const { userId } = useAuth()
    console.log(userId);

    return (
        <div>Navbar</div>
    )
}

export default Navbar