import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Header = () => {

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
                    <h1 className="animate__animated animate__zoomInLeft animate__fast animate__repeat-1 text-3xl h-[48px] ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-amber-400 to-red-400 animate-text">Apple Real Estate</h1>
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
                                    <li ><NavLink to="/about" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">About</span></NavLink></li>
                                    <li><NavLink to="/update" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[168px] h-[48px]"><span className=" text-lg ">Update Profile</span></NavLink></li>
                                    <li><NavLink to="/user" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[160px] h-[48px]"><span className=" text-lg ">User Profile</span></NavLink></li>
                                </> :
                                <>
                                    <li ><NavLink to="/" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Home</span></NavLink></li>
                                    <li ><NavLink to="/about" style={({ isActive }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "grey",
                                        };
                                    }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">About</span></NavLink></li>
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
                            <a onClick={handleLogOut} className="btn w-[120px] h-[48px] bg-[red] hover:bg-[red] text-[#FFFFFF]">Log out</a>
                        </> :
                        <>
                            <NavLink to="/login" className="btn w-[120px] h-[48px] bg-[#23BE0A] hover:bg-[#23BE0A] text-[#FFFFFF]">Log In</NavLink>
                            <NavLink to="/register" className="btn w-[120px] ml-4 h-[48px] bg-[#59C6D2] hover:bg-[#59C6D2] text-[#FFFFFF]">Register</NavLink>
                        </>}
                </div>
            </div>
        </>
    );
};

export default Header;