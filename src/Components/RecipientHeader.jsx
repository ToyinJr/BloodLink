import styled from "styled-components";
import device from "../../device.js";

const imgUrl = "../images/doctor_blood_canister.png";

export default function RecipientHeader() {
  return (
    <Container>
      <Header>
        <HeaderTextContainer>
          <h1>Receive Life-Saving Blood</h1>
          <p>
            BloodLink understands the urgency of medical needs. Our platform
            streamlines blood donation, ensuring timely transfusions.
          </p>
          <div class="location-wrapper">
            <input type="text" placeholder="Enter your location" />
            <button>Find a Donor</button>
          </div>
          <div class="stat-wrapper">
            <div class="stat">
              <p>100+</p>
              <p>Receivers</p>
            </div>
            <div class="stat">
              <p>50+</p>
              <p>Registered Organizations</p>
            </div>
          </div>
        </HeaderTextContainer>
        <HeaderImageContainer>
          <img src={imgUrl} alt="doctor with blood canister." />
        </HeaderImageContainer>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");
  width: 100%;
`;

const Header = styled.div`
  display: grid;
  margin: 2em;
  gap: 40px;
  grid-gap: 40px;

  @media ${device["mobile-device"]} {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

const HeaderTextContainer = styled.div`
  grid-column: 1/7;
  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    font-family: "Lora", serif;
    color: #404040;
  }

  @media ${device["mobile-device"]}{
  & h1 {
    font-size: 1.9rem;
  }
  }

  p{
    font-family: "Rethink Sans", sans-serif;
    color: #404040;
  }
  .location-wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-block: 4em;
    background-color: #008000;
    border-radius: 5px;

    input {
      margin-block: 1em;
      background-color: transparent;
      padding-inline-start: 1em;
      padding-block: 0.5em;
      font-weight: 500;
    }

    button {
      background-color: #ffffff;
      padding: 0.2em 1em;
      margin: 1em;
      font-size: 0.7em;
      color: #008000;
      border-radius: 5px;
      font-weight: 700;
    }

    @media ${device["mobile-device"]}{
    button {
      font-size: 0.5em;
      font-weight: 700;
    }
      
      
      input {
      margin-block: 1em;
      font-size: 0.7em;
      background-color: transparent;
      padding-inline-start: 1em;
      font-weight: 500;
    } 
    }
  }
  .stat-wrapper {
    margin-block-start: 2em;
    display: flex;
    gap: 20px;

    .stat {
      display: flex;
      flex-direction: column;

      p{
      font-family: "Lora", serif;
      }

      p:first-child {
        font-size: 2.5em;
        font-weight: 700;
      }
      p:nth-child(2) {
      font-size: 1em;
      }

      &:nth-child(2) {
        p:first-child {
          text-align: center;
        }
      }
      &:first-child {
        p:nth-child(2) {
          text-align: end;
        }
      }
    }

    @media ${device["mobile-device"]} {
      & .stat-wrapper .stat p:nth-child(2) {
          font-size: 1rem;
        }
    }
`;

const HeaderImageContainer = styled.div`
  grid-column: 7/13;
`;
