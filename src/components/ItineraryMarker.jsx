import React, { useContext, useEffect } from 'react';

import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

import LocalisationContext from '../context/LocalisationContext';

function ItineraryMarker() {
  const userMarker = new L.Icon({
    iconUrl: 'pin.png',
    iconSize: [90, 90],
  });

  const { coordinates } = useContext(LocalisationContext);

  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      map.flyTo(coordinates, map.getZoom());
    }
  }, [coordinates]);

  return coordinates === null ? null : (
    <Marker icon={userMarker} position={[coordinates.lat, coordinates.lng]}>
      <Popup>Vous êtes ici</Popup>
    </Marker>
  );
}

export default ItineraryMarker;
