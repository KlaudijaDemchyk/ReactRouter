import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => {
        setPhotos(res.data);
      })
      .catch(error => {
        console.error("Помилка при отриманні фотографій", error);
      })
  }, [albumId]);

  return (
    <div>
      <h1>Фотографії альбому {albumId}</h1>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
