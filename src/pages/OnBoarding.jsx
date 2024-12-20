import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { SyncLoader } from 'react-spinners';

function OnBoarding() {

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <SyncLoader className='mt-4' width={"100%"} color='#36b7b7' />
  }


  const handleRoleSelection = (role) => {
    console.log('role---', role);
    navigate('/jobs')
  }

  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <h2 className='gradient-title text-7xl font-extrabold sm:text-8xl tracking-tighter'>I am a...</h2>

      <div className='mt-16 grid grid-cols-2 items-center w-full gap-4 md:px-40'>
        <Button variant="blue" className="h-24 text-2xl" onClick={() => handleRoleSelection('candidate')}>Candidate</Button>
        <Button variant="destructive" className="h-24 text-2xl" onClick={() => handleRoleSelection('recruiter')}>Recruiter</Button>
      </div>
    </div>
  )
}

export default OnBoarding