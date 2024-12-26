import React, { createContext, useContext, useState } from "react";

// Create the context
const MenuContext = createContext();

// Create a provider component
export function MenuProvider({ children }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isMenuVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
