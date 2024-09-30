
import { Link } from 'react-router-dom'

const BottomBar = () => {
  
  return (
    <section className='flex text-white justify-between z-50 w-full sticky bottom-0  bg-gray-800 px-2 py-1 md:hidden
    '>
        
              <Link
                to='/'
                key='Home'
                className={`transition rounded-lg p-2 flex flex-col items-center hover:bg-gray-600 `}
              >
                <img
                  src='/icons/home.svg'
                  alt='Home'
                />
                <p className='text-xs'>Home</p>
              </Link>

              <Link
                to='/explore'
                key='Explore'
                className={`transition rounded-lg p-2 flex flex-col items-center hover:bg-gray-600 `}
              >
                <img
                  src='/icons/wallpaper.svg'
                  alt='Explore'
                />
                <p className='text-xs'>Explore</p>
              </Link>

              <Link
                to='/saved'
                key='Saved'
                className={`transition rounded-lg p-2 flex flex-col items-center hover:bg-gray-600 `}
              >
                <img
                  src='/icons/bookmark.svg'
                  alt='Saved'
                />
                <p className='text-xs'>Saved</p>
              </Link>

              <Link
                to='/createpost'
                key='Create'
                className={`transition rounded-lg p-2 flex flex-col items-center hover:bg-gray-600 `}
              >
                <img
                  src='/icons/gallery-add.svg'
                  alt='Create'
                />
                <p className='text-xs'>Create</p>
              </Link>
              
          
    </section>


  )
}

export default BottomBar