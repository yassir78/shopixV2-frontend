// @flow
import * as React from 'react';
import {EmptyStar} from "./emptyStar";
import {FilledStar} from "./filledStar";

type Props = {
    rating: number,
};

export function Card(props: Props) {
    const filledStars = props.rating;
    return (

        <div className="bg-white my-3 py-3 px-3 rounded-xl mt-5  flex justify-center">
            <div className="space-y-4  shadow-xl w-64 rounded-lg">
                <div className="aspect-w-2 aspect-h-2 relative">
                    <img className="object-cover shadow-lg w-full min-h-full rounded-lg"
                         src="https://akkarimmobilier.com/wp-content/uploads/2019/11/IMG_20191114_1220582-Copy.jpg"
                         alt=""/>
                </div>
                <div className="px-3 pb-5">
                    <div className=" leading-6  space-y-3 flex flex-col justify-center items-center">
                        <h3 className="text-base font-bold">Magnifique maison type F5</h3>
                        <h3 className="text-base font-semibold">Paco Rabanne
                        </h3>
                        <ul className="flex justify-start">
                            {Array.from(Array(5), (e, i) => {
                                if (i < filledStars) {
                                    return <FilledStar/>
                                } else {
                                    return <EmptyStar/>
                                }
                            })}
                        </ul>
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Show more
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};