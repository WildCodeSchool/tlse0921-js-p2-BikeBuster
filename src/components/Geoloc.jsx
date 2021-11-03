import React, { useState } from 'react';
// import { geolocated, geoPropTypes } from 'react-geolocated';

// function Geoloc({ isGeolocationEnabled, coords }) {
//   console.log(isGeolocationEnabled, coords.latitude);
//   return <div>toto</div>;
// }

// function Geoloc() {
//   return <div>Coucou</div>;
// }

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },

//   userDecisionTimeout: 5000,
// })(Geoloc);

const Geoloc = () => {
  const [latitude, setLatitude] = useState('latitude');
  const [longitude, setLongitude] = useState('longitude');

  function success(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  function error() {
    alert('Sorry, no position available. Check if geolocation is enabled in your browser.');
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(success, error, options);
  }

  // function stopWatch() {
  //   navigator.geolocation.clearWatch(watchID);
  // }

  return (
    <div>
      {latitude}, {longitude}
    </div>
  );
};

export default Geoloc;
