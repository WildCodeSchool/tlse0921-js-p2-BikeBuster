import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import GreenMarkersBikeStands from './GreenMarkers-bikeStands';
import YellowMarkersBikeStands from './YellowMarkers-bikeStands';
import RedMarkersBikeStands from './RedMarkers-bikeStands';

import GreenMarkersBikes from './GreenMarkers-bikes';
import YellowMarkersBikes from './YellowMarkers-bikes';
import RedMarkersBikes from './RedMarkers-bikes';

import LocationMarker from './LocationMarker';
import ItineraryMarker from './ItineraryMarker';

function Map(props) {
  const { count, check } = props;
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
        zoomControl={false}
      >
        <TileLayer
          ZoomControl
          tlse0921-js-p2-BikeBuster
          url="https://api.mapbox.com/styles/v1/leoplanelles/ckvm9t3k7k7on15mpslnijx7n/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGVvcGxhbmVsbGVzIiwiYSI6ImNrdm05cnNlYjB4N3Aycm91NW9hNmJvenQifQ.QoNf0EMBb0BFbohQf-VZGA"
        />
        <ZoomControl position="bottomright" />
        {!check && (
          <>
            <GreenMarkersBikes results={results} count={count} />
            <YellowMarkersBikes results={results} count={count} />
            <RedMarkersBikes results={results} count={count} />
          </>
        )}
        ;
        {check && (
          <>
            <GreenMarkersBikeStands results={results} count={count} />
            <YellowMarkersBikeStands results={results} count={count} />
            <RedMarkersBikeStands results={results} count={count} />
          </>
        )}
        ;
        <LocationMarker />
        <ItineraryMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
