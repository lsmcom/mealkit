import React from 'react'

const Intro = () => {
  return (
      <div className='relative w-full h-44'>
        <div className='fixed right-96 top-2 font-thin text-inherit text-gray-600'>
          <a className='cursor-pointer text-sm'> 회원가입 </a>
          <a className='px-3 text-xs'> | </a>
          <a className='cursor-pointer text-sm'> 로그인 </a>
        </div>
        <a className='absolute text-4xl text-orange-500 font-bold uppercase top-14'> mealkit </a>
      </div>
  )
}

export default Intro