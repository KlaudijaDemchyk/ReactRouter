import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error("Помилка при отриманні користувачів", error);
      })
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Link to={`/users/${user.id}/albums`}>Album</Link>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
