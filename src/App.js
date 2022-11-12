import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AuthRoute from "./components/authRoute/AuthRoute";
import MovieDetail from "./components/movie-detail/MovieDetail";
import Navbar from "./components/navbar/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import { checkSession } from "./redux/auth/auth.actions";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();  
  useEffect(()=>{
    token && dispatch(checkSession(token, navigate))
  },[])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/favorites" element={<AuthRoute component={<Favorites/>}/>}></Route>
        <Route path="/login" element={<LoginRegister/>}></Route>
        <Route path="movies/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
