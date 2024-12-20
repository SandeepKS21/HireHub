import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Boxes, BriefcaseBusiness, Download, School } from 'lucide-react'

function ApplicationCard() {

    const handleDownload = () => {
        console.log('object')
        const link = document.createElement('a');
        // link.href=ap //file link
        link.target = "_blank";
        link.click();

    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    Sandeep Kumar singh

                    <Download className='cursor-pointer' onClick={handleDownload} />
                </CardTitle>
            </CardHeader>


            <CardContent className='flex flex-col gap-4 flex-1'>
                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='flex gap-2 items-center'>
                        <BriefcaseBusiness size={15} /> 2 Years of experience
                    </div>

                    <div className='flex gap-2 items-center'>
                        <School size={15} />Graduate
                    </div>

                    <div className='flex gap-2 items-center'>
                        <Boxes size={15} />React.js, Node.js, SQL, MongoDB
                    </div>
                </div>
                <hr />
            </CardContent>

            <CardFooter className='flex justify-between'>
                <span>  {new Date().toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true, // Ensures 12-hour format with AM/PM
                })}</span>

                <span className='font-bold'>Status: Applied</span>
            </CardFooter>
        </Card>
    )
}

export default ApplicationCard
