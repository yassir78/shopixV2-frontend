// @flow
import * as React from 'react';
import {FiShoppingCart} from "react-icons/fi";
import {BiLogIn} from "react-icons/bi";
import {FaUserFriends} from "react-icons/fa";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50	bg-black shadow py-4 w-full">
            <div className="flex flex-row justify-between mx-auto px-2 sm:px-6 lg:px-32">
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-8">
                        <Link to="/" className="text-white  mx-8 px-5 py-2 rounded-md   text-xl font-medium hover:bg-gray-700 hover:cursor-pointer"
                           aria-current="page">Home</Link>

                        <Link to="/perfumes"
                            className="text-white hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer">Perfumes</Link>

                        <a
                            className="text-white hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer">Contracts</a>

                    </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-8">
                        <a className="text-white relative  mx-8 py-4 rounded-md active:-translate-y-2 ease-in duration-100	   text-xl font-medium  hover:cursor-pointer"
                           aria-current="page">
                            <FiShoppingCart className="scale-150"/>
                            <span
                                className="absolute top-0 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>

                        </a>

                        <Link to="/signUp"
                            className="text-white  active:-translate-y-2 ease-in duration-100 px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer flex ">
                            <BiLogIn className="mt-1 scale-150 mr-5"/> <span>Sign up</span></Link>

                        <a
                            className="text-white  active:-translate-y-2 ease-in duration-100 px-5 py-2 rounded-md text-xl font-medium hover:cursor-pointer flex"><FaUserFriends
                            className="mt-1 scale-150 mr-5"/> <span>Sign up</span></a>

                    </div>
                </div>

            </div>
        </nav>
    );
};