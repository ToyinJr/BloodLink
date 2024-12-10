import styled from "styled-components";
import Lasuth from "./Lasuth";
import DonorStat from "./DonorStat";
import RecentUpdate from "./RecentUpdate";
import RequestTracker from "./RequestTracker";
import DonationRequestHistory from "./DonationRequestHistory";
import device from "../../device.js";

export default function RecipientRequestMain() {
  return (
    <Container>
      <ColOne>
        <Lasuth />
        <RecentUpdate />
      </ColOne>
      <ColTwo>
        <DonorStat />
        <RequestTracker />
        <DonationRequestHistory />
      </ColTwo>
    </Container>
  );
}

const ColOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ColTwo = styled(ColOne)``;

const Container = styled.div`
  display: grid;
  margin: 2em;
  margin-block-start: 4em;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: auto;
  gap: 20px;

  @media ${device["mobile-device"]} {
    & {
      display: grid;
      grid-template-columns: auto;
      gap: 20px;
      margin-block-start: 6em;
    }
  }
`;
