import React, { createContext, useContext, useState, useEffect } from 'react';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (dish) => {
    setFavourites(prev => {
      const exists = prev.find(item => item.id === dish.id);
      if (exists) {
        return prev.filter(item => item.id !== dish.id);
      } else {
        return [...prev, dish];
      }
    });
  };

  const isFavourite = (dishId) => {
    return favourites.some(d => d.id === dishId);
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouriteContext);
