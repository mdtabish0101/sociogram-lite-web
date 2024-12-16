import React from 'react'

const Loader = () => {
  return (
    <>
    <div className='absolute top-1/2 -translate-x -translate-y z-10'>
        <div className='h-16 w-16 border-gray-200 border-4 rounded-full border-t-secondary animate-spin'>
        </div>
    </div>
    </>
  )
}

export default Loader