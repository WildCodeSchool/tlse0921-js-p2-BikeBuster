import { React, useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Map from './Map';
import Count from './Counter';

function Home() {
  const [count, setCount] = useState(1);

  // function handleMoreBikes() {
  //   if (count > 1) { setCount((e) => e - 1); }
  // }

  // function handleLessBikes() {
  //   if (count < 20) { setCount((e) => e + 1); }
  // }

  // const memoizedCallback = useCallback(
  //   () => {
  //     doSomething(a, b);
  //   },
  //   [a, b],
  // );

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
      <div>
        <Map count={count} />
      </div>
    </div>
  );
}

export default Home;
