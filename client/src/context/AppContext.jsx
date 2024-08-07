/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [selectedGenres, setSelectedGenres] = useState(
    JSON.parse(localStorage.getItem("selectedGenres")) || []
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
  }, [selectedGenres]);

  const clearAppData = () => {
    localStorage.clear();
    setUser(null);
    setSelectedGenres([]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        selectedGenres,
        setSelectedGenres,
        clearAppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
