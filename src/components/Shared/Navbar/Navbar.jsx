// import React from 'react';

import { NavLink } from "react-router";

const Navbar = () => {

    const links = <>
        <li>
            <NavLink to={"/"}
                className={({ isActive }) => `font-bold ${isActive ? "text-green-600 border-2 border-green-600 rounded-xl" : ""}`
                }>
                Home
            </NavLink>
        </li>

        <li>
            <NavLink to={"/books"}
                className={({ isActive }) => `font-bold ${isActive ? "text-green-600 border-2 border-green-600 rounded-xl" : ""}`
                }>
                Listed Books
            </NavLink>
        </li>

        <li>
            <NavLink to={"/pageToRead"}
                className={({ isActive }) => `font-bold ${isActive ? "text-green-600 border-2 border-green-600 rounded-xl" : ""}`
                }>
                Pages to Read
            </NavLink>
        </li>
    </>

    return (
        <div className="sticky top-0 z-50 bg-white container mx-auto">

            <div className="navbar bg-base-100 shadow-md shadow-gray-200 rounded-b-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-xl space-y-3">

                            {
                                links
                            }

                        </ul>
                    </div>
                    <h2 className="text-3xl text-sky-500 font-bold ml-3">Book Vibe</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg gap-3">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end mr-3 flex gap-2 items-center">
                    <button
                        className="btn bg-[#23BE0A] hover:bg-[#1fa309] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Success
                    </button>

                    <button
                        className="btn bg-[#59C6D2] hover:bg-[#46b3bf] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Accent
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;