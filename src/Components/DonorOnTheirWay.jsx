import styled from "styled-components";
import DonorWayTable from "./DonorWayTable";

export default function DonorOnTheirWay() {
  return (
    <Container>
      <Title>Donors On Their Way</Title>
      <DonorWayTable/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;
const Title = styled.p`
  color: #ffffff;
  background-color: green;
  border-radius: 5px;
  padding: 0.5em;
  font-size: 0.5em;
  margin-inline: 2em;
`;
