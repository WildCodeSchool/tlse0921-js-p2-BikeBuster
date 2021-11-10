import Switch from '@mui/material/Switch';
import React from 'react';

const Tutoriels = () => (
  <div className="Tutoriels">
    <div>
      <h1>Tutoriels</h1>
      <div className="prendreDeposer">
        <h2>Prendre un vélo</h2>
        <Switch defaultChecked />
        <h2>Déposer un vélo</h2>
      </div>
      <div className="tuto">
        <div className="vidéo tuto">
          <p>Vidéo tuto</p>
        </div>
        <div className="etapes">
          <h3>Différentes étapes</h3>
          <h4>Etape 1 :</h4>
          <p className="explications">Je trouve une station avec un vélo disponible et en bon état.</p>
          <h4>Etape 2 :</h4>
          <p className="explications">
            Je suis les indications de la borne pour selectionne le vélo et
            effectuer le paiement.
          </p>
          <h4>Etape 3 :</h4>
          <p className="explications">J appuie sur le bouton pour retirer le vélo</p>
          <h4>Etape 4 :</h4>
          <p className="explications">Je règle le vélo à ma hauteur puis le profite de ma balade.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Tutoriels;
