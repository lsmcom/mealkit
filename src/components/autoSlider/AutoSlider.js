import React from 'react'
import './AutoSlider.css'

const AutoSlider = () => {
  return (
    <div className='main-area'>
        <div className='main-slide swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide' style={{width : '1920px'}}>
                <div className='inner-main-swiper'>
                  <a href='#'>
                    <img src='../../images/mealKit_33.jpg'></img>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AutoSlider