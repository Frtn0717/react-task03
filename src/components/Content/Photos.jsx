import style from './photos-style.module.scss';
import React, { useState, useEffect } from 'react';

const Photos = ({ album, setActiveAlbum }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const urlPhotos = `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`;

    try {
      const response = fetch(urlPhotos);

      response
        .then((res) => {
          return res.json();
        })
        .then((data) =>
          setPhotos(() => {
            return data.map((item) => {
              return item;
            });
          })
        );
    } catch (error) {
      throw new Error('Something went wrong...');
    }
  }, [album]);

  return (
    <section className={style.contentWrap}>
      <h3> {album.title.toUpperCase()} </h3>

      <div className={style.photos}>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className={style.photosItem}>
              <img src={photo.thumbnailUrl} alt={photo.title}></img>
              <span>{photo.id}</span>
            </div>
          );
        })}
      </div>
      <button className={style.backBtn} onClick={() => setActiveAlbum(null)}>
        Back
      </button>
    </section>
  );
};

export default Photos;
