import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const MovieCard = (movie, favClassName, handleSubmit) => {
  const navigate = useNavigate();
  console.log(movie.movie._id);
  return (
    <div className="movie-card">
      <div onClick={() => navigate(`/movies/${movie.movie._id}`)}>
        <h2>{movie.movie.title}</h2>
        <img
          className={movie.movie.title}
          referrerPolicy="no-referrer"
          src={movie.movie.img}
          alt={movie.movie.title}
        />
      </div>
      <button
        className={favClassName}
        onClick={() => handleSubmit(movie.movie)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  );
};

export default MovieCard;
