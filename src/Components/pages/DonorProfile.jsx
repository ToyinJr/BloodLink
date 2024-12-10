import Donate from "../Donate";
import UpcomingDonation from "../UpcomingDonation";
import Appointment from "../Appointment";
import DonorHeader from "../DonorHeader";
import DonorSignUp from "../DonorSignUp"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DonorProfile() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          // block: "center", // Ensures the element is in the center of the screen
        });
      }
    }
  }, [location.hash]);



  return (
    <div>
      <DonorHeader/>
      {/* <DonorSignupContainer>
        <DonorPic  />
        <SignUp />
      </DonorSignupContainer> */}
      <DonorSignUp/>
      <Donate />
      <UpcomingDonation />
      <Appointment/>
    </div>
  );
}
