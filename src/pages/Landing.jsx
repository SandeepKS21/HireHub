import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import companies from '../data/companies.json';
import Autoplay from 'embla-carousel-autoplay';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function Landing() {

  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>

      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>Find Your Dream Job
          <span className='flex items-center gap-2 sm:gap-2 lg:gap-6'>and get hired

            <img className='h-10 sm:h-15 lg:h-20' alt='hire hub logo' src='/public/logo.png' />
          </span>

        </h1>
        <p className='text-gray-300 sm:mt-4 lg:mt-6 text-xs lg:text-xl'>
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      <div className='flex justify-center gap-6'>
        <Link to={"/jobs"}>
          <Button variant='blue' size='xl'>
            Find Jobs
          </Button>

        </Link>

        <Link to={"/post-job"}>
          <Button variant='destructive' size='xl'>
            Post a job
          </Button>

        </Link>
      </div>

      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">

          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">

              <img src={path} alt={name} className='h-9 sm:h-14 object-contain' />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>



      {/* <img className='w-full' src='../../public/banner.jpg' /> */}


      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">For Job Seekers
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p>Search and apply for jobs, track applications, and more.</p>
          </CardContent>
        </Card>

        <Card>

          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">For Employers</CardTitle>
          </CardHeader>

          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>


      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </main>
  )
}

export default Landing