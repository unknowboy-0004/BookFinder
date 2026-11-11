import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Pages/Favorites";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, isLoaded]);

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <SearchBar favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }

        />
      </Routes>
    </div>
  );
}

export default App;
