import axios from "axios";

export const getMovies = () => async (dispatch) => {
  dispatch({ type: "gettingMovies" });

  try {
    const result = await axios("http://localhost:8080/movies/");
    dispatch({ type: "getMovies", payload: result.data.results });
  } catch (error) {
    dispatch({ type: "errorMovies", payload: error.message });
  }
};
