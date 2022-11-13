import React, { useState } from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../shared/services/api";
import { modifyUser } from "../../redux/auth/auth.actions";

const MovieCard = (movie) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const favoriteToggle = async (favValue, movie) => {
    setFav(!favValue);
    console.log(movie.info);
    console.log(user);

    const favoriteMovies = [...user.favorites];
    favoriteMovies.push(movie.movie._id);
    let data = {
      favorites: [...favoriteMovies],
    };
    data = JSON.stringify(data);
    console.log(data);
    await API.put(`/users/edit/${user._id}`, data);
    dispatch(modifyUser());
  };

  const favClassName = `${fav ? "favorite-icon-active" : "favorite-icon"}`;

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
        onClick={() => favoriteToggle(fav, movie)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  );
};

export default MovieCard;
