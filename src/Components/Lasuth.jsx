import styled from "styled-components";
const imgUrl = "../../images/lasuth.png";

export default function Lasuth() {
  return (
    <Container>
      <div class="clinic-name">
        <h1>LASUTH</h1>
        <p id="clinic">Clinic</p>
      </div>

      <p class="info-header">General Information</p>
      <div class="info-wrapper">
        <div className="info">
          <p>Location</p>
          <p>1-5 Oba Akinjobi Way, Street, Ikeja 101233, Lagos </p>
        </div>
        <div className="info">
          <p>Telephone</p>
          <p>+2349074563251</p>
        </div>
        <div className="info">
          <p>License no</p>
          <p>17GF89YT0</p>
        </div>
      </div>
      <ImageWrapper>
        <img src={imgUrl} alt="lasuth logo" />
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");
  position: relative;
  width: 100%;
  background-color: #8b0a1a;
  color: #ffffff;
  border-radius: 5px;

  h1,
  .clinic-name {
    text-align: center;
    margin-block-end: 1em;
    margin-block-start: 5em;
    line-height: 0.5;
    font-family: "Lora", serif;
    font-weight: 500;
    font-size: 1rem;
  }
  p {
    font-family: "Rethink Sans", sans-serif;
    font-size: 0.7rem;
  }
  .info-header {
    margin-inline-start: 1.5em;
    margin-block-end: 1em;
  }
  div.info-wrapper .info {
    display: flex;
    gap: 10px;
    margin-block-end: 1em;
    margin-inline: 1em;
  }

  div.info-wrapper .info p:nth-child(2) {
    text-align: center;
    word-wrap: break-word;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;
