import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Apropos = () => (
  <div>
    <h2 id="Apropos-title">A propos</h2>
    <div className="Apropos-container">
      <div className="Apropos-card">
        <h1>Qu&apos;est-ce que Bike Buster ?</h1>
        <p>
          Bike Buster, c&apos;est la toute première application permettant de
          trouver la station de Vélib la plus proche en moins de 10 secondes,
          évitant ainsi les trajets inutiles entre les différentes stations pour
          essayer de trouver un Vélib ou en déposer un. De par son accessibilté
          incroyable et sa capacité à sauver des vies, Bike Buster a
          indéniablement réussi à se hisser dans le Top 10 HIT Machine de
          l&apos;été 2021 des applications mobiles et pourrait bientôt atteindre
          le rang de 8ème Merveille du monde.{' '}
        </p>
      </div>
      <div className="Apropos-card">
        <h1>Qui somme nous ?</h1>
        <p>
          l&apos;équipe derrière ce bijou est composée de Cristi, Laurie, Leo,
          Antonia et Malik. <br /> Vous pouvez scroller en bas pour découvrir
          nos p&apos;tites têtes.{' '}
        </p>
        <div className="Arrow">
          <ArrowDownwardIcon />
        </div>
      </div>
    </div>
    <div className="carousell">
      <h1 className="our-team"> Notre équipe </h1>
      <Carousel autoPlay>
        <div className="carousel">
          <img alt="" src="/assets/malik.jpg" />
          <p className="legend">Malik</p>
        </div>
        <div className="carousel">
          <img alt="" src="/assets/antonia.jpg" />
          <p className="legend">Antonia</p>
        </div>
        <div className="carousel">
          <img alt="" src="/assets/laurie.jpg" />
          <p className="legend">Laurie</p>
        </div>
        <div className="carousel">
          <img alt="" src="/assets/leo.jpg" />
          <p className="legend">Leo</p>
        </div>
        <div className="carousel">
          <img alt="" src="/assets/cristi.jpg" />
          <p className="legend">Cristi</p>
        </div>
      </Carousel>
    </div>
  </div>
);

export default Apropos;
