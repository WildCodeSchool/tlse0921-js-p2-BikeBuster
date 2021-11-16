import { React, useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Map from './Map';
import Count from './Counter';
import SearchFrom from './SearchFrom';
import SearchTo from './SearchTo';

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

  return (
    <div className="globalHome">
      <input id="button-search-container" type="checkbox" />
      <div className="scrolling-search">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="button-search-container">
          <MenuIcon />
        </label>
      </div>
      <div className="search-container">
        <Count
          count={count}
          handleMoreBikes={handleMoreBikes}
          handleLessBikes={handleLessBikes}
        />
        <div className="search-bar">
          <div className="departure">
            <SearchFrom />
          </div>
          <div className="arrival">
            <SearchTo />
          </div>
          <div className="search-icon">
            <SearchIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
      </div>
      <div>
        <Map count={count} />
      </div>
    </div>
  );
}

export default Home;
