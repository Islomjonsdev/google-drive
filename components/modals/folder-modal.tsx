"use client"

import { useFolder } from '@/hooks/use-folder'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

const FolderModals = () => {
    const { isOpen, onClose } = useFolder()
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>New folder</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default FolderModals