import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import Signin from './Signin'
import { useAuth } from '@/context/AuthContext'

function Header() {

    const { user } = useAuth();

    return (
        <>

            <nav className='flex justify-between items-center py-6'>
                <Link>
                    <img className='h-20' src='../../public/logo.png' />
                </Link>

                {user ? <div className='flex items-center gap-1 sm:gap-10'>

                    {user.type == "recuter" && <Link to={"/post-job"}><Button className="rounded-full" variant="destructive">Post a job</Button></Link>}

                    <img className='h-14 sm:h-16 rounded-full object-cover cursor-pointer' src='../../public/profile.png' />
                </div> : <Signin />}

            </nav>

        </>
    )
}

export default Header
