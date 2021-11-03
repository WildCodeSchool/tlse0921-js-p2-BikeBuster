import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import img1 from '../assets/image.jpeg';
import img2 from '../assets/velotoulouse.jpeg';

const Tarifs = () => (
  <div className="tarif">
    <div>
      <div className="ticket-title">
        <h1>Tickets <FaMoneyBillAlt /></h1>
        Pour rouler en toute tranquillité,
        pensez à consulter les tarifs avant
        de partir à vélo et faites votre itinéraire.
      </div>
      <div className="table">
        <table className="table-style">
          <thead>
            <tr>
              <th>/</th>
              <th>Ticket 1 jour</th>
              <th>Ticket 7 jour</th>
              <th>Abonnement 1 mois</th>
              <th>Abonnement 1 an</th>
            </tr>
          </thead>
          <tbody className="body">
            <tr>
              <td>VéloToulouse classique</td>
              <td>1,20€</td>
              <td>5€</td>
              <td>10€</td>
              <td>25€</td>
            </tr>
            <tr>
              <td>VéloToulouse Pastel</td>
              <td>/</td>
              <td>/</td>
              <td>10€</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>VélÔToulouse montoulouse et montoulouse Sénior</td>
              <td>/</td>
              <td>/</td>
              <td>/</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>VéloToulouse classique</td>
              <td>1,20€</td>
              <td>5€</td>
              <td>10€</td>
              <td>25€</td>
            </tr>
            <tr>
              <td>VélÔToulouse Etudiants MUT</td>
              <td>/</td>
              <td>/</td>
              <td>/</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>La 1ère demi-heure</td>
              <td>Gratuit</td>
              <td>Gratuit</td>
              <td>Gratuit</td>
              <td>Gratuit</td>
            </tr>
            <tr>
              <td>Entre ½ h et 1h</td>
              <td>0,5€</td>
              <td>0,5€</td>
              <td>0,5€</td>
              <td>0,5€</td>
            </tr>
            <tr>
              <td>Entre 1h et 2h</td>
              <td>1,50€</td>
              <td>1€</td>
              <td>1€</td>
              <td>1€</td>
            </tr>
            <tr>
              <td>Au-delà de 2h / par heure suivante</td>
              <td>2€</td>
              <td>1€</td>
              <td>1€</td>
              <td>1€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <div className="cards">
      <h2>Abonnement</h2>
      <div className="card-text-center">
        <div className="overflow1">
          <img src={img1} alt="image2" />
          <h2 className="card-title1">Abonnement mensuel</h2>
          <p>
            Souple, l abonnement mensuel vous permet d utiliser
            le service selon vos besoins tout en profitant des avantages de la carte d abonné.
            Celle-ci vous permet de prendre un vélo rapidement et de vous déplacer d’une station
            à l’autre en quelques minutes.
          </p>
          <br />
          <br />
          <a href="http://www.velo.toulouse.fr/Abonnements-et-Tickets/Abonnements/Abonnement-mensuel2" onClick="window.open(this.href);return false;" className="button1">Voir le site</a>
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="overflow2">
          <img src={img2} alt="image2" />
          <h2 className="card-title2">Abonnement annuel</h2>
          <p>
            Simple d utilisation, l abonnement annuel vous permet de louer un vélo rapidement.
            Il suffit de passer sa carte directement sur le lecteur de la borne.
            Vous pouvez ainsi vous déplacer d’une station à l’autre en quelques minutes.
            <br />
            <br />
          </p>
          <a href="http://www.velo.toulouse.fr/Abonnements-et-Tickets/Abonnements/Abonnement-mensuel2" onClick="window.open(this.href);return false;" className="button2">Voir le site</a>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
    </div>
  </div>

);
export default Tarifs;