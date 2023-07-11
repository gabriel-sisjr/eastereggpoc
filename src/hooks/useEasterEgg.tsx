import {useContext} from 'react';
import {EasterEggContext} from '../contexts/easterEggContext';

const useEasterEgg = () => {
  const context = useContext(EasterEggContext);

  if (!context) {
    throw new Error('useError must be used within an AuthProvider.');
  }

  return context;
};

export default useEasterEgg;
