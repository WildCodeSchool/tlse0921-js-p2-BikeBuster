import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Tutoriels from './components/Tutoriels';
import Tarifs from './components/Tarifs';
import Apropos from './components/Apropos';
import Data from './components/JcDecaux';

function App() {
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/Tutoriels" exact component={Tutoriels} />
      <Route path="/Tarifs" exact component={Tarifs} />
      <Route path="/Apropos" exact component={Apropos} />

      <Data />


    </div>
  );
}

export default App;
