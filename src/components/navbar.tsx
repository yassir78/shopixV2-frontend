// @flow
import * as React from 'react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50	bg-black shadow py-4 w-full">
            <div className="flex flex-row justify-between mx-auto px-2 sm:px-6 lg:px-32">
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-8">
                        <a className="text-white  mx-8 pr-5 py-2 rounded-md   text-xl font-medium hover:bg-gray-700 hover:cursor-pointer"
                           aria-current="page">Home</a>

                        <a
                            className="text-white hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer">Perfumes</a>

                        <a
                            className="text-white hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer">Contracts</a>

                    </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-8">
                        <a className="text-white relative  mx-8 py-2 rounded-md active:-translate-y-2 ease-in duration-100	   text-xl font-medium  hover:cursor-pointer"
                           aria-current="page">
                            <svg className="h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                            <span
                                className="absolute top-0 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>

                        </a>

                        <a
                            className="text-white hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer">Perfumes</a>

                        <a
                            className="text-white hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer">Contracts</a>

                    </div>
                </div>

            </div>
        </nav>
    );
};