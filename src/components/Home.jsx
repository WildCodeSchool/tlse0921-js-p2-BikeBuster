import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Geoloc from './Geoloc';
import TakeDrop from './TakeDrop';
import BikeNumber from './BikeNumber';

function Home() {
  return (
    <div className="globalHome">
      <div className="searchbar">
        <input
          type="search"
          id="searchbar"
          name="searchbar"
          autoComplete="address-level4"
          placeholder="Adresse"
        />
        <div className="search-icon">
          <SearchIcon sx={{ color: 'white', fontSize: 25 }} />
        </div>
      </div>
      <div className="searchMenu">
        <BikeNumber />
        <TakeDrop />
      </div>
      <div>
        <Geoloc />
      </div>
    </div>
  );
}

export default Home;
