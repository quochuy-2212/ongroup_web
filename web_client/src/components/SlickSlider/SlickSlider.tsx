'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

interface IProp {
    slidesToShow: number;
    slidesToScroll: number;
    speed: number;
    infinite?: boolean;
    dots?: boolean;
    children: React.ReactNode;
}

const SlickSlider: React.FC<IProp> = ({
    slidesToScroll,
    slidesToShow,
    speed,
    infinite = true,
    dots = true,
    children,
}) => {
    const settings = {
        dots: dots,
        infinite: infinite,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>{children}</Slider>
        </div>
    );
};

export default SlickSlider;
