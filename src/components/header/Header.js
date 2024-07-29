import React from 'react'
import './Header.css'
import { FiSearch } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-in'>
        <h1 className='logo'>
            <a href="/">mealkit</a>
        </h1> 
        {/* 페이지 로고 */}
        <div className='join'>
            <ul>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">로그인</a>
              </li>
            </ul>
        </div>
        {/* 회원가입&로그인 */}
        <div className='search'>
          <div className='search-in'>
              <input type='search' 
                    placeholder='상품을 검색하세요.'
                    className='search-input'
              />
              <button type='button' 
                    className='search-btn'
              >
                <FiSearch size={26} style={{ color : 'FF6B00' }}/>
              </button>
          </div>
          {/* search 창 */}
          <div className='search-layer'>
            <div className='popular'>
                <h2>인기 검색어</h2>
            </div>
            <div className='popular-rank'>
                <ol className='list'>
                  <li>
                    <a href="#">1 대파 육개장</a>
                  </li>
                  <li>
                    <a href="#">2 갈릭 부채살 스테이크</a>
                  </li>
                  <li>
                    <a href="#">3 황태콩나물국밥</a>
                  </li>
                  <li>
                    <a href="#">4 베이컨쉬림프 알리오올리오</a>
                  </li>
                  <li>
                    <a href="#">5 짬뽕</a>
                  </li>
                  <li>
                    <a href="#">6. 라뽁이</a>
                  </li>
                  <li>
                    <a href="#">7 김치찌개</a>
                  </li>
                  <li>
                    <a href="#">8 된장찌개</a>
                  </li>
                  <li>
                    <a href="#">9 파스타</a>
                  </li>
                  <li>
                    <a href="#">10 부대찌개</a>
                  </li>
                </ol>
            </div>
            {/* 인기&최근 검색어창(click->open) */}
            <div className='recent-search'>
                <div className='recent'>
                  <h3>최근검색어</h3>
                  <button className='search-delete'>
                    <span>전체삭제</span>
                  </button>
                </div>
                <div className='recent-layer'>
                  {/* 검색어 있는 경우 */}
                  {/* 검색어 없는 경우 */}
                  <div className='no-data'>
                    <FaRegCircleXmark className='x-mark'/>
                    최근 검색어가 없습니다.
                  </div>
                </div>
            </div>
            {/* 최근검색어 */}
          </div>
        </div>
        {/* 검색레이어 */}
        <div className='my-menu'>
          <ul>
            <li>
              <a href='#'>
                <a>
                  <MdOutlineContactPage className='my-page-icon'/>
                </a>
              </a>
            </li>
            <li>
              <a href='#'><FaBasketShopping className='basket-icon'/></a>
            </li>
          </ul>
        </div>
        {/* 마이메뉴 */}
      </div>
    </header>
  )
}

export default Header