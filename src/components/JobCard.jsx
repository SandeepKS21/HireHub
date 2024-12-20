import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Heart, MapPinIcon, TrashIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'


const jobsDes = "Google is seeking a highly skilled and motivated Software Development Engineer II to join our dynamic team. In this role, you will design, develop, and maintain scalable software solutions, leveraging your strong coding and problem-solving skills. Collaborate with cross-functional teams to build innovative products that impact millions of users worldwide"

function JobCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">Frontend Developer

                    {/* <TrashIcon color='red' size={18} className='text-red-300 cursor-pointer' /> */}

                </CardTitle>

            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className='flex justify-between items-center'>
                    <img src='/companies/google.webp' className='h-6' />

                    <div className='flex gap-4 items-center'>
                        <MapPinIcon size={18} />
                        <p>Delhi</p>
                    </div>
                </div>

                <hr />

                <p >{jobsDes.substring(0, jobsDes.indexOf('.'))}</p>
            </CardContent>
            <CardFooter className="flex gap-2 ">
                <Link to={"/job/google-job-3w422tv"} className='flex-1'>
                    <Button className="w-full" variants="secondary" >More details</Button>
                </Link>

                {/* <Heart size={20} stroke='red' fill='red' /> */}


            </CardFooter>
        </Card>

    )
}

export default JobCard
