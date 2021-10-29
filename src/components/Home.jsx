import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Geoloc from './Geoloc';

function Home() {
  return (
    <div className="searchbar">
      <input type="search" id="searchbar" name="searchbar" autoComplete="address-level4" placeholder="Adresse" />
      <div className="searchIcon">
        <SearchIcon sx={{ color: 'white', fontSize: 25 }} />
      </div>
      <div>
        <Geoloc />
      </div>
    </div>
  );
}

export default Home;
