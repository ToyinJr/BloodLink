import styled from "styled-components";

export default function DonorWayMobile() {
  return (
    <Container>
      <UserInfo>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Adeyemi</td>
              <td>O+</td>
            </tr>
            <tr>
              <td>Taiwo Israel</td>
              <td>O-</td>
            </tr>
            <tr>
              <td>Owolawi Tola</td>
              <td>O-</td>
            </tr>
          </tbody>
        </table>
      </UserInfo>
      <UserInfo>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Arrival</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ikeja</td>
              <td>20mins</td>
            </tr>
            <tr>
              <td>Ogba</td>
              <td>30mins</td>
            </tr>
            <tr>
              <td>Ikeja</td>
              <td>15mins</td>
            </tr>
          </tbody>
        </table>
      </UserInfo>
      <UserInfo>
        <table>
          <thead>
            <tr>
              <th>Other info</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>View Info</td>
              <td>
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>View Info</td>
              <td>
                <span>
                  <i class="fa-solid fa-message"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>View Info</td>
              <td>
                {" "}
                <span>
                  <i class="fa-brands fa-whatsapp"></i>
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </UserInfo>
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.p`
  font-size: 0.7em;
`;
const UserInfo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&display=swap");

  margin-block: 1em;
  padding: 1em;
  background-color: #f3e7e8;
  border-radius: 5px;
  table {
    width: 100%;
    text-align: start;
  }
  tr,
  th {
    color: #ffffff;
    text-align: start;
  }
  tr,
  td {
    color: #404040;
  }
  tr,
  td,
  th {
    padding: 0.5em;
    font-size: 0.9em;
    font-family: "Rethink Sans", sans-serif;
  }

  td span {
  color: #8B0A1A;
  cursor: pointer;
  }
`;
