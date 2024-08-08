import React, { useRef, useState } from 'react'
import './Navbar.css'
import { RiMenu2Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdArrowDropleft } from "react-icons/io";

const Navbar = () => {

  // 카테고리 메뉴 관련 
  const [isCategoryShow, setIsCategoryShow] = useState(false);
  const categoryRef = useRef(null);
  const dep1Ref = useRef(null);

  // 밀키트 메뉴 관련
  const [isMealKitMenuShow, setIsMealKitMenuShow] = useState(false);
  const mealKitRef = useRef(null);
  const mealKitMenuRef = useRef(null);

  // 갑자기 땡긴다면? 메뉴 관련
  const [isCravingMenuShow, setIsCravingMenuShow] = useState(false);
  const cravingRef = useRef(null);
  const cravingMenuRef = useRef(null);

  // 강력 추천! 메뉴 관련
  const [isSuggestMenuShow, setIsSuggestMenuShow] = useState(false);
  const suggestRef = useRef(null);
  const suggestMenuRef = useRef(null);

  // 카테고리 메뉴 마우스 핸들러
  const handleMouseEnterDiv = ()=>{
    setIsCategoryShow(true);
  }

  const handleMouseLeaveDiv = ()=>{
    setTimeout(()=>{
      if(
        !categoryRef.current.matches(':hover') &&
        !dep1Ref.current.matches(':hover')
      ){
        setIsCategoryShow(false)
      }
    }, 100)
  }

  // 밀키트 메뉴 마우스 핸들러
  const handleMouseEnterMealKit = ()=>{
    setIsMealKitMenuShow(true);
  }

  const handleMouseLeaveMealKit = (event)=>{
    setTimeout(()=>{
      if(
        !mealKitRef.current.matches(':hover') &&
        !mealKitMenuRef.current.matches(':hover')
      ){
        setIsMealKitMenuShow(false);
      }
    }, 100)
  }

  // 갑자기 땡긴다면? 메뉴 마우스 핸들러
  const handleMouseEnterCraving = ()=>{
    setIsCravingMenuShow(true);
  }

  const handleMouseLeaveCraving = (event)=>{
    setTimeout(()=>{
      if(
        !cravingRef.current.matches(':hover') &&
        !cravingMenuRef.current.matches(':hover')
      ){
        setIsCravingMenuShow(false);
      }
    }, 100)
  }

  // 강력 추천! 메뉴 마우스 핸들러
  const handleMouseEnterSuggest = ()=>{
    setIsSuggestMenuShow(true);
  }

  const handleMouseLeaveSuggest = ()=>{
    setTimeout(()=>{
      if(
        !suggestRef.current.matches(':hover') &&
        !suggestMenuRef.current.matches(':hover')
      ){
        setIsSuggestMenuShow(false);
      }
    }, 100)
  }

  return (
    <div className='main-nav'>
      <div className='main-in'>
        <div className='main-category'
          ref={categoryRef}
          onMouseEnter={handleMouseEnterDiv}
          onMouseLeave={handleMouseLeaveDiv}
        >
          <a href='#category-menu' className='category-icon'>
            <RiMenu2Fill className='menu-icon'/>
            <span>카테고리</span>
          </a>
          <nav id='category-menu' className='category-menu'>
            <ul className='category-dep1' 
              style={{display : isCategoryShow ? 'block' : 'none'}}
              ref={dep1Ref}
              onMouseEnter={handleMouseEnterDiv}
              onMouseLeave={handleMouseLeaveDiv}
            >
              <li>
                <a href='#'>
                  <i className='all-icon'>
                    <CgMenuGridR />
                  </i>
                  <span className='menu'>전체상품</span>
                </a>
              </li>
              <li
                ref={mealKitRef}
                onMouseEnter={handleMouseEnterMealKit}
                onMouseLeave={handleMouseLeaveMealKit}
              >
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>밀키트</span>
                  <i className='dep1-arrow'
                      ref={mealKitRef}
                      style={{ display : isMealKitMenuShow ? 'block' : 'none'}}
                      onMouseEnter={handleMouseEnterMealKit}
                      onMouseLeave={handleMouseLeaveMealKit}>
                      <IoMdArrowDropleft />
                  </i> 
                </a>
                <ul className='category-dep2'
                  ref={mealKitMenuRef}
                  style={{ display : isMealKitMenuShow ? 'block' : 'none'}}
                  onMouseEnter={handleMouseEnterMealKit}
                  onMouseLeave={handleMouseLeaveMealKit}
                >
                  <li>
                    <a href='#'>
                      <span>전체</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>양식</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>한식</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>중식</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>일식</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>분식</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>동남아</span>
                    </a>
                  </li>
                </ul>
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
              <li
                ref={cravingRef}
                onMouseEnter={handleMouseEnterCraving}
                onMouseLeave={handleMouseLeaveCraving}
              >
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>갑자기 땡긴다면?</span>
                  <i className='dep1-arrow'
                      ref={cravingMenuRef}
                      style={{ display : isCravingMenuShow ? 'block' : 'none'}}
                      onMouseEnter={handleMouseEnterCraving}
                      onMouseLeave={handleMouseLeaveCraving}>
                    <IoMdArrowDropleft />
                  </i>
                </a>
                <ul className='category-dep2'
                  ref={cravingMenuRef}
                  style={{ display : isCravingMenuShow ? 'block' : 'none'}}
                  onMouseEnter={handleMouseEnterCraving}
                  onMouseLeave={handleMouseLeaveCraving}
                >
                  <li>
                    <a href='#'>
                      <span>전체</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>진한 국물</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>화끈한 맛</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>바삭한 맛</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>산뜻한 맛</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li
                ref={suggestRef}
                onMouseEnter={handleMouseEnterSuggest}
                onMouseLeave={handleMouseLeaveSuggest}
              >
                <a href='#'>
                  <i className='all-icon'></i>
                  <span className='menu'>강력 추천!</span>
                  <i className='dep1-arrow'
                      ref={suggestRef}
                      style={{ display : isSuggestMenuShow ? 'block' : 'none'}}
                      onMouseEnter={handleMouseEnterSuggest}
                      onMouseLeave={handleMouseLeaveSuggest}>
                    <IoMdArrowDropleft />
                  </i>       
                </a>
                <ul className='category-dep2'
                  ref={suggestMenuRef}
                  style={{ display : isSuggestMenuShow ? 'block' : 'none'}}
                  onMouseEnter={handleMouseEnterSuggest}
                  onMouseLeave={handleMouseLeaveSuggest}
                >
                  <li>
                    <a href='#'>
                      <span>전체</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>밥도둑템</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>고기먹는날</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>지갑구원템</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>브런치TIME</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>핫플맛집</span>
                    </a>
                  </li>
                </ul>
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