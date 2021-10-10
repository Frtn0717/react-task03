import style from './content-style.module.scss';
import React, { useEffect } from 'react';

const Albums = ({ albums, setAlbums, user, showPhotos }) => {
  useEffect(() => {
    const urlAlbums = `https://jsonplaceholder.typicode.com/users/${user.id}/albums`;
    try {
      const response = fetch(urlAlbums);

      response
        .then((res) => {
          return res.json();
        })
        .then((data) =>
          setAlbums(() => {
            return data.map((item) => {
              return item;
            });
          })
        );
    } catch (error) {
      throw new Error('Something went wrong...');
    }
  });

  return (
    <section className={style.contentWrap}>
      <h3> Albums </h3>

      <div className={style.albums}>
        {albums.map((album) => {
          return (
            <div
              key={album.id}
              className={style.albumItem}
              onClick={() => showPhotos(album)}
            >
              {album.title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Albums;
