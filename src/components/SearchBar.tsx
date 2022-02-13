// @flow
import * as React from 'react';
import { FcSearch } from "react-icons/fc";


export function SearchBar() {
    return (
      <>
      <div className=" relative   text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 w-80  rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
      </div>
           <button type="submit" className="bg-gray-500  rounded-md active:-translate-y-2  transition-all ease-in	 px-5 pt-1  flex justify-center">
         <span className="text-xl font-medium mr-3 text-white">Search</span> 
         <FcSearch className="scale-150 mt-1 " />   
        </button>
        </>
    );
}; 