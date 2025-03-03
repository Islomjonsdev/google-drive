"use client"

import { useFolder } from '@/hooks/use-folder'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from '@/lib/validation'
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '@/lib/firebase'
import { useUser } from "@clerk/nextjs"
import { toast } from "sonner";

const FolderModals = () => {
    const { isOpen, onClose } = useFolder()
    const { user } = useUser()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "" },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const promise = addDoc(collection(db, "folders"), {
            name: values.name,
            timestamp: serverTimestamp(),
            uid: user?.id,
            isArhive: false
        }).then(() => {
            form.reset();
            onClose()
        })
        toast.promise(promise, {
            loading: "Creating folder",
            success: "Folder created",
            error: "Error creating folder"
        })
    }
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>New folder</DialogTitle>
                </DialogHeader>

                <div className='flex flex-col space-y-2'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input className='rounded-none outline-none' placeholder="Folder name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex items-center justify-end space-x-2'>
                                <Button variant={"link"} size="sm" onClick={onClose}>Cancel</Button>
                                <Button variant={"outline"} size={"sm"} type="submit">Create</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FolderModals