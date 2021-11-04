import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

function Map() {
  return (
    <div>
      <MapContainer
        center={[43.604652, 1.444209]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          tlse0921-js-p2-BikeBuster
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[43.604652, 1.444209]}>
          <Popup>
            Nombre de vélos disponibles: <br />
            Nombre de places disponibles:
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
