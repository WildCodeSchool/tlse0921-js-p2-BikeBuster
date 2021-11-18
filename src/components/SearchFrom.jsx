/* eslint-disable no-console */
import React, { useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  //  geocodeByPlaceId,
} from 'react-places-autocomplete';

import LocalisationContext from '../context/LocalisationContext';

function SearchBar() {
  const {
    setCoordinates,
    setItinerary,
    placeId,
    setPlaceId,
    address,
    setAddress,
  } = useContext(LocalisationContext);

  const handleSelect = async (value) => {
    try {
      const result = await geocodeByAddress(value);
      const ll = await getLatLng(result[0]);
      setAddress(value);
      setCoordinates(ll);
      setPlaceId(result[0].place_id);
      setItinerary(true);
      console.log(placeId);
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
          <div key={suggestions.description} className="search-line">
            <div className="fake-searchbar">
              <input
                {...getInputProps({
                  placeholder: 'Stations à proximité de ...',
                  className: 'location-search-input',
                })}
              />
              <button
                className="clear-button"
                type="button"
                onClick={() => {
                  setItinerary(false);
                  setAddress('');
                }}
              >
                <ClearIcon color="success" />
              </button>
            </div>
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
            <button
              type="button"
              className="search-button"
              onClick={() => {
                handleSelect(address);
              }}
            >
              <SearchIcon sx={{ fontSize: 25, color: '#6db290' }} />
            </button>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
}

export default SearchBar;
