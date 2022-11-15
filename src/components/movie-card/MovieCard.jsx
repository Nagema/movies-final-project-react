import React, { useEffect, useState } from "react";
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

  const userFavorites = user?.favorites;
  useEffect(() => {
    if (userFavorites) {
      for (let favorite of userFavorites) {
        if (favorite._id === movie.movie._id) {
          setFav(true);
        }
      }
    }
  }, [user]);

  const favoriteToggle = async (favValue, movie) => {
    setFav(!favValue);
    if (!user) {
      navigate("/login");
      return;
    }

    const favoriteIds = user?.favorites.map((movieInfo) => movieInfo._id);
    let favorites = [...user.favorites];
    const movieId = movie.movie._id;

    if (!favoriteIds.includes(movieId)) {
      favorites.push(movieId);
    } else {
      favorites = favorites.filter((fav) => fav._id !== movieId);
    }
    const data = {
      favorites,
    };
    dispatch(modifyUser(user, JSON.stringify(data)));
  };

  const favClassName = `${fav ? "favorite-icon-active" : "favorite-icon"}`;
  return (
    <div className="movie-card">
      <button
        className={favClassName}
        onClick={() => favoriteToggle(fav, movie)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <div className="title-container">
        <h2>{movie.movie.title}</h2>
      </div>
      <div className="img-container">
        <img
          onClick={() => navigate(`/movies/${movie.movie._id}`)}
          className="movie-card-image"
          referrerPolicy="no-referrer"
          src={movie.movie.img}
          alt={movie.movie.title}
        />
      </div>
    </div>
  );
};

export default MovieCard;
