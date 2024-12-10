import EmergencyOverview from "./EmergencyOverview";
import ModifyCancelRequest from "./ModifyCancelRequest";
import RequestDetails from "./RequestDetails";
import DonorOnTheirWay from "./DonorOnTheirWay";
import Map from "./Map";
import styled from "styled-components";
import device from "../../device.js";
import { useMediaQuery } from "react-responsive";

export default function EmergencyMode() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <ParentContainer>
      <EmergencyContainer class="emergency-container">
        <p class="emergency-header">Emergency Mode</p>
        <p class="emergency-text">
          "Emergency Mode helps you notify nearby donors immediately in urgent
          situations. This will prioritize your request and reach out to
          available donors."
        </p>
        <Container>
          <Col>
            <EmergencyOverview />
            <RequestDetails />
            {isMobile ? "" : <ModifyCancelRequest />}
          </Col>
          <Col>
            <DonorOnTheirWay />
            <Map />
            {isMobile ? <ModifyCancelRequest /> : ""}
          </Col>
        </Container>
      </EmergencyContainer>
    </ParentContainer>
  );
}

const Container = styled.div`
  display: grid;
  margin: 2em;
  gap: 20px;
  grid-template-columns: 6fr 6fr;
  @media ${device["mobile-device"]} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmergencyContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  padding-block: 2em;
  margin-block-start: 1em;
  text-align: center;
  background-color: #8b0a1a1a;
  border-radius: 5px;
  p {
    font-family: "Rethink Sans", sans-serif;
  }

  .emergency-header {
    font-family: "Lora", serif;
    font-size: 1.5rem;
    font-weight: 700;
    padding-block-end: 0.5em;
  }

  .emergency-text {
    width: 50%;
    margin: 0 auto;
  }

  @media ${device["mobile-device"]} {
    & {
      background-color: #ffffff;
    }
    .emergency-text {
      width: 90%;
    }
  }
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 3em;
  margin-inline: 2em;
`;
