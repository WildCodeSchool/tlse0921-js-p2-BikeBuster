import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineQuestionCircle,
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
            <AiOutlineQuestionCircle className="icon-menu" />{' '}
          </div>

          <div className="white-button-pc">
            <h1>Tutoriels</h1>
          </div>
        </Link>
        <Link to="/Tarifs">
          <div className="white-button">
            <AiOutlineEuro className="icon-menu" />{' '}
          </div>
          <div className="white-button-pc">
            <h1>Tarifs</h1>
          </div>
        </Link>
        <Link to="/Apropos">
          <div className="white-button" id="exlamation">
            <AiOutlineExclamationCircle className="icon-menu" />{' '}
          </div>

          <div className="white-button-pc">
            <h1>A propos</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
