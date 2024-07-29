import React from 'react'
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className='relative w-full'>
        <div>
          <h1 className='absolute uppercase text-5xl top-11 left-80 text-orange-500 font-bold'>
            <a href="/">mealkit</a>
          </h1> 
          {/* 페이지 로고 */}
          <div className='absolute top-2.5 right-96'>
            <ul className='list-none flex'>
              <li className='text-sm text-gray-500'>
                <a href="#">회원가입</a>
              </li>
              <li className='px-3 text-xs text-gray-300'>|</li>
              <li className='text-sm text-gray-500'>
                <a href="#">로그인</a>
              </li>
            </ul>
          </div>
          {/* 회원가입&로그인 */}
          <div className='absolute top-12 left-[700px] text-center'>
            <div className='relative inline-block w-[510px] h-[50px] outline outline-[3px] outline-orange-500 rounded-3xl bg-white pr-[45px] pl-5'>
              <input type='search' 
                    placeholder='상품을 검색하세요.'
                    className='w-full h-[50px] border-0 p-0 text-sm text-[#555] text-left bg-transparent outline-none align-middle'
              />
              <button type='button' 
                    className='absolute  top-3 right-3'
              >
                <FiSearch size={26} style={{ color : 'FF6B00' }}/>
              </button>
            </div>
            {/* search 창 */}
            <div className='absolute top-[54px] left-0 w-full min-h-[100px] bg-white border-solid border-[1px] border-[#666] rounded-2xl'>
              <div className='px-5 pt-[30px] pb-2.5 border-solid border-b-[1px] border-[#666]'>
                <h2 className='text-[#222] text-[15px] text-left font-bold'>인기 검색어</h2>
              </div>
              <div className='px-2.5 overflow-hidden'>
                <ol className='relative list-none float-left w-full'>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>1 대파 육개장</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>2 갈릭 부채살 스테이크</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>3 황태콩나물국밥</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>4 베이컨쉬림프 알리오올리오</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>5 짬뽕</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>6. 라뽁이</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>7 김치찌개</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>8 된장찌개</a>
                  </li>
                  <li className='text-left border-solid border-b-[1px] border-[#e6e6e6] h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>9 파스타</a>
                  </li>
                  <li className='text-left h-[50px]'>
                    <a href="#" className='block text-[#666] py-3.5 pl-[7px] pr-[35px]'>10 부대찌개</a>
                  </li>
                </ol>
              </div>
            </div>
            {/* 인기&최근 검색어창(click->open) */}
          </div>
        </div>
    </header>
  )
}

export default Header