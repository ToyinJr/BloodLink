import styled from "styled-components";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
const mapIcon = "../../images/placeholder.png";

export default function Map() {
  const markers = [
    { geocode: [48.86, 2.3522], popUp: "Hello, I'm here" },
    { geocode: [48.85, 2.3522], popUp: "Hello, what is popping" },
    { geocode: [48.855, 2.34], popUp: "Hello, meet me here!" },
  ];

  const customIcon = new Icon({
    iconUrl: mapIcon,
    iconSize: [38, 38],
  });

  return (
    <Container>
      <MapContainer center={[6.5904, 3.3423]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}></Marker>
        ))}
      </MapContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 10em;
  margin: 0 auto;
  .leaflet-container {
    height: 100%;
  }
`;
