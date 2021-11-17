/* eslint-disable react/jsx-no-bind */
import { React, useState, useCallback } from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

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

  function filterBikeStand() {
    setCheck(!check);
  }

  const [coordinates, setCoordinates] = useState(null);

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(true);
  }

  return (
    <LocalisationContext.Provider value={{ coordinates, setCoordinates }}>
      <div className="globalHome">
        <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
        <input id="button-search-container" type="checkbox" />
        <div className="scrolling-search">
          <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
          <label htmlFor="button-search-container">
            <ArrowDownwardIcon />
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
            <SearchBar click={click} handleClick={handleClick} />
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
