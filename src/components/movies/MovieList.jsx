import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";
import MovieCard from "../movie-card/MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);

  const [data, setData] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

 

 /*  const handleSubmit = (movie) => {
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
  }; //fix pending */

 

  return (
    <div className="movies-container">
      {isLoading ? (
        <div className="loader-wrapper">
          <span className="loader"></span>
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie._id}
              movie={movie}
            />
          );
        })
      )}
    </div>
  );
};

export default MovieList;
