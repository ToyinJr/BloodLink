import styled from "styled-components";

export default function EmergencyOverview() {
  return (
    <Container>
      <div class="emergency-overview-header">Emergency</div>
      <div class="emergency-stat">
        <div class="stat">
          <div>
            <p>10+</p>
            <p>Donor Notified</p>
          </div>
          <div>
            <p>7+</p>
            <p>Responded</p>
          </div>
        </div>
        <div className="stat">
          <div>
            <p>5</p>
            <p>Confirmed</p>
          </div>
          <div>
            <p>2</p>
            <p>On their way</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  color: #404040;
  width: 100%;

  .stat {
    width: 100%;
    display: grid;
    gap: 20px;
    margin-block: 1em;
    grid-template-columns: 6fr 6fr;

    p {
      font-size: 0.7rem;
      font-family: "Rethink Sans", sans-serif;
    }
  }

  .stat div {
    background-color: #ffffff;
    padding: 0.5em 1em;
    text-align: start;
    border-radius: 5px;
  }

  .emergency-overview-header {
    padding: 0.5em 1em;
    color: #ffffff;
    background-color: #8b0a1a;
    text-align: start;
    border-radius: 5px;
  }

  emergency-stat {
    display: grid;
    grid-template-rows: auto;
  }

  @media (max-width: 768px) {
    .stat div {
      background-color: #f3e7e8;
    }
  }
`;
