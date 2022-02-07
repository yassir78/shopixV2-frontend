// @flow
import * as React from 'react';
import {Carousel} from "../components/carousel";
import {SliderBrand} from "../components/SliderBrand/SliderBrand";
import {PerfumesCardSlider} from "../components/PerfumeCardsSlider/PerfumesCardSlider";


export function Home() {
    return (
        <div className="">
            <Carousel/>
            <SliderBrand/>
            <div className="mx-auto mt-10 py-6 px-2 sm:px-6 lg:px-32">
                <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-6 ">
                        <img className="rounded-lg shadow-lg " src="https://i.ibb.co/jMmJs60/Them-Woman-ENG.jpg"
                             alt=""/>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <img className="rounded-lg shadow-lg" src="https://i.ibb.co/mJGKz8c/Them-Man-ENG.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <PerfumesCardSlider/>
        </div>
    );
};