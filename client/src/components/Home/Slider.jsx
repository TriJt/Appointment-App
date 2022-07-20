import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { memo } from 'react';

const Slider = props => {
    const data = props.data;
    const timeOut = props.timeOut ? props.timeOut : 3000;

    const [activeSlider ,setActiveSlider] = useState(0)
    const handleNext = useCallback(
     () => {
        const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
        setActiveSlider(index)
     },
     [activeSlider, data],
   )
   

    const handlePrev = ()=>{
        const index = activeSlider - 1  < 0  ? data.length - 1  : activeSlider - 1
        setActiveSlider(index)
    }


    useEffect(() => {
      if(props.auto){

          const sliderAuto = setInterval(()=>{
            handleNext()
          },timeOut)
          return () => {
            clearInterval(sliderAuto)
          }
      }
    
     
    }, [handleNext,timeOut , props])
    

  return (
    <div className="slider">
        {
            data.map((item,index)=>(
                <SliderItem key={index} item = {item}  active = {index === activeSlider}/>
            ))
        }
        {
            props.control ?(
                <div className="slider__control">
                    <div className="slider__control--item" onClick={handlePrev}>
                        <ion-icon name="chevron-back-circle-outline"></ion-icon>
                    </div>
                    {/* <div>
                        {activeSlider +1 }/{data.length}
                    </div> */}
                    <div className="slider__control--item" onClick={handleNext}>
                        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                    </div>
                </div>
            ) : null
        }
    </div>
  )
}

Slider.propTypes = {
    data :PropTypes.array.isRequired ,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
    
}

const SliderItem = props => (
    <div className={`slider__item ${props.active ? 'active' : ''}`}>
            <div className="slider__item--image">
                <img src={props.item.img} alt='' />
            </div>
    </div>
)

export default memo(Slider)