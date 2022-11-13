import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Favorites = () => {
  const { user } = useSelector((state) => state.auth);
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        `https://movies-api-ll3t.vercel.app/users/`
      );
      const filteredUser = data.filter((userData) => userData._id === user._id);
      setUser(filteredUser[0].favorites);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        console.log();
        return (
          <div key={user._id}>
            <p>{user.title}</p>
            <img src={user.img} alt={user.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
