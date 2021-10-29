import React from 'react';
import { geolocated } from 'react-geolocated';

function Geoloc({ isGeolocationAvailable }) {
  return <div>{isGeolocationAvailable}</div>;
}

// function Geoloc() {
//   return <div>Coucou</div>;
// }

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },

  userDecisionTimeout: 5000,
})(Geoloc);
