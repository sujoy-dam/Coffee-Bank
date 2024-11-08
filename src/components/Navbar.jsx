import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const nav = <>
        <NavLink className={({isActive})=>`font-bold mr-10 ${isActive?"text-amber-500 underline":"font-bold"}`} to="/">Home</NavLink>
        <NavLink className={({isActive})=>`font-bold mr-10 ${isActive?"text-amber-500 underline":"font-bold"}`} to="/coffee">Coffee</NavLink>
        <NavLink className={({isActive})=>`font-bold ${isActive?"text-amber-500 underline":"font-bold"}`} to="/dashboard">Dashboard</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">COOK_BOOK</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;