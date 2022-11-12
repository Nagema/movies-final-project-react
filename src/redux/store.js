import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import moviesReducer from "./movies/movies.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
