import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import Geoloc from './Geoloc';

function Map() {
  const location = Geoloc();

  return (
    <div>
      <MapContainer
        center={[43.604652, 1.444209]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>
              Nombre de vélos disponibles: <br />
              Nombre de places disponibles:
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
