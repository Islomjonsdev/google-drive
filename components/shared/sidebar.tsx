import Link from 'next/link'
import { Plus, Tablet, Star, Clock, Trash, Cloud } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import Item from './Item'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import PopoverActions from './popover-actions'

const sidebarLink = [
    {
        label: "My drive",
        icon: Tablet,
        path: "/"
    },
    {
        label: "Starred",
        icon: Star,
        path: "/starred"
    },
    {
        label: "Recent",
        icon: Clock,
        path: "/recent"
    },
    {
        label: "Trash",
        icon: Trash,
        path: "/trash"
    },
    {
        label: "Storage",
        icon: Cloud,
        path: "/storage"
    }
]

const Sidebar = () => {
    return (
        <div className='h-[90vh] w-72 fixed top-[10vh] left-0 z-30 bg-[#f6f9fc] dark:bg-[#1f1f1f] border-r'>
            <div className='flex flex-col p-3'>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className='w-fit h-12 rounded-full px-6'>
                            <Plus />
                            <span>New</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 py-2">
                        <PopoverActions />
                    </PopoverContent>
                </Popover>
                <div className='flex flex-col space-y-6 mt-8'>
                    {sidebarLink?.map(links => (
                        <Link href={links.path} key={links.path}>
                            <Item icon={links.icon} label={links.label} />
                        </Link>
                    ))}

                    <div className='flex flex-col space-y-2 mx-4'>
                        <Progress className="h-2" value={30} />
                        <span>20MB of 15 GB used</span>
                        <Button className='rounded-full' variant={"outline"}>Get more storage</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar