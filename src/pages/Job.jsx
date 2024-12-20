import ApplicationCard from '@/components/ApplicationCard';
import ApplyJobDrawer from '@/components/ApplyJobDrawer';
import MDEditor from '@uiw/react-md-editor'
import { Briefcase, DoorOpenIcon, MapPin } from 'lucide-react'
import React from 'react'



const jobsRequirement = `<ul>
    <li><strong>Technical Expertise</strong>: Proficiency in relevant technical skills and a strong foundation in computer science principles.</li>
    <li><strong>Problem-Solving Abilities</strong>: Capacity to tackle complex challenges with innovative solutions.</li>
    <li><strong>Adaptability</strong>: Willingness to learn, grow, and adjust to new situations and technologies.</li>
    <li><strong>Team Collaboration</strong>: Ability to work effectively within diverse teams, emphasizing communication and cooperation.</li>
    <li><strong>Leadership Qualities</strong>: Demonstrated leadership, even in non-traditional settings, showcasing initiative and influence.</li>
    <li><strong>Passion for Innovation</strong>: Enthusiasm for contributing to cutting-edge projects and driving technological advancements.</li>
    <li><strong>Alignment with Company Values</strong>: Understanding and embodiment of Google's mission and culture.</li>
</ul>`;

const jobsDes = "Google is seeking a highly skilled and motivated Software Development Engineer II to join our dynamic team. In this role, you will design, develop, and maintain scalable software solutions, leveraging your strong coding and problem-solving skills. Collaborate with cross-functional teams to build innovative products that impact millions of users worldwide.";

function Job() {



  return (
    <div className='flex flex-col gap-8 mt-5'>

      <div className='flex flex-col-reverse gap-6 md:flex-row justify-between items-center'>
        <h1 className='gradient-title text-4xl font-extrabold pb-3 sm:text-6xl'>Frontend Developer</h1>
        <img className='h-12' src='/companies/google.webp' />
      </div>

      <div className='mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8'>
        <div className='flex items-center gap-2'>
          <MapPin />
          <p className='sm:text-xl'>Delhi</p>
        </div>

        <div className='flex items-center gap-3'>
          <Briefcase />
          <p className='text-xl'>0 Applications</p>
        </div>

        <div className='flex items-center gap-3'>
          <DoorOpenIcon />
          <p className='text-xl'>Open</p>
        </div>
      </div>


      <h2 className='text-2xl sm:text-3xl font-bold'>About the job status</h2>
      <p className='sm:text-lg'>{jobsDes}</p>

      <h2 className='text-2xl sm:text-3xl font-bold'>What we are looking for</h2>

      <MDEditor.Markdown source={jobsRequirement} className='bg-transparent sm:text-lg' />

      <ApplyJobDrawer />
      
      <h2 className='text-2xl sm:text-3xl font-bold'>Application</h2>
      <ApplicationCard />
    </div>

  )
}

export default Job
