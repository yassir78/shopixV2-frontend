// @flow
import * as React from 'react';
import Slider from "react-slick";
import {brandsItem1, brandsItem2, brandsItem3} from "./SliderBrandData";


export function SliderBrand() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow: 6,
        arrows: false,

    };
    return (
        <div className="mx-auto py-6 px-2 sm:px-6 lg:px-32">
            <div className="text-center">
                <h1 className="text-3xl font-semibold">BRANDS</h1>
                    <Slider {...settings}>
                        {brandsItem1.map((brandType, index) => {
                            return (
                                <div
                                    className=" aspect-w-2  focus:outline-none  relative  aspect-h-1 h-4/5	"
                                    key={index}>
                                    <img src={brandType.url}
                                         className=" px-5  rounded-lg " alt=""/>
                                </div>
                            )
                        })}
                        {brandsItem2.map((brandType, index) => {
                            return (
                                <div
                                    className=" aspect-w-2 focus:outline-none relative  aspect-h-1 h-4/5	"
                                    key={index}>
                                    <img src={brandType.url}
                                         className="   rounded-lg " alt=""/>
                                </div>
                            )
                        })}
                        {brandsItem3.map((brandType, index) => {
                            return (
                                <div
                                    className=" aspect-w-2 focus:outline-none relative  aspect-h-1 h-4/5	"
                                    key={index}>
                                    <img src={brandType.url}
                                         className="   rounded-lg " alt=""/>
                                </div>
                            )
                        })}
                    </Slider>
            </div>
        </div>

    );
};