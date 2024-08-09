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

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || ""
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
  }, [selectedGenres]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
        notes,
        setNotes,
        clearAppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
