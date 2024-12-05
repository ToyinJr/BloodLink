import React from "react";
import "./SignupOptions.css";

const SignupOptions = () => {
  return (
    <div className="Sign-options-container">
      <div className="Sign-option">
        <a href="/donor-signup" className="signup-link">
          <div className="link-content">
            <img 
              src="../images/postive.png" 
              alt="Donor Icon" 
              className="icon donor-icon" 
            />
            <span className="text">Signup as a Donor</span>
          </div>
        </a>
      </div>
      <div className="login-option">
        <a href="/recipient-Signup" className="Signup-link">
          <div className="link-content">
            <img 
              src="../images/negavtive.png" 
              alt="Recipient Icon" 
              className="icon recipient-icon" 
            />
            <span className="text">Signup as a Recipient</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SignupOptions;
