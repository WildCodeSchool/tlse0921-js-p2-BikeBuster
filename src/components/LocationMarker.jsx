import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

function LocationMarker() {
  const userMarker = new L.Icon({
    iconUrl: 'placeholder(1).png',
    iconSize: [50, 50],
  });

  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker icon={userMarker} position={position}>
      <Popup>
        Vous êtes ici <br />
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
