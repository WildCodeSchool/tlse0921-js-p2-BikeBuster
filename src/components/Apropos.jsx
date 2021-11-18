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
          trouver la station de velib la plus proche en moins de 10s, évitant
          ainsi les trajets inutiles entre les différentes stations pour essayer
          de trouver un velib ou en déposer un. De part son accessibilté
          incroyable et sa capacité à sauver des vies, Bike Buster a
          indéniablement réussi à se hisser dans le Top 10 HIT Machine de
          l&apos;été 2021 des applications mobiles et pourrait bientot atteindre
          le rang de 8eme merveille du monde.{' '}
        </p>
      </div>
      <div className="Apropos-card">
        <h1>Qui somme nous ?</h1>
        <p>
          l&apos;équipe derrière ce bijou est composé de Cristi, Laurie, Leo,
          Antonia et Malik. <br /> Vous pouvez scroller en bas pour découvrir
          nos ptites têtes.{' '}
        </p>
        <div className="Arrow">
          <ArrowDownwardIcon />
        </div>
      </div>
    </div>
    <div className="carousell">
      <Carousel autoPlay>
        <div className="carousel">
          <img
            alt=""
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c5/13/bb/provided-by-office-de.jpg?w=700&h=500&s=1"
          />
          <p className="legend">Malik</p>
        </div>
        <div className="carousel">
          <img
            alt=""
            src="https://www.gl-events.com/sites/default/files/styles/hero_background_image/public/2018-12/Photo%20Toulouse%20-%20credit%20Toulouse%20Ev%C3%A9nements_1.jpg?itok=Q9sUb-WX"
          />
          <p className="legend">Antonia</p>
        </div>
        <div className="carousel">
          <img
            alt=""
            src="https://static.actu.fr/uploads/2020/12/adobestock-287216683-1.jpeg"
          />
          <p className="legend">Laurie</p>
        </div>
        <div className="carousel">
          <img
            alt=""
            src="https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F02.2F20.2F68df8f7e-43b2-40aa-96df-3516a24fd019.2Ejpeg/1150x647/background-color/ffffff/quality/70/quels-sont-les-meilleurs-quartiers-de-toulouse.jpg"
          />
          <p className="legend">Leo</p>
        </div>
        <div className="carousel">
          <img
            alt=""
            src="https://www.toulouse-tourisme.com/sites/www.toulouse-tourisme.com/files/styles/incontournable_hp/public/thumbnails/image/incontournables_toulouse.jpg?itok=iI-TWLoM"
          />
          <p className="legend">Cristi</p>
        </div>
      </Carousel>
    </div>
  </div>
);

export default Apropos;
