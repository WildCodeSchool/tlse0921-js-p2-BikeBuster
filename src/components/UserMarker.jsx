import { geolocated } from 'react-geolocated';

const UserMarker = ({ coords }) => {
  const { latitude, longitude } = coords;
  return (
    <div>
      <p>
        {latitude}
        {longitude}
      </p>
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(UserMarker);
