import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://movies-api-ll3t.vercel.app/movies/id/${id}`
      );
      setMovie(data);
    };
    fetchMovie();
  }, []);
  console.log();
  return (
    <div className="movie-detail-container">
      <div className="main-info">
        <h2>{movie?.title}</h2>
        <img src={movie?.img} alt={movie?.title} />
      </div>
      <div className="secondary-info">
        <p>Genre: {movie?.info[0]?.genre}</p>
        <p>Year: {movie?.info[0]?.year}</p>
        <p>Synopsis: {movie?.info[0]?.synopsis}</p>
        <p>Duration: {movie?.info[0]?.duration}</p>
        <p>Director: {movie?.info[0]?.director}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
