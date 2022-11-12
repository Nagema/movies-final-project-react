import React, { useEffect } from "react";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="movies-container">
      {isLoading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <div onClick={() => navigate(`/movies/${movie._id}`)} className="movie-card" key={movie._id}>
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
