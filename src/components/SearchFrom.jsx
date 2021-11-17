/* eslint-disable no-console */
import React, { useState, useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import PlacesAutocomplete, {
  geocodeByAddress,
  //  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

import LocalisationContext from '../context/LocalisationContext';

function SearchBar({ handleClick }) {
  const { coordinates, setCoordinates } = useContext(LocalisationContext);

  const [address, setAddress] = useState('');

  const handleSelect = async (value) => {
    try {
      const result = await geocodeByAddress(value);
      const ll = await getLatLng(result[0]);
      setAddress(value);
      setCoordinates(ll);
      console.log(coordinates);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div key={suggestions.description}>
            <input
              {...getInputProps({
                placeholder: 'Stations à proximité de ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                    backgroundColor: '#72bb90',
                    cursor: 'pointer',
                    color: 'white',
                  }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    key={suggestions.description}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button
        type="button"
        className="search-icon"
        onClick={() => {
          handleSelect(address);
          handleClick();
        }}
      >
        <SearchIcon sx={{ fontSize: 25 }} />
      </button>
    </>
  );
}

export default SearchBar;
