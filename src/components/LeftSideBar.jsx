import React from 'react'
import { useLocation, Link} from 'react-router-dom'


const LeftSideBar = () => {

  const {pathname} = useLocation()
 
  return (
    <nav className='hidden md:flex flex-col justify-between px-6 py-6 min-w-[270px] bg-gray-900'>
      <div className='flex flex-col gap-5'>
        <Link to="/" className="flex items-center">
          <img
            src="/images/logoimg.svg"
            alt="logo"
            width={50}
            height={50}
            className='invert'
          />
          <span className="px-2 text-white text-3xl">PostX</span>
        </Link>

        <Link to={`/profile/`}
          className='flex gap-3 px-3 items-center'>
          <img
            src='/icons/profile-placeholder.svg'
            alt='profile-photo'
            className='h-9 w-9 rounded-full'
          />
          <div className='flex flex-col'>
            <p className='text-[15px] font-bold leading-[140%] text-white'>
              FULL NAME
            </p>
            <p className='text-[13px] font-normal leading-[140%] text-gray-500'>
              @username
            </p>
          </div>
        </Link>

        <ul className='flec flex-col gap-6'>
              <li key ='Home' className={`transition rounded-lg hover:bg-gray-600 ${pathname === '/' && "bg-gray-600" } `}>
                <Link
                  to='/'
                  className='flex gap-4 items-center my-1 p-3  text-white'
                >
                  <img
                    src='/icons/home.svg'
                    alt='Home'
                  />
                  Home
                </Link>
              </li>
              <li key ='Explore' className={`transition rounded-lg hover:bg-gray-600 ${pathname === '/explore' && "bg-gray-600" }`}>
                <Link
                  to='/explore'
                  className='flex gap-4 items-center my-1 p-3 text-white'
                >
                  <img
                    src='/icons/wallpaper.svg'
                    alt='Explore'
                  />
                  Explore
                </Link>
              </li>
              <li key ='People' className={`transition rounded-lg hover:bg-gray-600 ${pathname === '/allusers' && "bg-gray-600" }`}>
                <Link
                  to='/allusers'
                  className='flex gap-4 items-center my-1 p-3 text-white'
                >
                  <img
                    src='/icons/people.svg'
                    alt='People'
                  />
                  People
                </Link>
              </li>
              <li key ='Saved' className={`transition rounded-lg hover:bg-gray-600 ${pathname === '/saved' && "bg-gray-600" }`}>
                <Link
                  to='/saved'
                  className='flex gap-4 items-center my-1 p-3 text-white'
                >
                  <img
                    src='/icons/bookmark.svg'
                    alt='Saved'
                  />
                  Saved
                </Link>
              </li>
              <li key ='Create Post' className={`transition rounded-lg hover:bg-gray-600 ${pathname === '/createpost' && "bg-gray-600" }`}>
                <Link
                  to='/createpost'
                  className='flex gap-4 items-center my-1 p-3 text-white'
                >
                  <img
                    src='/icons/gallery-add.svg'
                    alt='Create Post'
                  />
                  Create Post
                </Link>
              </li>
            
        </ul>
      </div>
      <button
        className='flex gap-4 items-center p-3 text-white hover:bg-gray-600 rounded-lg'>
          <img src="/icons/logout.svg" alt="Logout" />
          <p>Logout</p>
      </button>
    </nav>
  )
}

export default LeftSideBar