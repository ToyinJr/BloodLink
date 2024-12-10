import styled from "styled-components";

export default function RequestTracker() {
  return (
    <Container>
      <div class="request-tracker">
        <div class="heading">
          <p>Request Tracker</p>
        </div>
        <div class="main">
          <div class="request-track-header">
            <div class="request-status">
              <p class="request-stat selected">Pending</p>
              <p class="request-stat">Ongoing</p>
            </div>
            <div class="search-wrapper">
              <input
                class="search"
                type="search"
                placeholder="Search by Request ID"
              />
            </div>
          </div>
          <div class="request-id-container">
            <div class="request-main">
              <div class="request-body">
                <div class="request">
                  <div class="request-field">
                    <p>Request ID</p>
                    <p>Recipient</p>
                    <p>Blood Type</p>
                    <p>Requested Units</p>
                    <p>Requested Date</p>
                    <p>Urgency</p>
                    <p>Status</p>
                  </div>
                  <div class="request-value">
                    <p>001A</p>
                    <p>LASUTH</p>
                    <p>A+</p>
                    <p>10</p>
                    <p>Oct 11, 2024</p>
                    <p>Emergency</p>
                    <p>Pending</p>
                  </div>
                </div>
                <button>X Cancel Request</button>
              </div>
            </div>
            <div class="request-main">
              <div class="request-body">
                <div class="request">
                  <div class="request-field">
                    <p>Request ID</p>
                    <p>Recipient</p>
                    <p>Blood Type</p>
                    <p>Requested Units</p>
                    <p>Requested Date</p>
                    <p>Urgency</p>
                    <p>Status</p>
                  </div>
                  <div class="request-value">
                    <p>008X</p>
                    <p>LASUTH</p>
                    <p>B+</p>
                    <p>3</p>
                    <p>Oct 10, 2024</p>
                    <p>Normal</p>
                    <p>Pending</p>
                  </div>
                </div>
                <button>X Cancel Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  margin-block-start: 2em;
  font-size: 0.7rem;

  .request-tracker .heading p {
    font-weight: 700;
    margin-block: 1em;
    color: #8b0a1a;
    font-family: "Rethink Sans", sans-serif;
  }
  .request-track-header {
    width: 100%;
  }
  .request-tracker .main {
    border-radius: 5px;
    padding: 1em;
    background-color: #8b0a1a;
  }

  .request-status {
    display: flex;
    gap: 20px;
    margin-block: 0.5em;
    color: #ffffff;
  }

  .request-status p {
    padding-bottom: 0.5em;
    font-family: "Rethink Sans", sans-serif;
  }

  .search-wrapper {
    margin-block: 1em;
  }

  .search-wrapper input {
    width: 100%;
    padding: 1em 3em;
    font-size: 0.7rem;
    border-radius: 5px;
    font-family: "Rethink Sans", sans-serif;
  }
  .selected {
    border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  }

  .request-id-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    overflow-y: scroll;
  }

  .request {
    display: flex;
    gap: 4em;
    padding: 1em;
  }

  .request-body {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .request-body button {
    align-self: flex-start;
    margin: 1em;
    padding: 0.5em 1em;
    background-color: green;
    border-radius: 5px;
    color: #ffffff;
  }

  .request-value p {
    color: #404040;
    font-weight: 700;
    margin-block-end: 0.5em;
    font-family: "Rethink Sans", sans-serif;
  }
  .request-field p {
    color: #404040;
    margin-block-end: 0.5em;
    font-family: "Rethink Sans", sans-serif;
  }
  button {
    font-family: "Rethink Sans", sans-serif;
  }
`;
