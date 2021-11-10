import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Map from './Map';
import Count from './Counter';
// import TakeDrop from './TakeDrop';
// import BikeNumber from './BikeNumber';

function Home() {
  return (
    <div className="globalHome">
      <input id="button-search-container" type="checkbox" />
      <div className="scrolling-search">
        <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
        <label htmlFor="button-search-container">
          <MenuIcon />
        </label>
      </div>
      <div className="search-container">
        <Count />
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
            placeholder="Arrivée"
          />
          <div className="search-icon">
            <SearchIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default Home;
