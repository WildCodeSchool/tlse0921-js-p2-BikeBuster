import Switch from '@mui/material/Switch';
import React from 'react';

const Tutoriels = () => (

  <div className="Tutoriels">
    <div>
      <h1>
        Tutoriels
      </h1>
      <div className="prendreDeposer">
        <h2>
          Prendre un vélo
        </h2>
        <Switch defaultChecked />
        <h2>
          Déposer un vélo
        </h2>
      </div>
      <div className="tuto">
        <div className="vidéo tuto">
          <p>
            Vidéo tuto
          </p>
        </div>
        <div className="etapes">
          <h3>Différentes étapes</h3>
          <h4>Etape 1 :</h4>
          <p>blablabla</p>
          <h4>Etape 2 :</h4>
          <p>blablabla</p>
          <h4>Etape 3 :</h4>
          <p>blablabla</p>
        </div>
      </div>
    </div>
  </div>
);

export default Tutoriels;
