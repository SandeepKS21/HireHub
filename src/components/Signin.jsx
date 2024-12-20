import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { useAuth } from '@/context/AuthContext'


function Signin() {

    const {isDialogOpen,setDialogOpen} =useAuth();


    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}  >
            <DialogTrigger asChild>
                <Button varient="outline">
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-96">
                <DialogHeader className="flex justify-center items-center">
                    <DialogTitle className="text-lg font-bold">Sign in to hirred</DialogTitle>

                    <DialogDescription className="mt-1 text-sm ">
                        <p>Welcome back! Please sign in to continue</p>

                        <div className='flex gap-1 items-end justify-center p-1 border-2 rounded-lg mt-5 cursor-pointer'>
                            <p className='font-bold'>Continue with</p>
                            <img className='h-4' src='/companies/google.webp' />
                        </div>


                        <div className='flex items-center gap-3 w-full my-5'>
                            <div className='border-t border-gray-700 flex-grow' />
                            <p className='font-semibold text-sm'>Or</p>
                            <div className='border-t border-gray-700 flex-grow' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label className='font-semibold' htmlFor="terms">Email</Label>
                            <Input className="bg-gray-800 h-8" type="email" placeholder="Email" />
                        </div>

                        <div className='mt-5'>
                            <Button type="outline" className="w-full">Continue</Button>
                        </div>



                        <p className='mt-5 text-center'>
                            Don’t have an account? <span className='font-bold'>Sing up</span>
                        </p>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default Signin
