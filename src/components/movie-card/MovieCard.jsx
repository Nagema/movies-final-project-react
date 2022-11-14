import React, { useState } from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { modifyUser } from "../../redux/auth/auth.actions";

const MovieCard = (movie) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  /* if (favoritesList.includes(movie.movie._id)) {
    setFav(true)
  } */
  const favoriteToggle = async (favValue, movie) => {
    setFav(!favValue);
    //console.log(fav);
    console.log(user);
    console.log(movie);
    /* if (user.favorites.includes(movie.movie._id)) {
      console.log("REPETIDO");
    } */
    let favoritesList = user?.favorites.map(movieInfo => movieInfo._id)
    if (user && !favoritesList.includes(movie.movie._id)) {
      const favoriteMovies = [...user.favorites];
      favoriteMovies.push(movie.movie._id);
      /* setFav(true) */
      let data = {
        favorites: [...favoriteMovies],
      };
      data = JSON.stringify(data);
      dispatch(modifyUser(user, data));
    } else if (!user){
      navigate("/login");
    }
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
