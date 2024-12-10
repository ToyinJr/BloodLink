import styled from "styled-components";

export default function RequestDetails() {
  return (
    <Container>
      <div className="request-detail-header">
        <p>Request Details</p>
      </div>
      <div>
        <p>Patient: Ayomide Vincent</p>{" "}
      </div>
      <div>
        <p>Blood Group Required: O+</p>{" "}
      </div>
      <div>
        <p>Units Required: 3 units</p>
      </div>
      <div>
        <p>Request Reason: Cardiac surgery</p>
      </div>
      <div>
        <p>Requested By :General Hospital Ikeja </p>
      </div>
      <div>
        <p>
          {" "}
          Additional Instructions: The donor must be free from any chronic
          illness and must not have donated blood in the last 3 months.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  display: grid;
  grid-template-rows: auto;
  gap: 10px;
  color: #404040;

  p {
    font-size: 0.7rem;
    font-family: "Rethink Sans", sans-serif;
  }
  .request-detail-header {
    padding: 0.5em 1em;
    color: #ffffff;
    background-color: #8b0a1a;
    text-align: start;
    border-radius: 5px;
  }

  .request-detail-header p {
    font-size: 1rem;
  }

  div {
    padding: 0.5em 1em;
    background-color: #ffffff;
    text-align: start;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    div {
      background-color: #f3e7e8;
    }
  }
`;
