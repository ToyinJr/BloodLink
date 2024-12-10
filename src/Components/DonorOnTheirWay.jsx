import styled from "styled-components";
import DonorWayTable from "./DonorWayTable";

export default function DonorOnTheirWay() {
 
  return (
    <Container>
      <Title>Donors On Their Way</Title>
      <DonorWayTable />
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  display: grid;
  grid-template-columns: 1fr;
`;
const Title = styled.p`
  padding: 0.5em 1em;
  color: #ffffff;
  background-color: #008000;
  text-align: start;
  border-radius: 5px;
  font-family: "Rethink Sans", sans-serif;
`;
