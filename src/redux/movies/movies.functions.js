import axios from "axios";

export const getMovies = () => async (dispatch) => {
  dispatch({ type: "gettingMovies" });

  try {
    const result = await axios("https://movies-api-ll3t.vercel.app/movies");
    dispatch({ type: "getMovies", payload: result.data });
    /* console.log(result); */
  } catch (error) {
    dispatch({ type: "errorMovies", payload: error.message });
  }
};
