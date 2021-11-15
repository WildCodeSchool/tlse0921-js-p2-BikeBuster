import { useState, useEffect } from 'react';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';

import Zoom from '@mui/material/Zoom';

import Geoloc from './Geoloc';
// import ResultListStand from './ResultListStand';
import ResultListBike from './ResultListBike';

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

  const userMarker = new L.Icon({
    iconUrl: 'placeholder(1).png',
    iconSize: [50, 50],
  });

  let a = document.getElementById('switch');
  a = true;
  // eslint-disable-next-line no-unused-expressions
  a.checked ? (a = false) : (a = true);
  console.log(a.checked);

  if (a.checked) {
    return (
      <div>
        <MapContainer
          center={[43.604652, 1.444209]}
          zoom={17}
          scrollWheelZoom={Zoom}
        >
          <TileLayer
            tlse0921-js-p2-BikeBuster
            url="https://api.mapbox.com/styles/v1/leoplanelles/ckvm9t3k7k7on15mpslnijx7n/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGVvcGxhbmVsbGVzIiwiYSI6ImNrdm05cnNlYjB4N3Aycm91NW9hNmJvenQifQ.QoNf0EMBb0BFbohQf-VZGA"
          />

          {location.loaded && !location.error && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={userMarker}
            >
              <Popup>Vous êtes ici</Popup>
            </Marker>
          )}
          <div className="results-list-bike">
            <ResultListBike result={results} />
          </div>
        </MapContainer>
      </div>
    );
  }
}

export default Map;
