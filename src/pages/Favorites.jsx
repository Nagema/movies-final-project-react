import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Favorites.css";
import axios from "axios";
import MovieCard from "../components/movie-card/MovieCard";

const Favorites = () => {
  const { user } = useSelector((state) => state.auth);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `https://movies-api-ll3t.vercel.app/users/`
      );
      const filteredUser = data.filter((userData) => userData._id === user._id);
      setFavList(filteredUser[0].favorites);
    };
    fetchUsers();
  }, []);
  return (
    <div className="favorite-list">
      {favList ? (
        favList.map((movie) => {
          console.log();
          return <MovieCard key={movie._id} movie={movie} />;
        })
      ) : (
        <p className="no-favorites-message">
          ¯\_(ツ)_/¯ Looks like you don't have favorites yet
        </p>
      )}
    </div>
  );
};

export default Favorites;
