import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Switch from '@mui/material/Switch';
import Map from './Map';
import Count from './Counter';

function Home() {
  const [check, setCheck] = React.useState(false);

  function filterBikeStand() {
    setCheck(!check);
  }
  return (
    <div className="globalHome">
      <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
      <label>
        <input id="switch" type="checkbox" onClick={filterBikeStand} />
      </label>
      <input id="button-search-container" type="checkbox" />
      <div className="scrolling-search">
        <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
        <label htmlFor="button-search-container">
          <ArrowDownwardIcon />
        </label>
      </div>
      <div className="search-container">
        <div className="switch-count-container">
          <div>prendre</div>
          <Switch />
          <div>déposer</div>
          <Count />
        </div>
        <div className="search-bar">
          <input
            type="search"
            id="searchbar"
            name="searchbar"
            autoComplete="address-level4"
            placeholder="Départ"
          />
          <input
            type="search"
            id="searchbar2"
            name="searchbar"
            autoComplete="address-level4"
            placeholder="Arrivé"
          />
          <div className="search-icon">
            <SearchIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
      </div>
      <div className="map">
        <Map check={check} />
      </div>
    </div>
  );
}

export default Home;
