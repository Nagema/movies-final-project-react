import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const [data, setData] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const [fav, setFav] = useState(null);
  const favoriteToggle = (favValue) => {
    setFav(!favValue);
    // console.log(fav, !favValue);
  };

  const handleSubmit = (movie) => {
    // console.log(movie.info);

    favoriteToggle(movie.info[0].favorites);

    const data = {
      info: [{ favorites: fav }],
    };
    // console.log(data);
    // console.log(movie);
    axios
      .put(`https://movies-api-ll3t.vercel.app/movies/${movie._id}`, data)
      .then((res) => {
        setData(res.data);
      });
  }; //fix pending

  const favClassName = `${fav ? "favorite-icon-active" : "favorite-icon"}`;

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
              <button
                className={favClassName}
                onClick={() => handleSubmit(movie)}
              >
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
