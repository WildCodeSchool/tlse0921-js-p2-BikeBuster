import { useState, useEffect } from 'react';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';

import Zoom from '@mui/material/Zoom';

import LocationMarker from './LocationMarker';

function Map(props) {
  // eslint-disable-next-line react/prop-types
  const { count } = props;
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=5f63c657462f5fd56c2dfa4650a927968c7b37c3',
    )
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  const redMarker = new L.Icon({
    iconUrl: 'redmarker.png',
    iconSize: [50, 50],
  });

  const yellowMarker = new L.Icon({
    iconUrl: 'yellowmarker.png',
    iconSize: [50, 50],
  });

  const greenMarker = new L.Icon({
    iconUrl: 'greenmarker.png',
    iconSize: [50, 50],
  });

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

        {results
          .filter(
            (station) => station.available_bikes <= 5 && station.available_bikes >= count,
          )
          .map((e) => (
            <Marker
              key={e.name}
              position={[e.position.lat, e.position.lng]}
              icon={redMarker}
            >
              <Popup>
                {`Station ${e.name.replace(/[0-9]/gi, '').replace('-', '')}`}{' '}
                <br />
                {`Vélos disponibles: ${e.available_bikes}`} <br />
                {`Places disponibles: ${e.available_bike_stands}`} <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${e.position.lat}%2C${e.position.lng}&travelmode=walking`}
                >
                  Y aller
                </a>
              </Popup>
            </Marker>
          ))}

        {results
          .filter(
            (station) => station.available_bikes > 5
              && station.available_bikes <= 10
              && station.available_bikes >= count,
          )
          .map((e) => (
            <Marker
              key={e.name}
              position={[e.position.lat, e.position.lng]}
              icon={yellowMarker}
            >
              <Popup>
                {`Station ${e.name.replace(/[0-9]/gi, '').replace('-', '')}`}
                <br />
                {`Vélos disponibles: ${e.available_bikes}`} <br />
                {`Places disponibles: ${e.available_bike_stands}`} <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${e.position.lat}%2C${e.position.lng}&travelmode=walking`}
                >
                  Y aller
                </a>
              </Popup>
            </Marker>
          ))}

        {results
          .filter(
            (station) => station.available_bikes > 10 && station.available_bikes >= count,
          )
          .map((e) => (
            <Marker
              key={e.name}
              position={[e.position.lat, e.position.lng]}
              icon={greenMarker}
            >
              <Popup>
                {`Station ${e.name.replace(/[0-9]/gi, '').replace('-', '')}`}{' '}
                <br />
                {`Vélos disponibles: ${e.available_bikes}`} <br />
                {`Places disponibles: ${e.available_bike_stands}`} <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${e.position.lat}%2C${e.position.lng}&travelmode=walking`}
                >
                  Y aller
                </a>
              </Popup>
            </Marker>
          ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
