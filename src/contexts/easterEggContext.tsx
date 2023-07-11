import React, {useState, useCallback} from 'react';

type ContextType = {
  isEasterEggActive: boolean;
  count: number;
  toggle: () => void;
};

type IProps = {
  children: React.ReactNode;
};

const EasterEggContext = React.createContext<ContextType>({} as ContextType);

const EasterEggProvider: React.FC<IProps> = ({children}) => {
  const [count, setCount] = useState<number>(1);
  const [isEasterEggActive, setIsEasterEggActive] = useState<boolean>(false);

  const contextValue = {
    isEasterEggActive,
    count,
    toggle: useCallback(() => {
      setCount(count + 1);
      setIsEasterEggActive(() => {
        if (count % 10 === 0) {
          setCount(1);
          return !isEasterEggActive;
        }
        return isEasterEggActive;
      });
    }, [count, isEasterEggActive]),
  };

  return (
    <EasterEggContext.Provider value={contextValue}>
      {children}
    </EasterEggContext.Provider>
  );
};

export {EasterEggProvider, EasterEggContext};
