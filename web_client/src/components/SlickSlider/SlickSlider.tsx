'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import useWindowSize from '@/hooks/useWindowSize';

interface IProp {
    slidesToShow: number;
    slidesToScroll: number;
    slidesToShow_sm?: number;
    slidesToScroll_sm?: number;
    slidesToShow_md?: number;
    slidesToScroll_md?: number;
    speed: number;
    infinite?: boolean;
    dots?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    children: React.ReactNode;
}

const SlickSlider: React.FC<IProp> = ({
    slidesToScroll,
    slidesToShow,
    slidesToShow_sm = 1,
    slidesToScroll_sm = 1,
    slidesToShow_md = 1,
    slidesToScroll_md = 2,
    speed,
    infinite = true,
    dots = true,
    arrows = true,
    autoplay = true,
    children,
}) => {
    const { width } = useWindowSize();

    const settings = {
        dots: dots,
        infinite: infinite,
        speed: speed,
        slidesToShow: width <= 768 ? slidesToShow_sm : width >= 1024 ? slidesToShow : slidesToShow_md,
        slidesToScroll: width <= 768 ? slidesToScroll_sm : width >= 1024 ? slidesToScroll : slidesToScroll_md,

        arrows: arrows,
        autoplay: autoplay, // Bật autoplay
        autoplaySpeed: 5000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>{children}</Slider>
        </div>
    );
};

export default SlickSlider;
