"use client"

import React from 'react'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import logo from "../../public/images/google-drive.png"
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { HelpCircle, Settings } from 'lucide-react'
import UserBox from './user-box'
import { Avatar, AvatarFallback } from '../ui/avatar'

const Navbar = () => {
    const { userId } = useAuth()
    console.log(userId);

    return (
        <div className='h-[10vh] fixed left-0 top-0 right-0 z-30 bg-[#f6f9fc] dark:bg-[#1f1f1f]'>
            <div className='flex items-center justify-between my-4 mx-6'>
                <Link href={"/"}>
                    <div className='flex items-center gap-2'>
                        <Image src={logo} alt={"Logo"} width={40} height={40} />
                        <span className='text-[22px] opacity-75'>Drive</span>
                    </div>
                </Link>

                <div className='flex items-center space-x-2'>
                    <ModeToggle />
                    <div className='p-2 hover:bg-[secondary] rounded-full transition' role="button">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className='p-2 hover:bg-[secondary] rounded-full transition' role="button">
                        <Settings className="w-5 h-5" />
                    </div>
                    {userId ? (
                        <UserBox />
                    ) : (
                        <Avatar className="cursor-pointer">
                            <AvatarFallback>IM</AvatarFallback>
                        </Avatar>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar