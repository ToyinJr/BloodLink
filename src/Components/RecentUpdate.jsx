import styled from "styled-components";

export default function RecentUpdate() {
  return (
    <Container>
      <p>Recent Updates</p>
      <div class="update-container">
        <div class="update-status">
          <p class="selected">All Updates</p>
          <p>Recent Updates</p>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="Search Updates" />
        </div>
        <div class="update-wrapper">
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
          <div class="updates">
            <div class="update-info">
              <p>Matching Donor Found !</p>
              <p>1:14pm</p>
            </div>
            <p>A donor has been located for your blood request</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");
  width: 100%;
  margin-block-start: 2em;

  p {
    font-family: "Rethink Sans", sans-serif;
  }

  & > p:first-child {
    font-size: 0.7rem;
    color: #8b0a1a;
    font-weight: 700;
    margin-block: 1em;
    font-family: "Rethink Sans", sans-serif;
  }
  p.selected {
    font-weight: 500;
  }

  .update-status {
    p {
      color: #ffffff;
    }
    p:nth-child(2) {
      font-weight: 400;
    }
  }
  .update-container {
    display: grid;
    grid-template-column: 1fr;
    background-color: #8b0a1a;
    padding-inline: 1em;
    border-radius: 5px;

    .update-status {
      display: flex;
    }

    .update-wrapper {
      overflow-y: scroll;
      height: 20rem;
    }
    .update-wrapper .updates .update-info {
      display: flex;
      justify-content: space-between;
    }

    .update-wrapper .updates {
      background-color: #ffffff;
      margin-block: 0.5em;
      padding: 0.2em 1em;
      border-radius: 5px;
      font-size: 0.7rem;
    }

    .input-wrapper {
      border-radius: 5px;
      height: auto;
    }

    .input-wrapper input {
      width: 100%;
      font-size: 0.7rem;
      padding: 0.3em 3em;
      min-height: auto;
      border-radius: 5px;
    }

    .update-status > p {
      margin-inline-end: 1em;
      font-size: 0.7rem;
      margin-block: 1em;
    }
    .update-status > p:first-child {
      padding-block-end: 0.5em;
    }

    .selected {
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    }
  }
`;
