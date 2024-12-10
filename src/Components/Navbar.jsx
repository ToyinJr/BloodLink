import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Logo Section */}
      <Link reloadDocument to="/" className="title">
        <img 
          src="images/logo.png" 
          alt="Website Logo" 
          className="logo"
        />
      </Link>

<<<<<<< HEAD
    return (
        <div className="my-2">
            <div className={`flex justify-around items-center`}>
                <div className={`pt-2`} ><img src="images/logo.png" alt="logo" /></div>

                <div className={`dropdown mr-14 min-[700px]:hidden`}>
                <svg onClick={toggle} className={`h-8 w-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B0A1A"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>

                <div className={`dropdownItems absolute w-[150px] bg-white text-[#8B0A1A] ${show ? "hidden" : "block"}`}>
                <p className={`hover:text-gray-900 hover:cursor-pointer`}>Home</p>
                    <p className={`hover:text-gray-900 hover:cursor-pointer`}>Donate Blood</p>
                    <p className={`hover:text-gray-900 hover:cursor-pointer`}>Receive Blood</p>
                    <p className={`hover:text-gray-900 hover:cursor-pointer`}>Group Donation</p>
                    <p className={`hover:text-gray-900 hover:cursor-pointer`}>About Us</p>
                    <div className={`flex items-center hover:text-gray-900 hover:cursor-pointer`}>Login <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div>
                    <div><button className={`flex items-center hover:text-gray-900`}>Sign Up <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></button></div>

                </div>
                </div>

                <div className={`flex items-center max-[701px]:hidden space-x-4`}>
                    <p className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Home</p>
                    <p className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Donate Blood</p>
                    <p className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Receive Blood</p>
                    <p className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Group Donation</p>
                    <p className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>About Us</p>
                </div>
                
                <div className={`flex items-centerg gap-2 max-[701px]:hidden`}>
                    <div className={`flex items-center cursor-pointer`}>Login <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div>
                    <div><button className={`bg-[#008000] hover:bg-green-600 p-3 rounded-lg flex items-center`}>Sign Up <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></button></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
=======
      {/* Hamburger Menu Icon */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink reloadDocument to="/">Home</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/donate-blood">Donate Blood</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/receive-blood">Receive Blood</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/Groupdonation">Group Donation</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/ImpactDashboard">ImpactDashboard</NavLink>
        </li>
        <li>
          {/* Login with arrow down */}
          <NavLink reloadDocument to="/login">
            Login <span className="arrow">▼</span>
          </NavLink>
        </li>
        <li>
          {/* Sign Up with arrow down */}
          <NavLink reloadDocument to="/signup" className="signup">
            Sign Up <span className="arrow">▼</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
>>>>>>> origin/main
