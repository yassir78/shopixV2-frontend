// @flow
import * as React from 'react';
import Slider from "react-slick";
import {Card} from "../card";

type Props = {};

export function PerfumesCardSlider(props: Props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className="mb-5 py-6 px-2 sm:px-6 lg:px-32">
            <div className="text-center">
                <h1 className="text-3xl font-semibold">PERSONALLY RECOMMENDED</h1>
            </div>
            <Slider {...settings}>
                {
                    Array.from(Array(9), (e, i) => {
                        return <Card rating={i}/>
                    })
                }
            </Slider>
        </div>

    );
};