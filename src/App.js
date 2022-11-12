import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Navbar from "./components/navbar/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="movies/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
