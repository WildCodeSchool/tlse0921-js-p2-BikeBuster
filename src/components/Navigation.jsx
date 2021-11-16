import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineBulb,
  AiOutlineEuro,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';

function Navigation() {
  return (
    <div className="container-menu">
      <div className="logo">
        <video className="video" autoPlay muted>
          <track kind="captions" />
          <source src="/videoBikeBuster.mp4" type="video/mp4" />
        </video>
        <Link to="/">
          <div>Bike Buster</div>
        </Link>
      </div>
      <div className="menu">
        <Link to="/Tutoriels">
          <div className="white-button">
            <AiOutlineBulb className="icon-menu" />{' '}
          </div>
          <h1 className="white-button-pc">Tutoriels</h1>
        </Link>
        <Link to="/Tarifs">
          <div className="white-button">
            <AiOutlineEuro className="icon-menu" />{' '}
          </div>
          <h1 className="white-button-pc">Tarifs et abonnements</h1>
        </Link>
        <Link to="/Apropos">
          <div className="white-button">
            <AiOutlineExclamationCircle className="icon-menu" />{' '}
          </div>
          <h1 className="white-button-pc">A propos</h1>
        </Link>
        <img className="english-flag" src="/english.png" alt="english flag" />
      </div>
    </div>
  );
}

export default Navigation;
