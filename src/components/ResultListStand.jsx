import { useState } from 'react';
/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

const ResultListStand = (props) => {
  const { results, count } = props;

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

  const [favorite, setFavorite] = useState(false);

  const isFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      {results
        .filter(
          (station) => station.available_bike_stands <= 5
            && station.available_bike_stands >= count,
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
              {`Places disponibles: ${e.available_bike_stands}`}
              {!favorite && <div>{e.name}</div>}
              <button type="button" id={e.number} onClick={isFavorite}>
                {' '}
                {e.number}{' '}
              </button>
            </Popup>
          </Marker>
        ))}

      {results
        .filter(
          (station) => station.available_bike_stands > 5
            && station.available_bike_stands <= 10
            && station.available_bike_stands >= count,
        )
        .map((e) => (
          <Marker
            key={e.name}
            position={[e.position.lat, e.position.lng]}
            icon={yellowMarker}
          >
            <Popup>
              {`Station ${e.name.replace(/[0-9]/gi, '').replace('-', '')}`}{' '}
              <br />
              {`Vélos disponibles: ${e.available_bikes}`} <br />
              {`Places disponibles: ${e.available_bike_stands}`}
              {!favorite && <div>{e.name}</div>}
              <button type="button" id={e.number} onClick={isFavorite}>
                {' '}
                {e.number}{' '}
              </button>
            </Popup>
          </Marker>
        ))}

      {results
        .filter(
          (station) => station.available_bike_stands > 10
            && station.available_bike_stands >= count,
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
              {`Places disponibles: ${e.available_bike_stands}`}
              {!favorite && <div>{e.name}</div>}
              <button type="button" id={e.number} onClick={isFavorite}>
                {' '}
                {e.number}{' '}
              </button>
            </Popup>
          </Marker>
        ))}
    </div>
  );
};
export default ResultListStand;
