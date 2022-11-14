import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";
import MovieCard from "../movie-card/MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const filteredMovies = [];

  movies.map((movie) => {
    if (movie.title.toLowerCase().includes(searchInputValue.toLowerCase())) {
      filteredMovies.push(movie);
    }
  });

  const moviesInfo = filteredMovies.length ? filteredMovies : movies;

  return (
    <>
      {!isLoading && (
        <div className="search-wrapper">
          <input
            type="search"
            className="input-search"
            placeholder="Search"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
        </div>
      )}
      <div className="movies-container">
        {isLoading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : (
          moviesInfo.map((movie) => {
            return <MovieCard key={movie._id} movie={movie} />;
          })
        )}
      </div>
    </>
  );
};

export default MovieList;
