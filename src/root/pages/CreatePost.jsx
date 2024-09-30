import FileUploader from '../../components/FileUploader'
import React, { useState } from 'react'

const CreatePost = () => {

  return (
    <div className='flex flex-1 overflow-y-auto'>
      <div className='flex flex-col w-full  gap-10 py-10 px-5 md:px-8 lg:p-10 custom-scroolbar'>
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/icons/gallery-add.svg"
          width={40}
          height={40}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full text-3xl font-bold">Create Post</h2>
        </div>

        <div>
          <form>
            <div className='py-2' >
              <label className='text-lg block my-1 ' htmlFor="caption">
                Caption
              </label>
              <textarea
                id='caption'
                className='text-xm resize-none bg-zinc-900 border-2 border-black rounded-xl h-28 w-full py-2 px-4 focus:outline-none focus:border-blue-500' />
            </div>


            <div className='py-2' >
              <label className='text-lg block my-1 ' htmlFor="photo">
                Add Photos
              </label>
              <FileUploader/>
            </div>

            <div className='py-2' >
              <label className='text-lg block my-1 ' htmlFor="location">
                Add Location
              </label>
              <input
                id='location'
                className='text-xm bg-zinc-900 border-2 border-black rounded-xl w-full py-2 px-4 focus:outline-none focus:border-blue-500'
                />
            </div>

            <div className='py-2' >
              <label className='text-lg block my-1 ' htmlFor="tags">
                Add Tags (separated by comma ' , ')
              </label>
              <input
                id='tags'
                placeholder='Art, Design, Fashion, etc...'
                className='text-xm bg-zinc-900 border-2 border-black rounded-xl w-full py-2 px-4 focus:outline-none focus:border-blue-500'
                />
            </div>

            <div className='flex justify-end my-10'>
              <button
                type='button'
                className='bg-indigo-800 text-white font-semibold py-2 px-4 mx-4 rounded-lg'>Cancel
              </button>
              <button
                type='submit'
                className='bg-indigo-800 text-white font-semibold py-2 px-4 mx-4 rounded-lg'>Submit
              </button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default CreatePost