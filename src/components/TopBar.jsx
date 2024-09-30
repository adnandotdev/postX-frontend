import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
   
  return (
    <section className="sticky top-0 z-50 md:hidden bg-gray-900 w-full">
        <div className="flex justify-between py-1 px-5">
            <Link to="/" className="flex items-center py-1">
                <img 
                src="/images/logoimg.svg"
                alt ="logo"
                width ={35}
                height={35}
                className='invert'
                /> 
                <span className="px-2 text-white text-lg">PostX</span>  
            </Link>
            

            <div className='flex gap-4 items-center'>
                 <button>
                    <img src="/icons/logout.svg" alt="Logout" />
                 </button>
                 <Link to={`/profile/`} className='flex-center gap-3'>
                    <img
                    src={'/icons/profile-placeholder.svg'} 
                    alt='profile'
                    className='h-8 w-8 rounded-full'/>
                 </Link>
            </div>
        </div>
    </section>
  )
}

export default TopBar