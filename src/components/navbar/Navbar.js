import React from 'react'
import './Navbar.css'
import { RiMenu2Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className='main-in'>
        <div className='main-category'>
          <a href='#category-menu' className='category-icon'>
            <RiMenu2Fill className='menu-icon'/>
            <span>카테고리</span>
          </a>
          <nav id='category-menu' className='category-menu'>
            <ul className='category-dep1' style={{display : 'block'}}>
              <li>
                <a href='#'>
                  <i className='all-icon'>
                    <CgMenuGridR />
                  </i>
                  <span className='menu'>전체상품</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>밀키트</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>신제품</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>베스트</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>강력 추천!</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>갑자기 땡긴다면?</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className='main-menu'>
          <ul>
            <li>
              <a href='#'>
                신제품
                <span className='ora-text'>신제품</span>
              </a>
            </li>
            <li>
              <a href='#'>
                베스트
                <span className='ora-text'>베스트</span>
              </a>
            </li>
            <li>
              <a href='#'>
                특가
                <span className='ora-text'>특가</span>
              </a>
            </li>
            <li>
              <a href='#'>
                이벤트
                <span className='ora-text'>이벤트</span>
              </a>
            </li>
            <li>
              <a href='#'>
                선물하기
                <span className='ora-text'>선물하기</span>
              </a>
            </li>
            <li>
              <a href='#'>
                단체주문
                <span className='ora-text'>단체주문</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* main-menu end */}
      </div>
    </div>
  )
}

export default Navbar