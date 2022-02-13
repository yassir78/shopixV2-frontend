// @flow
import * as React from "react";
import { Perfume } from "../types/Perfume";
import { truncateString } from "../utils/utilities";
import { EmptyStar } from "./emptyStar";
import { FilledStar } from "./filledStar";

type Props = {
  perfume: Perfume;
};

export function Card(props: Props) {
  console.log(`props.perfume: ${props.perfume}`);
  const rating = props.perfume.rating?.rate
    ? Math.floor(props.perfume.rating?.rate)
    : 0;
  return (
    <div className="bg-white my-3 py-3 px-3 rounded-xl mt-5  flex justify-center">
      <div className="space-y-4  shadow-xl w-64 rounded-lg">
        <div className="aspect-w-2 aspect-h-2 relative">
          <img
            className="object-cover shadow-lg h-56 bg-cover bg-center w-full min-h-full rounded-lg"
            src={props.perfume.image}
            alt={props.perfume.title}
          />
        </div>
        <div className="px-3 pb-5">
          <div className=" leading-6  space-y-2 flex flex-col justify-center items-center">
            <h3 className="text-base font-bold">
              {truncateString(props.perfume.title!, 20)}
            </h3>
            <h3 className="text-base font-semibold">Paco Rabanne</h3>
            <ul className="flex justify-start">
              {Array.from(Array(5), (e, i) => {
                // @ts-ignore
                if (i < rating) {
                  return <FilledStar />;
                } else {
                  return <EmptyStar />;
                }
              })}
            </ul>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
