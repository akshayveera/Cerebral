import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext<{ loggedIn: boolean, setLoggedIn: any }>({
  loggedIn: true,
  setLoggedIn: () => {}
});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

import { ReactNode } from 'react';

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(true);  // Example state
  return (
    <GlobalContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};
