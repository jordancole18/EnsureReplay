import React, { useState, useContext, createContext, useMemo } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [showBackButton, setShowBackButton] = useState(false);

  const values = useMemo(
    () => ({
      showBackButton,
      setShowBackButton,
    }),
    [showBackButton, setShowBackButton]
  );

  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error(
      "useNavbar must be used within a NavbarProvider component."
    );
  }

  return context;
};
