import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Map from './Map';
// import Geoloc from './Geoloc';
// import TakeDrop from './TakeDrop';
// import BikeNumber from './BikeNumber';

function Home() {
  return (
    <div className="globalHome">
      <div className="searchContainer">
        <div className="searchbar">
          <input
            type="search"
            id="searchbar"
            name="searchbar"
            autoComplete="address-level4"
            placeholder="Départ"
          />
          <input
            type="search"
            id="searchbar"
            name="searchbar"
            autoComplete="address-level4"
            placeholder="Arrivé"
          />
        </div>
        <div className="search-icon">
          <SearchIcon sx={{ color: 'green', fontSize: 25 }} />
        </div>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default Home;
