import React, { useCallback, useState } from 'react'
export default function FileUploader(){
    return (
        <div  className='flex flex-center flex-col rounded-xl cursor-pointer bg-zinc-900 items-center'>
                    <div className='flex flex-col items-center justify-center h-72 p-7'>
                        <img
                            src="/icons/file-upload.svg"
                            width={96}
                            height={77}
                            alt="file-upload"
                            className=''
                        />
                        <h3 className='text-center mb-2 mt-6'>Drag Photo here</h3>
                        <p className='text-sm text-center'>SVG, PNG, JPG</p>
                        <button
                            type='button'
                            className='bg-indigo-800 text-white font-semibold py-2 px-4 m-4 rounded-lg'>Select from the Device
                        </button>
                    </div>
                


            
        </div>
    )
}

