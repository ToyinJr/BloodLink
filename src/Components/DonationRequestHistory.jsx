import styled from "styled-components";

export default function DonationRequestHistory() {
  return (
    <Container class="donation-container">
      <div class="request-history">
        <p>Donation Request History</p>
        <div class="request-stats">
          <div class="search-wrapper">
            <input type="search" placeholder="Search by Request ID" />
          </div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Request Date</th>
                  <th>Blood Type</th>
                  <th>Donor Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* first row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>O+</td>
                  <td>Ifeoluwa Awe</td>
                  <td>fulfilled</td>
                </tr>
                {/* second row */}
                <tr>
                  <td>456B</td>
                  <td>2024-10-10</td>
                  <td>A+</td>
                  <td>Jane Smith</td>
                  <td>fulfilled</td>
                </tr>
                {/* third row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>O+</td>
                  <td>Isaac Joe</td>
                  <td>fulfilled</td>
                </tr>
                {/* fourth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>AB+</td>
                  <td>Bisoye Are</td>
                  <td>fulfilled</td>
                </tr>
                {/* fifith row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>B+</td>
                  <td>Immaculate J</td>
                  <td>fulfilled</td>
                </tr>
                {/* sixth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>O+</td>
                  <td>Fiwa Jacobs</td>
                  <td>fulfilled</td>
                </tr>
                {/* seventh row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>AB-</td>
                  <td>Emily Clark</td>
                  <td>fulfilled</td>
                </tr>
                {/* eigth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>A-</td>
                  <td>Anna Taylor</td>
                  <td>fulfilled</td>
                </tr>
                {/* ninth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>AB+</td>
                  <td>David Lee</td>
                  <td>fulfilled</td>
                </tr>
                {/* tenth row */}
                <tr>
                  <td>023B</td>
                  <td>2024-10-10</td>
                  <td>A-</td>
                  <td>Chris Evans</td>
                  <td>fulfilled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap");

  width: 100%;
  margin-block: 2em;
  font-size: 0.7em;

  .request-stats {
    background-color: #8b0a1a;
    padding: 1em;
    border-radius: 5px;
  }

  .request-history p:first-child {
    margin-block: 1em;
    color: #8b0a1a;
    font-weight: 700;
    font-family: "Rethink Sans", sans-serif;
  }

  .search-wrapper {
    margin-block: 1em;
    border-radius: 5px;
  }

  .search-wrapper input {
    width: 100%;
    padding: 1em 3em;
    border-radius: 5px;
    font-family: "Rethink Sans", sans-serif;
  }

  .table-wrapper {
    width: 100%;
  }
  .table-wrapper table {
    width: 100%;
    border: 1px solid white;
  }

  tr,
  th,
  td {
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: #ffffff;
    font-family: "Rethink Sans", sans-serif;
  }
  td,
  th {
    text-align: center;
    padding: 0.5em;
  }

  thead {
    background-color: green;
  }
`;
