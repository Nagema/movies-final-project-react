import React, { useEffect } from "react";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const gotoDetail = () => {
    console.log("HOLA");
  };

  return (
    <div className="movies-container">
      {isLoading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <div onClick={gotoDetail} className="movie-card" key={movie._id}>
              <h2>{movie.title}</h2>
              <img
                className={movie.title}
                referrerPolicy="no-referrer"
                src={movie.img}
                alt={movie.title}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default MovieList;
