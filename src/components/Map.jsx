import { useState, useEffect } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import Zoom from '@mui/material/Zoom';
import Geoloc from './Geoloc';

function Map() {
  const location = Geoloc();
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=5f63c657462f5fd56c2dfa4650a927968c7b37c3',
    )
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div>
      <MapContainer
        center={[43.604652, 1.444209]}
        zoom={17}
        scrollWheelZoom={Zoom}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          tlse0921-js-p2-BikeBuster
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>Vous êtes ici</Popup>
          </Marker>
        )}

        {results.map((e) => (
          <Marker key={e.name} position={[e.position.lat, e.position.lng]}>
            <Popup>
              {`Station ${e.name.replace(/[0-9]/gi, '').replace('-', '')}`}{' '}
              <br />
              {`Vélos disponibles: ${e.available_bikes}`} <br />
              {`Places disponibles: ${e.available_bike_stands}`}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
