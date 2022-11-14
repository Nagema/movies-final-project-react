import React, { useEffect } from "react";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";
import MovieCard from "../movie-card/MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="search-wrapper">
          <input type="search" className="input-search" placeholder="Search" />
        </div>
      )}
      <div className="movies-container">
        {isLoading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : (
          movies.map((movie) => {
            return <MovieCard key={movie._id} movie={movie} />;
          })
        )}
      </div>
    </>
  );
};

export default MovieList;
