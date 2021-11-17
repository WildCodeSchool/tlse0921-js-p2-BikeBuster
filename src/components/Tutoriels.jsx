import Switch from '@mui/material/Switch';
import { green } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import { useState, useCallback } from 'react';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[600],
    '&:hover': {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[600],
  },
}));

function Tutoriels() {
  const [click, setClick] = useState(false);

  const handleClick = useCallback(() => {
    setClick(!click);
  }, [click]);

  return (
    <div className="Tutoriels">
      <div>
        <h1>Tutoriels</h1>
        <div className="prendreDeposer">
          <h2 className="titreprendre">Prendre</h2>
          <GreenSwitch onClick={handleClick} />
          <h2>Déposer</h2>
        </div>
        {!click && (
          <div className="prendre">
            <div className="vidéotutoprendre">
              <iframe
                src="https://www.youtube.com/embed/poc2ycUmtIY"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
            <div className="etapes">
              <h4>Etape 1 :</h4>
              <p className="explications">
                Trouver une station avec un vélo disponible et en bon état.
              </p>
              <h4>Etape 2 :</h4>
              <p className="explications">
                Suivre les indications de la borne pour selectionner le vélo et
                effectuer le paiement.
              </p>
              <h4>Etape 3 :</h4>
              <p className="explications">
                Appuyer sur le bouton pour retirer le vélo.
              </p>
              <h4>Etape 4 :</h4>
              <p className="explications">Règler le vélo à la bonne hauteur.</p>
            </div>
          </div>
        )}
        ;
        {click && (
          <div className="deposer">
            <div className="vidéotutodeposer">
              <iframe
                src="https://www.youtube.com/embed/_jjqjgpcA70"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
            <div className="etapes">
              <h4>Etape 1 :</h4>
              <p className="explications">
                Devant un empacement libre, enclenchez votre vélo.
              </p>
              <h4>Etape 2 :</h4>
              <p className="explications">
                Attendez un instant, un voyant vert suivi du double bip signifie
                que votre vélo est bien vérrouillé.
              </p>
              <h4>Attention</h4>
              <p className="explications">
                Si votre vélo est mal enclenché, le bip sera permanent
                Votre responsabilité sera engagée. Essayez à nouveau.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="imagetuto">
        <img src="/imgtuto.svg" alt="" />
      </div>
    </div>
  );
}

export default Tutoriels;
