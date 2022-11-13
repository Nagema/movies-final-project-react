import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MovieList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const [fav, setFav] = useState();

  const favoriteToggle = () => {
    setFav(!fav);
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
            <div className="movie-card" key={movie._id}>
              <div onClick={() => navigate(`/movies/${movie._id}`)}>
                <h2>{movie.title}</h2>
                <img
                  className={movie.title}
                  referrerPolicy="no-referrer"
                  src={movie.img}
                  alt={movie.title}
                />
              </div>
              <button className="favorite-icon" onClick={favoriteToggle}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MovieList;
