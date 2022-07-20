import React, { useEffect, useState } from 'react'
import Carousel from 'react-spring-3d-carousel';
import {config} from 'react-spring';

export default function MyCarousel({ slides, width, height, margin, offset, showArrows}) {
    const table = slides.map((slide, slideIndex) => {
        return {
            ...slide,
            onClick: () => {
                setGoToSlide(slideIndex);
            }
        }
    })
    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrowsState, setShowArrowsState] = useState(false);
    const [goToSlide, setGoToSlide] = useState(null);
    const [MySlides] = useState(table);

    useEffect(() => {
        setOffsetRadius(offset);
        setShowArrowsState(showArrows);
    }, [offset, showArrows])

    return (
        <div className='myCarousel'
            style={{ width, height, margin }}
        >
            <Carousel
                slides={MySlides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrowsState}
                animationConfig={config.gentle}
            />

        </div>
    )
}
