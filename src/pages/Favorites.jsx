import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Favorites = () => {
  const { user } = useSelector((state) => state.auth);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `https://movies-api-ll3t.vercel.app/users/`
      );
      const filteredUser = data.filter((userData) => userData._id === user._id);
      setFavList(filteredUser[0].favorites);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {favList.map((movie) => {
        console.log();
        return (
          <div key={movie._id}>
            <p>{movie.title}</p>
            <img src={movie.img} alt={movie.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
