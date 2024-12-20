import React from 'react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    experience: z.number().min(1, { message: "Experience must be atleast 1" }).int(),
    skills: z.string().min(1, { message: "Skills are required" }),
    education: z.enum(['intermediate', 'graduate', 'post-graduate'], { message: "Education is required" }),
    resume: z.any().refine(file => file[0] && (file[0].type === "application/pdf" || file[0].type === "application/msword"), { message: "Only PDF or word documents are allowed" })
})

function ApplyJobDrawer() {

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
    });


    const onSubmit = (data) => {
        console.log('data----', data)
    }

    return (
        <Drawer >
            <DrawerTrigger className='mt-5' asChild><Button size='lg' variant='blue'>
                Apply</Button></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Apply for Frontend Developer at Google</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 pb-0'>

                    <div className='flex gap-4 '>
                        <div className='flex flex-col w-full gap-3'>
                            <Input
                                type="number"
                                placeholder="Years of experience"
                                className=""
                                {...register("experience", { valueAsNumber: true })}
                            />

                            {errors.experience && (<p className='text-red-500'>{errors.experience.message}</p>)}
                        </div>

                        <div className='flex flex-col w-full gap-3'>
                            <Input type="text" placeholder="Skills (Comma seprated)" className="flex-1" {...register("skills")} />
                            {errors.skills && (<p className='text-red-500'>{errors.skills.message}</p>)}
                        </div>

                    </div>

                    <Controller

                        name='education'
                        control={control}
                        render={({ field }) => (

                            <RadioGroup onValueChange={field.onChange} {...field}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="intermediate" id="intermediate" />
                                    <Label htmlFor="intermediate" >Intermediate</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="graduate" id="graduate" />
                                    <Label htmlFor="graduate">Graduate</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="post-graduate" id="post-graduate" />
                                    <Label htmlFor="post-graduate">Post Graduate</Label>
                                </div>
                            </RadioGroup>
                        )}
                    />


                    {errors.education && (<p className='text-red-500'>{errors.education.message}</p>)}


                    <Input type="file" accept=".pdf, .doc, .docx" className="flex-1 file:text-gray-500"  {...register('resume')} />
                    {errors.resume && (<p className='text-red-500'>{errors.resume.message}</p>)}


                    <Button size='lg'>Apply</Button>
                </form>


                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default ApplyJobDrawer
