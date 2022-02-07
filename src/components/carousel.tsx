// @flow
import * as React from 'react';
import Slider from 'react-slick'

import "slick-carousel/slick/slick.scss";

import "slick-carousel/slick/slick-theme.scss";

type Props = {};

export function Carousel(props: Props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    };
    const images = [
        {
            imageSrc:
                'https://i.ibb.co/dkpHPXQ/1million-ENG.jpg',
        },
        {
            imageSrc:
                'https://i.ibb.co/C0vbNcy/dior-ENG.jpg',
        },
    ]
    return (
        <div className="bg-black mt-20 pt-7 h-full mx-auto px-2 sm:px-6 lg:px-32">
            <Slider {...settings}>
                {images.map((image, index) => {
                    return (
                        <div
                            className=" aspect-w-2  relative  aspect-h-1 h-4/5	"
                            key={index}>
                            <img src={image.imageSrc}
                                 className=" shadow-lg rounded-lg " alt=""/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};