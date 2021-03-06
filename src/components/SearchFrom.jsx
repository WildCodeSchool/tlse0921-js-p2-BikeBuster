import React, { useState, useContext } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import LocalisationContext from '../context/LocalisationContext';

function SearchBar() {
  const {
    setCoordinates, setItinerary, setPlaceId, address, setAddress,
  } = useContext(LocalisationContext);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function displayError() {
    if (error === true) {
      toast.error(errorMessage, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleSelect = async (value) => {
    try {
      const result = await geocodeByAddress(value);
      const ll = await getLatLng(result[0]);
      setAddress(value);
      setCoordinates(ll);
      setPlaceId(result[0].place_id);
      setItinerary(true);
    } catch (err) {
      setError(true);
      setErrorMessage(err);
      displayError();
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
