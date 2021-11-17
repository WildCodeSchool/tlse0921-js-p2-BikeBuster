/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Apropos = () => (
  <div>
    <h2 id="Apropos-title">A propos</h2>
    <div className="Apropos-container">
      <div className="Apropos-card">
        <h1>Qu'est-ce que Bike Buster ?</h1>
        <p>
          Bike Buster, c'est la toute première application permettant de trouver
          la station de velib la plus proche en moins de 10s, évitant ainsi les
          trajets inutiles entre les différentes stations pour essayer de trouver
          un velib ou en déposer un. De part son accessibilté incroyable et sa
          capacité à sauver des vies, Bike Buster a indéniablement réussi à se
          hisser dans le Top 10 HIT Machine de l'été 2021 des applications mobiles
          et pourrait bientot atteindre le rang de 8eme merveille du monde.{' '}
        </p>
      </div>
      <div className="Apropos-card">
        <h1>Qui somme nous ?</h1>
        <p>
          l'équipe derrière ce bijoux est composé de Cristi, Laurie, Leo, Antonia
          et Malik. <br /> Vous pouvez scroller en bas pour découvrir nos ptites
          têtes.{' '}
        </p>
        <div className="Arrow">
          <ArrowDownwardIcon />
        </div>
      </div>
    </div>
  </div>
);

export default Apropos;
