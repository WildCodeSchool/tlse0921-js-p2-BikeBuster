import React, { useEffect, useContext } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import LocalisationContext from '../context/LocalisationContext';

function LocationMarker() {
  const userMarker = new L.Icon({
    iconUrl: 'placeholder(1).png',
    iconSize: [50, 50],
  });

  const { position, setPosition } = useContext(LocalisationContext);

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
