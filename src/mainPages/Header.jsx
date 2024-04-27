import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import 'animate.css';
import { IoEarthOutline } from "react-icons/io5";
import { useEffect, useState } from 'react'

const Header = () => {
    const [theme, setTheme] = useState('light')

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className="navbar bg-base-100 w-[1210px]">
                <div className="navbar-start">
                    <IoEarthOutline className="w-[35px] h-[40px]" />
                    <h1 className="animate__animated animate__zoomInLeft animate__fast animate__repeat-1 text-3xl h-[48px] ml-2 mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-800 via-teal-700 to-slate-600 animate-text">Your Travel</h1>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 gap-x-4">
                        {
                            user ?
                                <>
                                    <li ><NavLink to="/" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Home</span></NavLink></li>
                                    <li><NavLink to="/yours-spots" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[160px] h-[48px]"><span className=" text-lg ">Your Spots</span></NavLink></li>
                                </> :
                                <>
                                    <li ><NavLink to="/" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Home</span></NavLink></li>
                                </>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <div className="mr-3 avatar tooltip tooltip-hover" data-tip={user.displayName}>
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-y-1 shadow bg-base-100 rounded-box w-[135px]">
                                    <li><a onClick={handleLogOut} className="btn w-[120px] h-[48px] bg-[red] hover:bg-[red] text-[#FFFFFF]">Log out</a></li>
                                    <li><NavLink to="/user-profile" className="btn w-[120px] h-[48px] bg-[blue] hover:bg-[blue] text-[#FFFFFF]">Your Profile</NavLink></li>
                                </ul>
                            </div>
                        </> :
                        <>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-y-1 shadow bg-base-100 rounded-box w-[135px]">
                                    <li><NavLink to="/login" className="btn w-[120px] h-[48px] bg-[#23BE0A] hover:bg-[#23BE0A] text-[#FFFFFF]">Log In</NavLink></li>
                                    <li><NavLink to="/register" className="btn w-[120px] h-[48px] bg-[#59C6D2] hover:bg-[#59C6D2] text-[#FFFFFF]">Register</NavLink></li>
                                </ul>
                            </div>
                        </>}
                </div>
                <div className="ml-3">
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleToggle} className="theme-controller" />

                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </>
    );
};

export default Header;