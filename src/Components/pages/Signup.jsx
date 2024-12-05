import React from "react";
import "./SignupOptions.css";
import { Link } from "react-router-dom";


const SignupOptions = () => {

  return (
    <div className="Sign-options-container">
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
  );
};

export default SignupOptions;
