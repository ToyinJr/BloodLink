import styled from "styled-components";
import RecipientHeader from "../RecipientHeader";
import RequestForBlood from "../RequestForBlood";
import EmergencyMode from "../EmergencyMode";
import RecipientRequestMain from "../RecipientRequestMain";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ReceiveBlood() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element.scrollIntoView({
        behavior: "smooth",
        // block: "center", // Ensures the element is in the center of the screen
      });
    }
  }, [location]);
  return (
    <Container >
      <RecipientHeader />
      <RecipientRequestMain />
      <RequestForBlood />
      <EmergencyMode />
    </Container>
  );
}

const Container = styled.div``
