import React from "react";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/movies.functions";
const MovieList = () => {
  const dispatch = useDispatch();
  dispatch(getMovies());
  return <div>MovieList</div>;
};

export default MovieList;
