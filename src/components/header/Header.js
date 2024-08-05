import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { FiSearch } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const Header = () => {
  const searchRef = useRef()
  const [isShow, setIsShow] = useState(false);

  const [searchData, setSearchData] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(()=>{
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches'));
    if (storedSearches) {
      setRecentSearches(storedSearches)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches])

  // 검색어를 추가하는 함수
  const searchHandle = ()=>{
    if (searchData.trim() && !recentSearches.includes(searchData)) {
      setRecentSearches([searchData, ...recentSearches])
      setSearchData(''); // 입력필드 초기화
    }
  }

  // Enter 키 함수
  const enterHandle = (e)=>{
    if (e.key === 'Enter'){
      searchHandle();
    }
  }

  // 개별삭제
  const deleteRecentData = (data)=>{
    const updateRecent = recentSearches.filter(item => item !== data);
    setRecentSearches(updateRecent);
  }

  // 전체 삭제
  const clearRecentSearch = ()=>{
    setRecentSearches([]);
    localStorage.removeItem('recentSearches')
  }

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
                    ref={searchRef}
                    onFocus={()=>setIsShow( true )}
                    onBlur={()=>setIsShow( false )}
                    value={searchData}
                    onChange={(e)=>setSearchData(e.target.value)}
                    onKeyDown={enterHandle}
              />
              <button type='button' 
                    className='search-btn'
                    onClick={searchHandle}
              >
                <FiSearch size={26} style={{ color : 'FF6B00' }}/>
              </button>
          </div>
          {/* search 창 */}
          <div className={isShow ? 'search-layer on' : 'search-layer'}>
            <div className='popular'>
                <h2>인기 검색어</h2>
            </div>
            <div className='popular-rank'>
                <ol className='list'>
                  <li>
                    <a href="#">
                      <span className='num'>1</span>
                      <span className='productName'>대파 육개장</span>
                      <span className='state text-green'>NEW</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>2</span>
                      <span className='productName'>갈릭 부채살 스테이크</span>
                      <span className='state'>-</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>3</span>
                      <span className='productName'>황태콩나물국밥</span>
                      <span className='state text-green'>NEW</span>
                    </a>
                  </li>
                  <li>
                    <a href="href">
                      <span className='num'>4</span>
                      <span className='productName'>베이컨쉬림프 알리오올리오</span>
                      <span className='state text-green'>NEW</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>5</span>
                      <span className='productName'>짬뽕</span>
                      <span className='state text-blue flex justify-between'>
                        <FaCaretDown className='down-icon' />
                        2
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>6</span>
                      <span className='productName'>라뽁이</span>
                      <span className='state'>-</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>7</span>
                      <span className='productName'>김치찌개</span>
                      <span className='state text-orange flex justify-between'>
                        <FaCaretUp className='up-icon' />
                        2
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>8</span>
                      <span className='productName'>된장찌개</span>
                      <span className='state text-green'>NEW</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>9</span>
                      <span className='productName'>파스타</span>
                      <span className='state text-green'>NEW</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className='num'>10</span>
                      <span className='productName'>부대찌개</span>
                      <span className='state text-green'>NEW</span>
                    </a>
                  </li>
                </ol>
            </div>
            {/* 인기&최근 검색어창(click->open) */}
            <div className='recent-search'>
                <div className='recent'>
                  <h3>최근검색어</h3>
                  <button className='search-delete'
                    style={recentSearches.length > 0 ? {display : 'block'} : {display : 'none'}}
                    onClick={clearRecentSearch}
                  >
                    <span>전체삭제</span>
                  </button>
                </div>
                <div className='recent-layer'>
                  {/* 검색어 있는 경우 */}
                  <ul className='recent-list'>
                    {
                      recentSearches.map((item, index) => (
                        <li key={index}>
                          <div className='recent-word'>
                            <a href='#' className='text'>{item}</a>
                            <button className='recent-text-del'
                              onClick={()=> deleteRecentData(item)}
                            >
                              <FaX className='x-del-icon'/>
                            </button>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                  {/* 검색어 없는 경우 */}
                  <div className='no-data'
                    style={recentSearches.length > 0 ? {display : 'none'} : {display : 'block'}}
                  >
                    <FaRegCircleXmark className='x-mark'/>
                    최근 검색어가 없습니다.
                  </div>
                </div>
            </div>
            {/* 최근검색어 */}
          </div>
          {/* 검색레이어 */}
        </div>
        {/* search부분 */}
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