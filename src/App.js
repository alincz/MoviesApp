import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Favorites from "./components/Favorites"; 
import { useState } from "react";
function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === movie.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, movie];
    });
  };

  const deleteFromFavorites = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Main addToFavorites={addToFavorites} favorites={favorites} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteMovies={favorites}
              onDelete={deleteFromFavorites}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
