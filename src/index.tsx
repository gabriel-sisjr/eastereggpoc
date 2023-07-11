import React from 'react';
import Home from './Home';
import {EasterEggProvider} from './contexts/easterEggContext';

const App: React.FC = () => {
  return (
    <EasterEggProvider>
      <Home />
    </EasterEggProvider>
  );
};

export default App;
