import { useState, useEffect } from 'react';

import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import ResultListStand from './ResultListStand';
import ResultListBike from './ResultListBike';
import LocationMarker from './LocationMarker';
import ItineraryMarker from './ItineraryMarker';

function Map(props) {
  const { count, check, click } = props;
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
          <ResultListBike results={results} count={count} click={click} />
        )}
        ;
        {check && (
          <ResultListStand results={results} count={count} click={click} />
        )}
        ;
        <LocationMarker />
        <ItineraryMarker click={click} />
      </MapContainer>
    </div>
  );
}

export default Map;
