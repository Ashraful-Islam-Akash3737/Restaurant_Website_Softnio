import { NavLink } from "react-router-dom";
import NavLogo from '../../assets/logo/logo.png'
import './NavBar.css'

const NavBar = () => {

    const navLinks = <>
        <li className="font-[raleway]"><NavLink className="font-medium text-sm md:text-[15px]  text-white" to="/">Home</NavLink></li>

        <li className="font-[raleway]"><NavLink className="font-medium text-sm md:text-[15px]  text-white" to="/about">About</NavLink></li>

        <li className="font-[raleway]"><NavLink className="font-medium text-sm md:text-[15px]  text-white" to="/portfolio">Portfolio</NavLink></li>

        <li className="font-[raleway]"><NavLink className="font-medium text-sm md:text-[15px]  text-white" to="/clients">Clients</NavLink></li>

        <li className="font-[raleway]"><NavLink className="font-medium text-sm md:text-[15px]  text-white" to="/blog">Blog</NavLink></li>

        <li className="font-[raleway]"><NavLink className="font-medium text-sm md:text-[15px]  text-white" to="/contact">Contact</NavLink></li>


    </>
    return (
        <div className="navbar bg-[red] px-7">
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
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-4/12 md:w-2/12 lg:w-3/12" src={NavLogo} alt="" />
                    <h4 className="text-white pl-1 font-semibold text-2xl md:text-4xl font-[poppins] lg:text-4xl">Restau<span className="font-normal">rant</span></h4>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="hidden md:block">
                    <a className="btn font-[roboto] font-bold text-[16px] my-auto px-6 py-[10px] text-black rounded-none bg-[#FEBF00] border-none ">BOOK A TABLE</a>
                </div>

            </div>
        </div>
    );
};

export default NavBar;