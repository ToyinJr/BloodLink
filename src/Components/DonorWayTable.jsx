import styled from "styled-components";
const stopwatch = "../../images/stopwatch.png";
import { useMediaQuery } from "react-responsive";
import DonorWayMobile from "./DonorWayMobile";
import device from "../../device.js";

export default function DonorOnTheirWay() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Contanier>
      {isMobile ? (
        <DonorWayMobile />
      ) : (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Type</th>
                <th>Location</th>
                <th>Arrival</th>
                <th>Other Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Adeyemi</td>
                <td>O+</td>
                <td>Ikeja</td>
                <td>20mins</td>
                <td>View Info</td>
              </tr>
              <tr>
                <td>Taiwo Israel</td>
                <td>O-</td>
                <td>Ogba</td>
                <td>30mins</td>
                <td>View Info</td>
              </tr>
              <tr>
                <td>Owolawi Tola</td>
                <td>O-</td>
                <td>Ikeja</td>
                <td>15mins</td>
                <td>View Info</td>
              </tr>
            </tbody>
          </Table>
          <Socials>
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <span>
              <i class="fa-solid fa-message"></i>
            </span>
            <span>
              <i class="fa-brands fa-whatsapp"></i>
            </span>
          </Socials>
        </TableWrapper>
      )}
      <OtherInfoContainer>
        <Col>
          <Info id="other-heading" isMobile={isMobile}>
            <p id="header-text">Other Information</p>
          </Info>
          <Info isMobile={isMobile}>
            <p>Donation Confirmation:</p>
            <p>Donor is on the way to the General Hospital, Gbagada</p>
          </Info>
          <Info isMobile={isMobile}>
            <p>Medical History:</p>
            <p>No prior health issues related to blood donation</p>
          </Info>
          <Info isMobile={isMobile}>
            <p>Donation Center Details:</p>
            <p>Gbagada General Hospital, Blood Bank Unit</p>
          </Info>
        </Col>
        <Col>
          <Info isMobile={isMobile}>
            <p>Total Requests</p>
          </Info>
          <Info isMobile={isMobile}>
            <Summary>
              <Success>
                <p>65%</p>
                <p>Successful</p>
              </Success>
              <NoSuccess>
                <p>35%</p>
                <p>Unsuccessful</p>
              </NoSuccess>
            </Summary>
          </Info>
          <EmergencyText isMobile={isMobile}>
            Emergency mode expires In
          </EmergencyText>
          <StopWatchWrapper>
            <Stopwatch src={stopwatch} alt="stopwatch" />
          </StopWatchWrapper>
          <Time>4hrs35mins</Time>
        </Col>
      </OtherInfoContainer>
    </Contanier>
  );
}

const Contanier = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  margin-block-start: 1em;
  display: grid;
  grid-template-columns: 1fr;
  background-color: transparent;
`;

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #ffffff;
`;
const Table = styled.table`
  width: 100%;
  margin-block-end: 1em;
  background-color: #ffffff;
  td {
    color: #404040;
    text-align: start;
    padding: 0.5em;
    border: none;
    font-size: 0.7rem;
    font-family: "Rethink Sans", sans-serif;
  }
  tr {
    border: none;
  }
  th {
    text-align: start;
    color: #ffffff;
    background-color: #8b0a1a;
    padding: 0.5em;
    border: none;
    font-size: 0.7rem;
    font-family: "Rethink Sans", sans-serif;
  }
  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 0.5em;
  span {
    max-width: 100%;
    min-height: auto%;
    background-color: #8b0a1a;
    color: #ffffff;
    border-radius: 5px;
    padding: 0.2em 0.5em;
    margin-inline-end: 1em;
    margin-block-start: 1em;
    font-size: 0.5rem;
  }
`;

const OtherInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 10px;
  color: #404040;
  P {
    font-size: 0.7rem;
  }

  #other-heading {
    margin-block-end: 1em;
  }
  #header-text {
    border-radius: 5px;
  }
  @media ${device["mobile-device"]} {
    & {
      display: grid;
      grid-template-columns: 1fr;
    }
    p:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    p:nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;
const Info = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr;
  padding: ${({ isMobile }) => (isMobile ? "" : "0.5em 1em")};
  border-radius: 5px;
  p {
    text-align: center;
  }
  font-size: 0.7em;
  background-color: #ffffff;
  border-radius: 3px;
  & p:first-child {
    font-weight: 700;
    text-align: start;
  }
  & p {
    text-align: start;
  }
  @media ${device["mobile-device"]} {
    & p {
      background-color: #f3e7e8;
      padding: 1em;
      width: 100%;
      border-radius: 5px;
    }
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 1;
  margin-block: 0.5em;
  &:nth-child(2) {
    flex: 1;
  }
`;

const Summary = styled.div`
  display: flex;
  gap: 1em;

  @media ${device["mobile-device"]} {
    & {
      gap: 0.2em;
      background-color: #f3e7e8;
      justify-content: space-between;
      p {
        text-align: center;
      }
    }
  }
`;
const Success = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  background-color: #d9d9d9;
  width: fit-content;
  height: auto;
  color: #404040;
  padding: 1.5em;
  width: 45%;

  @media ${device["mobile-device"]} {
    & {
      padding: 1em;
      border-radius: 5px;
      background-color: inherit;
    }
    & p:first-child {
      text-align: center;
    }
  }
`;
const NoSuccess = styled(Success)``;

const EmergencyText = styled.p`
  color: #404040;
  font-size: 0.5rem;
  text-align: center;
  background-color: ${({ isMobile }) => (isMobile ? "#F3E7E8" : "")};
  margin-block-start: 1em;
  border-radius: ${({isMobile})=> isMobile ? "5px" : ""};
  padding: ${({isMobile})=> isMobile ? "1em" : ""};
  text-align: ${({isMobile})=> isMobile ? "start": ""};
  font-weight: 700;
`;

const Stopwatch = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const StopWatchWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-block: 0.5em;
  margin: 0 auto;
`;

const Time = styled.p`
  text-align: center;
  color: #404040;
  font-size: 0.5em;
  margin-block: 1em;
`;
