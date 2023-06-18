import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(res => {
        setAlbums(res.data);
      })
      .catch(error => {
        console.error("Помилка при отриманні альбомів", error);
      })
  }, [userId]);

  return (
    <div>
      <h1>Альбоми користувача {userId}</h1>
      {albums.map(album => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          <Link to={`/albums/${album.id}/photos`}>Photos</Link>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
