import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import "../Components/pages/LoginOptions.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  let [modalLogin, init] = useState(true)
  const modalLoginRef = useRef(null);
  const toggleButtonLoginRef = useRef(null);

  let [modalSignUp, init2] = useState(true)
  const modalSignUpRef = useRef(null);
  const toggleButtonSignUpRef = useRef(null);

  let toggle = () => {
      init(!modalLogin);
  }

  let toggle2 = () => {
    init2(!modalSignUp);
}

  const handleClickOutside = (event) => {
    // Prevent closing the modal if the click is on the toggle button or inside the modal
    if (
      modalLoginRef.current && !modalLoginRef.current.contains(event.target) &&
      toggleButtonLoginRef.current && !toggleButtonLoginRef.current.contains(event.target)
    ) {
      init(true); // Hide the modal
    }
  };

  const handleClickOutside2 = (event) => {
    // Prevent closing the modal if the click is on the toggle button or inside the modal
    if (
      modalSignUpRef.current && !modalSignUpRef.current.contains(event.target) &&
      toggleButtonSignUpRef.current && !toggleButtonSignUpRef.current.contains(event.target)
    ) {
      init2(true); // Hide the modal
    }
  };

  useEffect(() => {
    if (!modalLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalLogin]);

  useEffect(() => {
    if (!modalSignUp) {
      document.addEventListener("mousedown", handleClickOutside2);
    } else {
      document.removeEventListener("mousedown", handleClickOutside2);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, [modalSignUp]);

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
          <NavLink ref={toggleButtonLoginRef} onClick={toggle}>
            Login <span className="arrow">▼</span>
          </NavLink>
        </li>
        <li>
          {/* Sign Up with arrow down */}
          <NavLink ref={toggleButtonSignUpRef} className="signup" onClick={toggle2}>
            Sign Up <span className="arrow">▼</span>
          </NavLink>
        </li>
      </ul>

      <div ref={modalLoginRef} className={`pt-10 md:absolute top-[40vh] mx-5 md:right-[30vh] lg:right-[80vh] ${modalLogin? "hidden" : "block"}`}>
          <div className="Sign-options-container bg-[#8b0a19fa] w-fit p-4 rounded-lg place-self-center">
      <div className="Sign-option">
        <Link reloadDocument to="/LoginForm" className="Login-link">
          <div className="link-content">
            <img 
              src="../images/postive.png" 
              alt="Donor Icon" 
              className="icon donor-icon" 
            />
            <span className="text">Login as a Donor</span>
          </div>
        </Link>
      </div>
      <div className="login-option">
        <Link reloadDocument to="/LoginForm" className="Login-link">
          <div className="link-content">
            <img 
              src="../images/negavtive.png" 
              alt="Recipient Icon" 
              className="icon recipient-icon" 
            />
            <span className="text">Login as a Recipient</span>
          </div>
        </Link>
      </div>
    </div>
    </div>

    <div ref={modalSignUpRef} className={`pt-10 md:absolute top-[40vh] mx-5 md:right-[30vh] lg:right-[80vh] ${modalSignUp? "hidden" : "block"}`}>
          <div className="Sign-options-container bg-[#8b0a192f] w-fit p-4 rounded-lg place-self-center">
      <div className="Sign-option">
        <Link reloadDocument to="/donate-blood#donateBlood" className="signup-link">
          <div className="link-content">
            <img 
              src="../images/postive.png" 
              alt="Donor Icon" 
              className="icon donor-icon" 
            />
            <span className="text">Signup as a Donor</span>
          </div>
        </Link>
      </div>
      <div className="login-option">
        <Link reloadDocument to="/receive-blood#requestForBlood" className="Signup-link">
          <div className="link-content">
            <img 
              src="../images/negavtive.png" 
              alt="Recipient Icon" 
              className="icon recipient-icon" 
            />
            <span className="text">Signup as a Recipient</span>
          </div>
        </Link>
      </div>
    </div>
    </div>

    </nav>
  );
};