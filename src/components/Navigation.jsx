import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <Link to="/">
        <li>video logo</li>
      </Link>
      <Link to="/Tutoriels">
        <li>Tutoriels</li>
      </Link>
      <Link to="/Tarifs">
        <li>Tarifs et abonnements</li>
      </Link>
      <Link to="/Apropos">
        <li>A propos</li>
      </Link>
    </ul>
  );
}

export default Navigation;
