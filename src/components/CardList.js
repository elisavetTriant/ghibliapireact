import React from 'react';
import Card from './Card';
//import videos from '../filmVideos.js';


function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.movie_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

const CardList = ({ films, videos, onShowVideo }) => {

  return (
    <div className="container">
      {
        films.map((film, i) => {
        
        let  current_video = '';

        if (filterItems(videos, film.title).length) {
          current_video = filterItems(videos, film.title)[0].movie_youtube_key;
        }
           

          return (
            <Card
              key={i}
              id={film.id}
              title={film.title}
              description={film.description}
              release_date={film.release_date}
              director={film.director}
              producer={film.producer}
              video_id={current_video}
              onShowVideo = {onShowVideo}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;