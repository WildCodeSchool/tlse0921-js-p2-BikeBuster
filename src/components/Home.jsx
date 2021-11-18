import { React, useState, useCallback } from 'react';

import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';

import LocalisationContext from '../context/LocalisationContext';

import Map from './Map';
import Count from './Counter';
import SearchBar from './SearchFrom';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[600],
    '&:hover': {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Home() {
  const [count, setCount] = useState(1);

  const handleMoreBikes = useCallback(() => {
    if (count > 1) {
      setCount((e) => e - 1);
    }
  }, [count]);

  const handleLessBikes = useCallback(() => {
    if (count < 20) {
      setCount((e) => e + 1);
    }
  }, [count]);

  const [check, setCheck] = useState(false);

  const filterBikeStand = useCallback(() => {
    setCheck(!check);
  }, [check]);

  const [coordinates, setCoordinates] = useState(null);
  const [itinerary, setItinerary] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [address, setAddress] = useState(null);

  const [click, setClick] = useState(false);

  return (
    <LocalisationContext.Provider
      value={{
        coordinates,
        itinerary,
        placeId,
        address,
        setCoordinates,
        setItinerary,
        setPlaceId,
        setAddress,
      }}
    >
      <div className="globalHome">
        <input id="button-search-container" type="checkbox" />
        <div className="scrolling-search">
          <label htmlFor="button-search-container">
            <div className="ttt">
              <MenuIcon />
            </div>
          </label>
        </div>
        <div className="search-container">
          <div className="switch-count-container">
            <div className="switch-container">
              <p className="take-tag">Prendre</p>
              <GreenSwitch {...label} onClick={filterBikeStand} />
              <p id="deposer">Déposer</p>
            </div>
            <div className="count-container">
              <Count
                count={count}
                handleMoreBikes={handleMoreBikes}
                handleLessBikes={handleLessBikes}
              />
            </div>
          </div>
          <div className="search-bar">
            <SearchBar setClick={setClick} />
          </div>
        </div>
        <div className="map">
          <Map check={check} count={count} click={click} />
        </div>
      </div>
    </LocalisationContext.Provider>
  );
}

export default Home;
