import React from "react";
import "./LoginOptions.css";
import { Link } from "react-router-dom";


const LoginOptions = () => {

  return (
    <div className="pt-10">
          <div className="Sign-options-container bg-[#8b0a192f] w-fit p-4 rounded-lg place-self-center">
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
  );
};

// const MainContainer = styled.div`
//   @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&display=swap");

//   @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

//   width: 100%;
//   button.login-btn {
//     padding: 1em 3em;
//     background-color: #008000;
//     width: 100%;
//     color: #ffffff;
//     border-radius: 5px;
//   }
//   p {
//     margin-block: 1em;
//     color: #4a4a4a;
//   }
//   .forgot-password {
//     font-size: 0.7rem;
//     font-family: "Rethink Sans", sans-serif;
//   }
//   .header {
//     font-weight: 700;
//     align-self: start;
//     font-family: "Lora", serif;
//   }
//   .header-text {
//     font-size: 0.9rem;
//     font-family: "Rethink Sans", sans-serif;
//   }

//   .login-btn {
//     font-weight: 700;
//     font-family: "Rethink Sans", sans-serif;
//   }

//   .btn-wrapper {
//     display: flex;
//     justify-content: center;
//     align-items: baseline;
//     gap: 10px;
//     border: 1px solid #008000;
//     margin-block: 1em;
//     border: 1px solid rgba(0, 0, 0, 0.1);
//     border-radius: 5px;
//     font-family: "Lora", serif;
//     font-size: 0.9rem;
//   }

//   .fb {
//     color: rgba(0, 0, 255, 0.7);
//   }

//   .line {
//     border: 1px solid #d9d9d94d;
//     width: 30%;
//     background-color: #d9d9d94d;
//     transform: rotateX(180deg);
//   }

//   .option-text {
//     margin-block: 1em;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-size: 0.9rem;
//   }
    
//   .img-wrapper {
//     width: 13px;
//     height: 13px;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 35%;
//   margin: auto;
//   background-color: #ffffff;
//   border: 1px solid #ffffff;
//   padding: 2em;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   border-radius: 5px;

//   @media (max-width: 768px) {
//     width: 90%;
//   }
// `;
// const InputWrapper = styled.div`
//   margin-block: 1em;
//   height: 3em;
//   border-radius: 5px;

//   input {
//     width: 100%;
//     padding: 1em;
//     font-size: 0.7rem;
//     background-color: #d9d9d94d;
//     height: 100%;
//     border-radius: 5px;
//     font-family: "Rethink Sans", sans-serif;
//   }
// `;

export default LoginOptions;
