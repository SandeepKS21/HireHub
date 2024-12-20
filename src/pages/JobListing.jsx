import JobCard from '@/components/JobCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Country, State, City } from 'country-state-city';
import companies from '../data/companies.json'



function JobListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };


  const handleClearFilter = () => {
    setLocation("");
    setCompany("");
  }

  return (
    <div>
      <h1 className='gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8'>Latest Jobs</h1>

      <form onSubmit={handleSearch} className='h-14 w-full flex gap-2 items-center mb-3'>

        <Input type="text" placeholder="Search job by title..." name="search-query" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="h-full flex-1 px-4 text-2xl" />

        <Button type='submit' variant='blue' className='h-full sm:w-28'>Search</Button>

      </form>

      <div className='flex flex-col sm:flex-row gap-4'>
        <Select value={location} onValueChange={(value) => setLocation(value)}>
          <SelectTrigger >
            <SelectValue placeholder="Select a State" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {State.getStatesOfCountry("IN").map((state) => (
                <SelectItem key={state.name} value={state.name}>{state.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>


        <Select value={company} onValueChange={(value) => setCompany(value)}>
          <SelectTrigger >
            <SelectValue placeholder="Select a Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {companies.map((company) => (
                <SelectItem key={company.name} value={company.name}>{company.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="destructive" className='sm:w-1/2' onClick={handleClearFilter}>Clear filters</Button>
      </div>



      {/* need to add loader here */}

      <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>

    </div>
  )
}

export default JobListing
