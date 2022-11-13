import React, { useState } from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const MovieCard = (movie, handleSubmit) => {
  const navigate = useNavigate();
  //console.log(movie.movie._id);

  const [fav, setFav] = useState(false);
  const favoriteToggle = (favValue) => {
    setFav(!favValue);
    console.log(fav);
  };

  const favClassName = `${fav ? "favorite-icon-active" : "favorite-icon"}`;
  console.log(fav);

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
        //onClick={() => handleSubmit(movie.movie)}
        onClick={() => favoriteToggle(fav)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  );
};

export default MovieCard;
