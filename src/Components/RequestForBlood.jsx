import styled from "styled-components";
import "./requestForBlood.css";
import { Link } from "react-router-dom";

export default function RequestForBlood() {
  return (
    <Container className="container pt-10" >
      <div className="blood-main">
        <p className="blood-header" >Request for Blood Donation</p>
        <p className="body" id="requestForBlood">Need blood? Sign up as recipient</p>
        <Link reloadDocument to="/verification">
          <button className="bloodBtn">Request Now</button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Rethink Sans", sans-serif;
  }
    
  .blood-main {
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    padding: 3em;
    width: 70%;
  }
  p.body {
    margin-block-end: 1em;
    color: #706f6f;
    font-size: 1em;
    font-family: "Rethink Sans", sans-serif;
  }

  .blood-header {
    margin-block-end: 0.7em;
    font-weigth: 700;
    font-size: 1.5em;
  }

  .blood-btn {
    background-color: #008000;
    color: #ffffff;
    padding: 1em 4em;
    border-radius: 5px;
    margin-block-start: 3em;
  }
`;
