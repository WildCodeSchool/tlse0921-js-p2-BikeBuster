
import { Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

const ResultsListBike = (props) => {
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

  return (
    <div>
      {results
        .filter(

          (station) => (station.available_bikes - count) <= 5
          && station.available_bikes >= count,

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

              <a href={`https://www.google.com/maps/dir/?api=1&destination=${e.position.lat}%2C${e.position.lng}&travelmode=walking`} target="_blank" rel="noreferrer">

                Itinéraire
              </a>
            </Popup>
          </Marker>
        ))}

      {results
        .filter(

          (station) => (station.available_bikes - count) > 5
              && (station.available_bikes - count) <= 10
              && station.available_bikes >= count,

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
              {`Places disponibles: ${e.available_bike_stands}`} <br />

              <a href={`https://www.google.com/maps/dir/?api=1&destination=${e.position.lat}%2C${e.position.lng}&travelmode=walking`} target="_blank" rel="noreferrer">

                Itinéraire
              </a>
            </Popup>
          </Marker>
        ))}

      {results
        .filter(

          (station) => (station.available_bikes - count > 10)
          && station.available_bikes >= count,

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

              <a href={`https://www.google.com/maps/dir/?api=1&destination=${e.position.lat}%2C${e.position.lng}&travelmode=walking`} target="_blank" rel="noreferrer">

                Itinéraire
              </a>
            </Popup>
          </Marker>
        ))}
    </div>
  );
};
export default ResultsListBike;
